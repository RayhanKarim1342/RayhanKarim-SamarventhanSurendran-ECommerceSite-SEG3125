import { useState, useMemo } from "react";
import Carousel from "react-bootstrap/Carousel";
import items from "../assets/items";
import { useNavigate } from "react-router-dom";

function getRandomItems(arr, n) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

function ContentCarousel() {
  const [index, setIndex] = useState(0);

  const randomItems = useMemo(() => getRandomItems(items, 3), []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const navigate = useNavigate();

  const handleResultClick = (item) => {
    navigate(`/item/${item.id}`);
  };

  return (
    <div
      style={{
        minHeight: "900px",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "1.5rem",
          boxShadow: "0 0.5rem 1rem rgb(255, 205, 252)",
          padding: "1rem",
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="mx-2 shadow-lg"
          style={{ borderRadius: "1.5rem", width: "1200px" }}
        >
          {randomItems.map((item) => (
            <Carousel.Item
              key={item.id}
              style={{ cursor: "pointer" }}
              onMouseDown={() => handleResultClick(item)}
            >
              <img
                src={item.img}
                className="d-block w-100"
                alt={item.name}
                style={{
                  height: "800px",
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "1.5rem",
                }}
              />
              <Carousel.Caption
                className="text-center text-white mt-2 px-5 py-1 rounded-4 shadow mb-0"
                style={{
                  backgroundColor: "rgba(33, 37, 41, 0.7)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <h3 className="display-1 fw-bold">{item.name}</h3>
                <p className="fs-4">{item.description}</p>
                <p className="fw-bold text-white fs-3">{item.price}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ContentCarousel;
