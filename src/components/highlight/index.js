import React from "react";
import Zoom from "react-reveal/Zoom";
import Discount from "./Discount";

const Highlight = () => {
  return (
    <div className="highlight_wrapper">
      <Zoom>
        <h2> Highlight </h2>{" "}
      </Zoom>{" "}
      <Zoom delay={500}>
        <div className="highlight_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Vel
          exercitationem deserunt quas inventore ipsam quo qui rem eveniet
          rerum.Suscipit odio ad quos dolorem saepe numquam quisquam id itaque
          modi!
        </div>{" "}
      </Zoom>{" "}
      <Discount />
    </div>
  );
};

export default Highlight;
