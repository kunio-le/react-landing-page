import React, { Component, Fragment } from "react";

import CarouselSlide from "./CarouselSlide";
import Countdown from "./Countdown";

class Carousel extends Component {
  render() {
    return (
      <Fragment>
        <div className="pos_relative">
          <div className="carousel_desc">
            <div className="wrapper">
              <h3 className="font_pacifico"> Country Music & Camping </h3>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <CarouselSlide />
        <Countdown />
      </Fragment>
    );
  }
}
export default Carousel;
