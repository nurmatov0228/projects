import React from "react";
import "./create.scss";
import group7 from "../../image/Group 7.png";

const Create = () => {
  return (
    <>
      <div className="create">
        <div className="hikoya">
          <h1>Create a plan</h1>
          <p>
            Build a subscription plan that best fits your needs. We offer an
            assortment of the best artisan coffees from around the globe
            delivered fresh to your door.
          </p>
        </div>
        <div className="rasmcha">
          <img src={group7} alt="rasm"></img>
        </div>
      </div>
    </>
  );
};

export default Create;
