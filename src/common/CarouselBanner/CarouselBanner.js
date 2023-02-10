import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselBanner = ({children , responsive , autoSlide}) => {
  return (
    <Carousel
      ssr

      // for blog page Carousel
      autoPlay={autoSlide}
      autoPlaySpeed={autoSlide && 2000}
      showDots={autoSlide}
      infinite={autoSlide}
      responsive={responsive}
      arrows = {!autoSlide}
      // -----

      keyBoardControl={true}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
        {children}

    </Carousel>
  );
};

export default CarouselBanner;
