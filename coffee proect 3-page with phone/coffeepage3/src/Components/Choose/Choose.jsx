import React from "react";
import "./choose.scss";

import oval from "../../image/Oval.png";
import path from "../../image/Path 2.png";
import img01 from "../../image/01.png";
import img02 from "../../image/02.png";
import img03 from "../../image/03.png";
import bitmap from "../../image/Bitmap.png";

const Choose = () => {
  return (
    <>
      <div className="choose">
        <div className="kattahikoya">
          <img src={oval} alt="" className="oval1"></img>
          <img src={oval} alt="" className="oval2"></img>
          <img src={oval} alt="" className="oval3"></img>
          <div className="chiziqcha">
            <img src={path} alt="" className="chiziq"></img>
          </div>
          <div className="hikoya_1">
            <img src={img01} alt="" className="01"></img>
            <h1>Pick your coffee</h1>
            <p>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>
          <div className="hikoya_2">
            <img src={img02} alt="" className="02"></img>
            <h1>Choose the frequency</h1>
            <p>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>
          <div className="hikoya_3">
            <img src={img03} alt="" className="03"></img>
            <h1>Receive and enjoy!</h1>
            <p>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-className coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>
        <div className="rasmcha">
          <img src={bitmap} alt=""></img>
        </div>
      </div>
    </>
  );
};

export default Choose;
