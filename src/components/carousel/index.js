import React, { Component, Fragment } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import carousel1 from "../../assets/images/carousel-1.jpg";
import carousel2 from "../../assets/images/carousel-2.jpg";
import carousel3 from "../../assets/images/carousel-3.jpg";
import carousel4 from "../../assets/images/carousel-4.jpg";

class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    const carouselItems = [carousel1, carousel2, carousel3, carousel4];
    return (
      <Fragment>
        <div className="pos_relative">
          <div className="carousel_desc">
            <div className="wrapper">
              <h3 className="font_righteous"> Country Music & Camping </h3>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div
          className="carousel_wrapper"
          style={{
            overflow: "hidden",
            height: `${window.innerHeight}px`
          }}
        >
          <Slider {...settings}>
            {" "}
            {carouselItems.map((item, index) => (
              <div key={index}>
                <div
                  className="carousel_image"
                  style={{
                    background: `url(${item}) center center`,
                    height: `${window.innerHeight}px`
                  }}
                />{" "}
              </div>
            ))}{" "}
          </Slider>{" "}
        </div>{" "}
      </Fragment>
    );
  }
}
export default Carousel;
