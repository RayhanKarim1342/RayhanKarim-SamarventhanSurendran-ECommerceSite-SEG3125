import React from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";

// placeholder images for the ones not yet completed
const items = [
  // Smartphones
  { id: 1, category: "smartphones", name: "iPhone 16", img: "/images/iphone16.jpg", price: "$1,129" },
  { id: 2, category: "smartphones", name: "Samsung Galaxy S25", img: "/images/s25.png", price: "$1,198" },
  { id: 3, category: "smartphones", name: "Google Pixel 8", img: "/images/G9.png", price: "$1,099" },
  { id: 4, category: "smartphones", name: "OnePlus 13", img: "/images/OP13.png", price: "$1,249" },
  // Laptops
  { id: 5, category: "laptops", name: "MacBook Pro M4", img: "/images/MPro.png", price: "$2,399" },
  { id: 6, category: "laptops", name: "Dell XPS 16", img: "/images/xps.avif", price: "$2,399" },
  { id: 7, category: "laptops", name: "HP Spectre x360", img: "/images/hps.png", price: "$2,389" },
  { id: 8, category: "laptops", name: "Lenovo ThinkPad X1", img: "/images/lt.avif", price: "$3,059" },
  // Desktops
  { id: 9, category: "desktops", name: "Dell Pro max", img: "/images/DP.png", price: "$1,558" },
  { id: 10, category: "desktops", name: "Mac Pro", img: "/images/MP.png", price: "$8,999" },
  { id: 11, category: "desktops", name: "HP Omen", img: "/images/HO.png", price: "$3,649" },
  { id: 12, category: "desktops", name: "Lenevo Legion Tower", img: "/images/LL.png", price: "$2,399" },
  // TVs & Monitors
  { id: 13, category: "tvs-monitors", name: "Samsung OLED TV", img: "/images/sam.png", price: "$2,999" },
  { id: 14, category: "tvs-monitors", name: "LG UltraWide Monitor", img: "/images/ul.png", price: "$1,999" },
  { id: 15, category: "tvs-monitors", name: "Pro Display XDR", img: "/images/dis.png", price: "$6,299" },
  { id: 16, category: "tvs-monitors", name: "Dell UltraSharp Moniter", img: "/images/ultra.png", price: "$2,749" },
];

const Catalog = () => {
  const { category } = useParams();
  const filtered = category === "all" ? items : items.filter(i => i.category === category);

  return (
    <div>
      <Navbar />
      <Container className="mt-6 pt-4">
        <h2
            className="mb-5 text-capitalize text-center fw-bold"
            style={{ letterSpacing: "1px", fontSize: "2.2rem" }}
        >
            {category.replace("-", " ")} Catalog
        </h2>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {filtered.map(item => (
            <Col key={item.id}>
              <Card className="h-100 shadow-sm border-0">
                <div style={{ height: "200px", overflow: "hidden", background: "#f8f9fa" }}>
                  <Card.Img
                    variant="top"
                    src={item.img}
                    alt={item.name}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fs-5">{item.name}</Card.Title>
                  <Card.Text className="text-primary fw-bold mb-2">{item.price}</Card.Text>
                  {/* Add more details or actions here if needed */}
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