import React, { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Container, Row, Col, Button, Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Navbar from "../components/Navbar";
import items from "../assets/items";

const getUnique = (arr, key) => [...new Set(arr.map((item) => item[key]))];
const getAllTags = (arr) => [...new Set(arr.flatMap((item) => item.tags))];

const priceRanges = [
  { label: "Under $1,500", min: 0, max: 1500 },
  { label: "$1,500 - $2,500", min: 1500, max: 2500 },
  { label: "Over $2,500", min: 2500, max: Infinity },
];

const Catalog = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const filteredByCategory =
    category === "all" ? items : items.filter((i) => i.category === category);

  const brands = useMemo(
    () => getUnique(filteredByCategory, "brand"),
    [filteredByCategory]
  );
  const tags = useMemo(
    () => getAllTags(filteredByCategory),
    [filteredByCategory]
  );

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const filtered = filteredByCategory.filter((item) => {
    if (selectedBrands.length && !selectedBrands.includes(item.brand))
      return false;
    if (selectedPrices.length) {
      const price = parseFloat(item.price.replace(/[$,]/g, ""));
      const inRange = selectedPrices.some((rangeLabel) => {
        const range = priceRanges.find((r) => r.label === rangeLabel);
        return price >= range.min && price < range.max;
      });
      if (!inRange) return false;
    }
    if (
      selectedTags.length &&
      !selectedTags.some((tag) => item.tags.includes(tag))
    )
      return false;
    return true;
  });

  // Handlers
  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };
  const handlePriceChange = (label) => {
    setSelectedPrices((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };
  const handleTagChange = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div>
      <Navbar />
      <Container fluid className="mt-0 pt-4">
        <Row>
          <Col md={3} className="mb-4 mt-5">
            <div className="bg-light rounded-4 shadow-sm p-4 mt-5 shadow-lg">
              <h5 className="fw-bold mb-3">Filter</h5>
              <div className="mb-3">
                <div className="fw-bold mb-2">Brand</div>
                {brands.map((brand) => (
                  <Form.Check
                    key={brand}
                    type="checkbox"
                    label={brand}
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    className="mb-1"
                  />
                ))}
              </div>
              <div className="mb-3">
                <div className="fw-bold mb-2">Price</div>
                {priceRanges.map((range) => (
                  <Form.Check
                    key={range.label}
                    type="checkbox"
                    label={range.label}
                    checked={selectedPrices.includes(range.label)}
                    onChange={() => handlePriceChange(range.label)}
                    className="mb-1"
                  />
                ))}
              </div>
              <Accordion defaultActiveKey="0" className="mb-0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span className="fw-bold">Tags</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    {tags.map((tag) => (
                      <Form.Check
                        key={tag}
                        type="checkbox"
                        label={tag}
                        checked={selectedTags.includes(tag)}
                        onChange={() => handleTagChange(tag)}
                        className="mb-1"
                      />
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
          <Col md={9}>
            <Row>
              <Col md={12}>
                <h2
                  className="mb-5 mx-5 px-4 py-2 text-capitalize text-center fw-bold text-dark bg-light rounded-pill shadow-lg"
                  style={{ letterSpacing: "1px", fontSize: "2.2rem" }}
                >
                  {category.replace("-", " ")}
                </h2>
              </Col>
            </Row>
            <Row xs={1} sm={2} md={3} lg={3} className="g-4">
              {filtered.map((item) => (
                <Col key={item.id}>
                  <Card className="h-100 shadow border-0 rounded-2">
                    <div
                      style={{
                        height: "200px",
                        overflow: "hidden",
                        background: "#f8f9fa",
                      }}
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
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="fs-5 text-center">
                        {item.name}
                      </Card.Title>
                      <Card.Text className="text-dark fw-bold mb-2 text-center">
                        {item.price}
                      </Card.Text>
                      <Button
                        variant="dark"
                        className="rounded-pill mt-auto fw-bold px-5 py-2"
                        onClick={() => navigate(`/item/${item.id}`)}
                      >
                        View Product
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
              {filtered.length === 0 && (
                <Col>
                  <div className="text-center text-muted py-5">
                    No items match your filters.
                  </div>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Catalog;
