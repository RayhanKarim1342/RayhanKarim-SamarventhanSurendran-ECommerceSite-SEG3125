import React, { useState, useRef, useEffect } from "react";
import {
  Navbar,
  Container,
  Button,
  Dropdown,
  Form,
  Badge,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import items from "../assets/items";

const NavigationBar = ({ HowToPlay = true }) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [cartCount, setCartCount] = useState(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart.length;
  });
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Update cart count on localStorage change and on interval (for same-tab updates)
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    window.addEventListener("storage", updateCartCount);
    const interval = setInterval(updateCartCount, 50);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      clearInterval(interval);
    };
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.length > 0) {
      const filtered = items.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
      setShowDropdown(filtered.length > 0);
    } else {
      setResults([]);
      setShowDropdown(false);
    }
  };

  const handleResultClick = (item) => {
    setSearch("");
    setResults([]);
    setShowDropdown(false);
    navigate(`/item/${item.id}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Navbar
      expand="sm"
      fixed="top"
      className="px-3"
      style={{
        backgroundColor: "rgba(33, 37, 41, 0.9)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="mb-0 text-light fw-bold fs-4">
          Volt Buy
        </Navbar.Brand>
        <div className="d-flex align-items-center ms-auto">
          <Form className="me-3 position-relative" ref={searchRef}>
            <Form.Group controlId="search">
              <Form.Control
                placeholder="🔍 Search"
                className="rounded-4"
                value={search}
                onChange={handleSearch}
                autoComplete="off"
                onFocus={() => setShowDropdown(results.length > 0)}
              />
              {showDropdown && (
                <div
                  className="position-absolute shadow rounded-4 w-100"
                  style={{
                    zIndex: 1050,
                    top: "110%",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}
                >
                  {results.map((item) => (
                    <div
                      key={item.id}
                      className="px-3 py-2 search-result-item rounded-pill mx-3 my-2"
                      style={{ cursor: "pointer" }}
                      onMouseDown={() => handleResultClick(item)}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
            </Form.Group>
          </Form>
          <Dropdown align="end" className="me-3">
            <Dropdown.Toggle
              id="shop-dropdown"
              variant="light"
              className="ms-2 rounded-pill fw-bold"
            >
              Shop
            </Dropdown.Toggle>

            <Dropdown.Menu
              className="rounded-4 shadow px-2 menu-fade"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <Dropdown.Item as={Link} to="/catalog/all">
                All Tech
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/catalog/smartphones">
                Smartphones
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/catalog/laptops">
                Laptops
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/catalog/desktops">
                Desktops
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/catalog/displays">
                TVs & Monitors
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <OverlayTrigger
            trigger={["hover", "focus"]}
            placement="bottom"
            overlay={
              <Popover
                id="how-to-play-popover"
                className="menu-fade"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <Popover.Body className="p-0 my-1">
                  <p
                    className="text-center text-white mx-2 mt-2 px-2 py-1 rounded-4 shadow mb-0"
                    style={{
                      backgroundColor: "rgba(33, 37, 41, 0.9)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                    }}
                  >
                    View Cart
                  </p>
                </Popover.Body>
              </Popover>
            }
          >
            <Button
              variant="light"
              as={Link}
              to="/cart"
              className="ms-2 rounded-pill fw-bold"
            >
              <i className="bi bi-cart"></i>
              {cartCount !== 0 && (
                <>
                  {"   "}
                  <Badge bg="danger">{cartCount}</Badge>
                </>
              )}
            </Button>
          </OverlayTrigger>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
