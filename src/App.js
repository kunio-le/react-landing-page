import React, { Component } from "react";

import Header from "./components/header";
import Carousel from "./components/carousel";

import "./assets/css/styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
      </div>
    );
  }
}

export default App;
