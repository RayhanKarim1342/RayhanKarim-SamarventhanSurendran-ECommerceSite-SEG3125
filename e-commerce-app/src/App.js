import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Catalog from "./pages/Catalog";
import ViewItem from "./pages/ViewItem";
import ViewCart from "./pages/ViewCart";
import Checkout from "./pages/Checkout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div
      className={`app-wrapper d-flex flex-column min-vh-100 ${
        isHome ? "home-background" : ""
      }`}
    >
      <div
        className={`flex-grow-1 d-flex flex-column${
          !isHome ? " app-content" : ""
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog/:category" element={<Catalog />} />
          <Route path="/item/:itemID" element={<ViewItem />} />
          <Route path="/cart" element={<ViewCart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
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

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
