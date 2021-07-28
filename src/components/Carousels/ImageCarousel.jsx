import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./App.css";

const ImageCarousel = ({ product }) => {
  const assets = product.assets;

  return (
    <div>
      <Carousel
        autoPlay={false}
        swipeable={true}
        showStatus={false}
        showIndicators={false}
        dynamicHeight={true}
        showArrows={false}
      >
        {assets.map((image) => (
          <img src={image.url} key={image.id} />
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
