import React from "react";
import { Navbar, Container, Button, Dropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

// const sections = [
//   { id: "ourServices", label: "Our Services" },
//   { id: "theBest", label: "Why We're The Best" },
// ];

const NavigationBar = ({ HowToPlay = true }) => {
  // const [activeSection, setActiveSection] = useState("");
  // const location = useLocation();
  // const navigate = useNavigate();

  // // Scroll to section with offset for fixed navbar
  // const scrollToSection = (id) => {
  //   const el = document.getElementById(id);
  //   if (el) {
  //     const yOffset = -70; // Adjust this value to match your navbar height
  //     const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  //     window.scrollTo({ top: y, behavior: "smooth" });
  //   }
  // };

  // const handleNavClick = (id) => (e) => {
  //   e.preventDefault();
  //   if (location.pathname !== "/") {
  //     navigate("/", { replace: false });
  //     setTimeout(() => {
  //       scrollToSection(id);
  //     }, 100);
  //   } else {
  //     scrollToSection(id);
  //   }
  // };

  // Update active section on scroll
  // useEffect(() => {
  //   const handleScroll = () => {
  //     let current = "";
  //     for (const section of sections) {
  //       const el = document.getElementById(section.id);
  //       if (el) {
  //         const rect = el.getBoundingClientRect();
  //         if (rect.top <= 120 && rect.bottom > 120) {
  //           current = section.id;
  //           break;
  //         }
  //       }
  //     }
  //     setActiveSection(current);
  //   };
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   handleScroll();
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [location.pathname]);

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
          <Form className="me-3">
            <Form.Group controlId="search">
              <Form.Control placeholder="🔍 Search" className="rounded-4" />
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
              className="rounded-4 shadow px-2"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <Dropdown.Item as={Link} to="/catalog/all">All Tech</Dropdown.Item>
              <Dropdown.Item as={Link} to="/catalog/smartphones">Smartphones</Dropdown.Item>
              <Dropdown.Item as={Link} to="/catalog/laptops">Laptops</Dropdown.Item>
              <Dropdown.Item as={Link} to="/catalog/desktops">Desktops</Dropdown.Item>
              <Dropdown.Item as={Link} to="/catalog/tvs-monitors">TVs & Monitors</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <OverlayTrigger
            trigger={["hover", "focus"]}
            placement="bottom"
            overlay={
              <Popover
                id="how-to-play-popover"
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
                    Cart
                  </p>
                </Popover.Body>
              </Popover>
            }
          >
            <Button
              variant="light"
              as={Link}
              to="/howToPlay"
              className="ms-2 rounded-pill fw-bold"
            >
              <i class="bi bi-cart"></i>
            </Button>
          </OverlayTrigger>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
