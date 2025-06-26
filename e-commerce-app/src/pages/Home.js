import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import ContentCarousel from "../components/ContentCarousel";

const Home = () => {
  const [selectedThemeID, setSelectedThemeID] = useState(null);
  const [selectedDifficultyID, setSelectedDifficultyID] = useState(null);

  return (
    <div>
      <Navbar />
      <ContentCarousel />
    </div>
  );
};

export default Home;
