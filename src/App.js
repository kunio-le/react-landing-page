import React, { Component } from "react";

import Header from "./components/header";
import Carousel from "./components/carousel";
import VenueInf from "./components/venueInf";

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
        <Carousel />
        <VenueInf />
      </div>
    );
  }
}

export default App;
