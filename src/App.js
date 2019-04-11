import React, { Component } from "react";
import { Element } from "react-scroll";

import Header from "./components/header";
import Carousel from "./components/carousel";
import VenueInf from "./components/venueInf";
import Highlight from "./components/highlight";
import Location from "./components/Location";
import Footer from "./components/Footer";

import "./assets/css/styles.css";

class App extends Component {
  render() {
    return (
      <div
        style={{
          overflow: "hidden"
        }}
      >
        <Header />
        <Element name="HomePage">
          <Carousel />
        </Element>{" "}
        <Element name="VenueInf">
          <VenueInf />
        </Element>{" "}
        <Element name="Highlight">
          <Highlight />
        </Element>{" "}
        <Element name="Location">
          <Location />
        </Element>{" "}
        <Footer />
      </div>
    );
  }
}

export default App;
