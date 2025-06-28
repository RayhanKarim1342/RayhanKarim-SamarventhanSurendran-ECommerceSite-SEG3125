import Container from "react-bootstrap/Container";
import Navbar from "../components/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import items from "../assets/items";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const ViewItem = () => {
  const { itemID } = useParams();
  const item = items.find((i) => i.id == parseInt(itemID));
  const capitalizedItem = (item) => {
    let words = item.split(" ");
    let returnItem = "";
    for (let i = 0; i < words.length; i++) {
      returnItem =
        returnItem + words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
    }
    return returnItem.trim();
  };

  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <Navbar />
      <Container
        className="border border-dark-subtle rounded-4 shadow-lg"
        style={{ backgroundColor: "ghostwhite" }}
      >
        <Row>
          <Col md={6}>
            <img
              src={item.img}
              className="mx-3 my-5 rounded-4 w-100 border border-dark-subtle shadow-lg"
              alt="item image"
            />
          </Col>
          <Col
            md={6}
            className="d-flex flex-column justify-content-start align-items-center"
          >
            <h2
              className="mt-5 mb-5 mx-5 px-4 py-2 text-capitalize text-center fw-bold text-dark bg-light rounded-pill shadow-lg"
              style={{ letterSpacing: "1px", fontSize: "2.2rem" }}
            >
              {item.name}
            </h2>
            <p className="display-6 mt-3 mx-5 mb-2 pb-5 px-5 text-center fs-2">
              {item.description}
            </p>
            <div className="d-flex flex-row justify-content-center align-items-center gap-3 mt-3 mb-5">
              <Button
                variant="light"
                as={Link}
                to={`/catalog/${item.category}`}
                className="rounded-pill p-2 px-3 fw-bold py-3 shadow text-capitalize"
              >
                {`View Other ${item.category}`}
              </Button>
              <Button
                variant="light"
                className="rounded-pill p-2 px-3 fw-bold py-3 shadow"
                onClick={() => addToCart(item)}
              >
                Add to Cart &nbsp;&nbsp;<i className="bi bi-cart"></i>
              </Button>
            </div>
            {showAlert && (
              <Alert variant="success" className="p-2 px-3 fw-bold py-3 shadow">
                {capitalizedItem(item.name)} Successfully added to Cart
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ViewItem;
