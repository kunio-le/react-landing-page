import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="Gorge Amphitheatre"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2715.889942782767!2d-119.99779038438689!3d47.10122817915436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54999d5ba481d30b%3A0xe0bd57b101fdca66!2sGorge+Amphitheatre!5e0!3m2!1sen!2s!4v1554978366939!5m2!1sen!2s"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div> Location </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Location;
