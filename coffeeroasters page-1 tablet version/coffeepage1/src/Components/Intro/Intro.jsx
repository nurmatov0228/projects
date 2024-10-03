import React from "react";
import "./intro.scss";

const Intro = () => {
  return (
    <>
      <div className="intro">
        <div className="hikoyacha">
          <h1 className="title">Great coffee made simple.</h1>
          <p className="text">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <button className="btn">Create your plan</button>
        </div>
      </div>
    </>
  );
};

export default Intro;
