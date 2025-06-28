import Container from "react-bootstrap/Container";
import Navbar from "../components/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import items from "../assets/items";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";

const ViewItem = () => {
  const { itemID } = useParams();
  const item = items.find((i) => i.id == parseInt(itemID));

  return (
    <>
      <Navbar />
      <Container
        className="mt-5 border border-dark-subtle rounded-4 shadow-lg"
        style={{ backgroundColor: "aliceblue" }}
      >
        <Row>
          <Col md={4}>
            <p class="me-5 mt-4 ms-4 mb-3 text-white bg-dark mb-0 mt-2 p-2 px-3 rounded-pill shadow display-6 fw-bold text-center">
              {`This item is ${item.name}`}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ViewItem;
