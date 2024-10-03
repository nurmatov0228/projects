import React from "react";
import "./quality.scss";
import quality0 from "../../image/quality0.jpg";
import quality from "../../image/quality.jpg";
import quality2 from "../../image/quality2.jpg";

const Quality = () => {
  return (
    <>
      <div className="quality">
        <div className="chiroylirasm0">
          <img src={quality0} alt=""></img>
        </div>
        <div className="chiroylirasm">
          <img src={quality} alt="chiroylirasm"></img>
        </div>
        <div className="chiroylirasm2">
          <img src={quality2} alt=""></img>
        </div>
        <div className="bolimcha">
          <div className="hikoya">
            <h1>Uncompromising quality</h1>
            <p>
              Although we work with growers who pay close attention to all
              stages of harvest and processing, we employ, on our end, a
              rigorous quality control program to avoid over-roasting or baking
              the coffee dry. Every bag of coffee is tagged with a roast date
              and batch number. Our goal is to roast consistent, user-friendly
              coffee, so that brewing is easy and enjoyable.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quality;
