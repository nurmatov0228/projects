import React from "react";
import "./our.scss";
import our0 from "../../image/our0.jpg";
import our1 from "../../image/our1.jpg";
import our2 from "../../image/ourcommitet.jpg";

const Our = () => {
  return (
    <>
      <div className="our">
        <picture>
          <div className="our0">
            <img src={our0} alt=""></img>
          </div>
          <div className="our1">
            <img src={our1} alt=""></img>
          </div>
          <div className="our2">
            <img src={our2} alt=""></img>
          </div>
        </picture>
        <div className="hikoya">
          <h1>Our commitment</h1>
          <p>
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </div>
    </>
  );
};

export default Our;
