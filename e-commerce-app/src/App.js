import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import Catalog from "./pages/Catalog";
import ViewItem from "./pages/ViewItem";
import ViewCart from "./pages/ViewCart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="app-wrapper d-flex flex-column min-vh-100">
      <div className="flex-grow-1 d-flex flex-column">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog/:category" element={<Catalog />} />
            <Route path="/item/:itemID" element={<ViewItem />} />
            <Route path="/cart" element={<ViewCart />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </div>
      <footer
        className="footer bg-dark text-white d-flex justify-content-center align-items-center"
        style={{ height: "48px" }}
      >
        <Container className="text-center m-0 p-0">© 2025 Volt Buy</Container>
      </footer>
    </div>
  );
}

export default App;
