import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import items from "../assets/items";

const Catalog = () => {
  const { category } = useParams();
  const filtered =
    category === "all" ? items : items.filter((i) => i.category === category);

  const navigate = useNavigate();

  const handleResultClick = (item) => {
    navigate(`/item/${item.id}`);
  };

  return (
    <div>
      <Navbar />
      <Container className="mt-0 pt-4">
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <h2
              className="mb-5 mx-5 px-4 py-2 text-capitalize text-center fw-bold text-dark bg-light rounded-pill shadow-lg"
              style={{ letterSpacing: "1px", fontSize: "2.2rem" }}
            >
              {category.replace("-", " ")}
            </h2>
          </Col>
        </Row>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {filtered.map((item) => (
            <Col key={item.id}>
              <Card className="h-100 shadow border-0 rounded-2">
                <div
                  style={{
                    height: "200px",
                    overflow: "hidden",
                    background: "#f8f9fa",
                    cursor: "pointer",
                  }}
                  onMouseDown={() => handleResultClick(item)}
                >
                  <Card.Img
                    variant="top"
                    src={item.img}
                    alt={item.name}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                    className="rounded-top-2"
                  />
                </div>
                <Card.Body
                  className="d-flex flex-column"
                  style={{ cursor: "pointer" }}
                  onMouseDown={() => handleResultClick(item)}
                >
                  <Card.Title className="fs-5">{item.name}</Card.Title>
                  <Card.Text className="text-primary fw-bold mb-2">
                    {item.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Catalog;
