import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import Catalog from "./pages/Catalog";

function App() {
  return (
    <div className="app-wrapper d-flex flex-column min-vh-100">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog/:category" element={<Catalog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <footer
        className="footer bg-dark text-white d-flex justify-content-center align-items-center mt-5"
        style={{ height: "48px" }}
      >
        <Container className="text-center m-0 p-0">e commerce footer</Container>
      </footer>
    </div>
  );
}

export default App;
