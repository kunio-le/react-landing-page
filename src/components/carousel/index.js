import React, { Fragment } from "react";

import Button from "@material-ui/core/Button";

import CarouselSlide from "./CarouselSlide";

import Countdown from "./Countdown";

const Carousel = () => (
  <Fragment>
    <div className="pos_relative">
      <div className="carousel_desc">
        <div className="wrapper">
          <h3 className="font_pacifico"> Country Music & Camping </h3>{" "}
          <Button
            variant="contained"
            color="default"
            size="large"
            href="http://watershedfest.com/"
            target="_blank"
          >
            BUY NOW{" "}
          </Button>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
    <CarouselSlide />
    <Countdown />
  </Fragment>
);

export default Carousel;
