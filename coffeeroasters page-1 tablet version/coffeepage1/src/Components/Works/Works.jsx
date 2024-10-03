import React from "react";
import "./works.scss";
import oval from "../../img/Oval.png";
import img001 from "../../img/001.png";
import img002 from "../../img/002.png";
import img003 from "../../img/003.png";

const Works = () => {
  return (
    <>
      <div className="works">
        <span>How it works?</span>
        <div className="umumiy">
          <div className="images">
            <img src={oval} alt="Oval" />
            <img src={oval} alt="Oval" />
            <img src={oval} alt="Oval" />
          </div>
          <hr />
          <div className="uchtalik">
            <div className="birinchi how">
              <img src={img001} alt="" />
              <h2>Pick your coffee</h2>
              <p>
                Select from our evolving range of artisan coffees. Our beans are
                ethically sourced and we pay fair prices for them. There are new
                coffees in all profiles every month for you to try out.
              </p>
            </div>
            <div className="ikkinchi how">
              <img src={img002} alt="" />
              <h2>Choose the frequency</h2>
              <p>
                Customize your order frequency, quantity, even your roast style
                and grind type. Pause, skip or cancel your subscription with no
                commitment through our online portal.
              </p>
            </div>
            <div className="uchinchi how">
              <img src={img003} alt="" />
              <h2>Receive and enjoy!</h2>
              <p>
                We ship your package within 48 hours, freshly roasted. Sit back
                and enjoy award-winning world-className coffees curated to provide a
                distinct tasting experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
