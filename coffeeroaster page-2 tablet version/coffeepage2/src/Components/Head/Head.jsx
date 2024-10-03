import React from "react";
import "./head.scss";
import combinedshape from "../../image/Combined Shape.png";
import combinedshape1 from "../../image/Combined Shape (1).png";
import combinedshape2 from "../../image/Combined Shape (2).png";

const Head = () => {
  return (
    <>
      <div className="headquarters">
        <span>Our headquarters</span>
        <div className="bolim">
          <div className="birga1 birga">
            <img src={combinedshape} alt=""></img>
            <div className="hikoya">
              <h2>United Kingdom</h2>
              <p>
                <p>68 Asfordby Rd</p>
                <p>Alcaston</p>
                <p>SY6 1YA</p>
                <p>+44 1241 918425</p>
              </p>
            </div>
          </div>
          <div className="birga2 birga">
            <img src={combinedshape1} alt=""></img>
            <div className="hikoya">
              <h2>Canada</h2>
              <p>
                <p>1528 Eglinton Avenue</p>
                <p>Toronto</p>
                <p>Ontario M4P 1A6</p>
                <p>+1 416 485 2997</p>
              </p>
            </div>
          </div>
          <div className="birga3 birga">
            <img src={combinedshape2} alt=""></img>
            <div className="hikoya">
              <h2>Australia</h2>
              <p>
                <p>36 Swanston Street</p>
                <p>Kewell</p>
                <p>Victoria</p>
                <p>+61 4 9928 3629</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
