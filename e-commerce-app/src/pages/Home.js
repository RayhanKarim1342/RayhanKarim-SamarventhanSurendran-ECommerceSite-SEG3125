import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";

const Home = () => {
  const [selectedThemeID, setSelectedThemeID] = useState(null);
  const [selectedDifficultyID, setSelectedDifficultyID] = useState(null);

  return (
    <div>
      <Navbar />
      <Container className="position-relative"></Container>
    </div>
  );
};

export default Home;
