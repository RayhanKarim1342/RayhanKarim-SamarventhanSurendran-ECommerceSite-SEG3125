import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Navbar from "../components/Navbar";

const Checkout = () => {
  const [submitted, setSubmitted] = useState(false);
  const [survey, setSurvey] = useState({ rating: "", comments: "" });
  const [surveySubmitted, setSurveySubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    card: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    localStorage.removeItem("cart");
  };

  const handleSurveyChange = (e) => {
    setSurvey({ ...survey, [e.target.name]: e.target.value });
  };

  const handleSurveySubmit = (e) => {
    e.preventDefault();
    setSurveySubmitted(true);
  };

  if (submitted && !surveySubmitted) {
    return (
      <>
        <Navbar />
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
          <div className="bg-white rounded-4 shadow-lg p-5 w-100 d-flex flex-column align-items-center" style={{ maxWidth: 500 }}>
            <Alert variant="success" className="text-center w-100 mb-4 p-4">
              <h2 className="fw-bold mb-3">Thank you for your order!</h2>
              <p className="mb-0 fs-5">
                Your order has been placed and a confirmation has been sent to your email.
              </p>
            </Alert>
            <h4 className="mt-3 mb-3 text-center">We value your feedback!</h4>
            <Form onSubmit={handleSurveySubmit} className="w-100">
              <Form.Group className="mb-3">
                <Form.Label>How would you rate your experience?</Form.Label>
                <Form.Select
                  name="rating"
                  value={survey.rating}
                  onChange={handleSurveyChange}
                  required
                >
                  <option value="">Select a rating</option>
                  <option value="5">Excellent</option>
                  <option value="4">Good</option>
                  <option value="3">Average</option>
                  <option value="2">Poor</option>
                  <option value="1">Very Poor</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Comments</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="comments"
                  value={survey.comments}
                  onChange={handleSurveyChange}
                  placeholder="Tell us about your experience..."
                  required
                />
              </Form.Group>
                <div className="d-flex justify-content-center">
                <Button
                type="submit"
                variant="dark"
                className="rounded-pill p-2 px-5 fw-bold py-3 shadow text-capitalize"
                >
                Submit Feedback
                </Button>
                </div>
            </Form>
          </div>
        </Container>
      </>
    );
  }

  if (submitted && surveySubmitted) {
    return (
      <>
        <Navbar />
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
          <div className="bg-white rounded-4 shadow-lg p-5 w-100 d-flex flex-column align-items-center" style={{ maxWidth: 500 }}>
            <Alert variant="info" className="text-center w-100 mb-0 p-4">
              <h2 className="fw-bold mb-3">Thank you for your feedback!</h2>
              <p className="mb-0 fs-5">
                We appreciate your input and hope to see you again soon.
              </p>
            </Alert>
          </div>
        </Container>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <div className="bg-white rounded-4 shadow-lg p-5 w-100" style={{ maxWidth: 500 }}>
          <h2 className="mb-4 text-center fw-bold">Checkout</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control required name="name" value={form.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control required name="address" value={form.address} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control required type="email" name="email" value={form.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Card Number</Form.Label>
              <Form.Control required type="text" name="card" value={form.card} onChange={handleChange} />
            </Form.Group>
            <div className="d-flex justify-content-center">
            <Button
                type="submit"
                variant="dark"
                className="rounded-pill p-2 px-5 fw-bold py-3 shadow text-capitalize"
            >
                Pay & Place Order
            </Button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Checkout;