import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "../components/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Link } from "react-router-dom";

const ViewCart = () => {
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[$,]/g, ""));
    return sum + (isNaN(price) ? 0 : price);
  }, 0);

  const removeFromCart = (itemIndex) => {
    const updated = cart.filter((_, i) => i !== itemIndex);
    setCart(updated);
  };

  return (
    <>
      <Navbar />
      <Container
        className="border border-dark-subtle rounded-4 shadow-lg"
        style={{ backgroundColor: "ghostwhite" }}
      >
        <Row>
          <Col md={8}>
            {cart.length === 0 ? (
              <p
                className="mt-4 mb-5 mx-5 px-4 py-2 text-center fw-bold text-dark bg-light rounded-pill shadow-lg"
                style={{ letterSpacing: "1px", fontSize: "2.2rem" }}
              >
                {`Your Cart is Empty :(`}
              </p>
            ) : (
              <>
                <p
                  className="mt-4 mb-5 mx-5 px-4 py-2 text-center fw-bold text-dark bg-light rounded-pill shadow-lg"
                  style={{ letterSpacing: "1px", fontSize: "2.2rem" }}
                >
                  Your Cart
                </p>
                {cart.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="card mb-4 mt-4 mx-5 flex-row shadow rounded-4 align-items-center bg-light"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="rounded-4 m-3"
                      style={{
                        width: "200px",
                        height: "130px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="flex-grow-1 p-3">
                      <h5 className="fw-bold">{item.name}</h5>
                      <p className="text-primary fw-bold">{item.price}</p>
                    </div>
                    <OverlayTrigger
                      trigger="hover"
                      placement="left"
                      overlay={
                        <Popover>
                          <Popover.Body>Remove Item</Popover.Body>
                        </Popover>
                      }
                      rootClose
                    >
                      <Button
                        className="text-danger fs-4 me-3 fw-bold border-0 rounded-pill bg-light"
                        onClick={() => removeFromCart(itemIndex)}
                      >
                        <i className="bi bi-x-circle-fill"></i>
                      </Button>
                    </OverlayTrigger>
                  </div>
                ))}
              </>
            )}
          </Col>
          <Col
            md={4}
            className="d-flex flex-column justify-content-end align-items-center"
          >
            <div className="d-flex flex-column justify-content-center align-items-center gap-3 mt-3 mb-5 w-100">
              {cart.length > 0 && (
                <>
                  <div className="mb-3 w-100">
                    <p className="fw-bold fs-4 text-center mb-1">
                      Total: ${total.toLocaleString()}
                    </p>
                  </div>
                  <Button
                    variant="light"
                    as={Link}
                    to={`/`}
                    className="rounded-pill p-2 px-3 fw-bold py-3 shadow text-capitalize"
                  >
                    Proceed to Checkout
                  </Button>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ViewCart;
