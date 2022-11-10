import React from "react";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.jpg";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "./Carousel.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Carousel = () => {
  return (
    <div>
      <AutoplaySlider
        className="aws-btn"
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={3000}
      >
        <div data-src={banner1} />
        <div data-src={banner2} />
        <div data-src={banner3} />
        <div data-src={banner4} />
      </AutoplaySlider>
    </div>
  );
};

export default Carousel;
