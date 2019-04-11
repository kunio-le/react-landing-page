import React, { Component } from "react";

import Header from "./components/header";
import Carousel from "./components/carousel";
import VenueInf from "./components/venueInf";
import Highlight from "./components/highlight";

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
        <Highlight />
      </div>
    );
  }
}

export default App;
