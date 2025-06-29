import React from "react";
import Navbar from "../components/Navbar";
import ContentCarousel from "../components/ContentCarousel";

const Home = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundImage: "url('/images/homeImage.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <ContentCarousel />
    </div>
  );
};

export default Home;