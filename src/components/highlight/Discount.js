import React, { Component } from "react";

import Fade from "react-reveal";

export class Discount extends Component {
  state = {
    setPercent: 35,
    percentage: 0
  };
  animateHandler = () => {
    const { setPercent, percentage } = this.state;
    if (percentage < setPercent)
      this.setState({
        percentage: percentage + 1
      });
  };
  componentDidUpdate() {
    setTimeout(() => this.animateHandler(), 60);
  }

  render() {
    return (
      <div className="discount_wrapper">
        <Fade onReveal={() => this.animateHandler()}>
          <div className="discount_percentage">
            <span> {`${this.state.percentage}%`} </span> <span> OFF </span>
          </div>{" "}
        </Fade>{" "}
        <div className="discount_description">
          <h3> Discount Information </h3>{" "}
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Quae ipsa
            eos, hic assumenda consequatur distinctio atque, recusandae
            laboriosam autem, sapiente repudiandae ? Ipsa deserunt
            necessitatibus quaerat unde.Eveniet eos consequatur nesciunt.{" "}
          </p>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Discount;
