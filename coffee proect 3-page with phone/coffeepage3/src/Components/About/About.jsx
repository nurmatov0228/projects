import React from "react";
import "./about.scss";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="hikoyacha">
          <span className="summary">order summary</span>
          <h3>
            “I drink my coffee as <span className="rang">Filter</span>, with a{" "}
            <span className="rang">Decaf</span> type of<br></br> bean.{" "}
            <span className="rang">250g</span> ground ala{" "}
            <span className="rang">Cafetiére</span>, sent to me<br></br>{" "}
            <span className="rang">Every Week</span>.”
          </h3>
        </div>
      </div>
    </>
  );
};

export default About;
