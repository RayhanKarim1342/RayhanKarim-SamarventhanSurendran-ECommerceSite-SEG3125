import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ContentCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="mx-5 shadow-lg"
      style={{ borderRadius: "1.5rem", overflow: "hidden" }}
    >
      <Carousel.Item>
        <img
          src="/images/homeImage.jpg"
          className="rounded-4 w-100 border border-dark-subtle shadow-lg"
          alt="abstract art"
        ></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/images/homeImage.jpg"
          className="rounded-4 w-100 border border-dark-subtle shadow-lg"
          alt="abstract art"
        ></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/images/homeImage.jpg"
          className="rounded-4 w-100 border border-dark-subtle shadow-lg"
          alt="abstract art"
        ></img>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ContentCarousel;
