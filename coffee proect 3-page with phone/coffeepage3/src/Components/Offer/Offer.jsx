import React from "react";
import "./offer.scss";
import img001 from "../../image/001.png";
import img002 from "../../image/002.png";
import img003 from "../../image/003.png";
import img004 from "../../image/004.png";
import img005 from "../../image/005.png";

const Offer = () => {
  return (
    <>
      <div className="offer">
        <div className="birinchi">
          <img src={img001} alt=""></img>
          <h3 className="Preferences">Preferences</h3>
        </div>
        <div className="_2tortburchak"></div>
        <div className="ikkinchi">
          <img src={img002} alt=""></img>
          <h3 className="Bean">Bean Type</h3>
        </div>
        <div className="_3tortburchak"></div>
        <div className="uchinchi">
          <img src={img003} alt=""></img>
          <h3 className="Quantity">Quantity</h3>
        </div>
        <div className="_4tortburchak"></div>
        <div className="tortinchi">
          <img src={img004} alt=""></img>
          <h3 className="Grind">Grind Option</h3>
        </div>
        <div className="_5tortburchak"></div>
        <div className="beshinchi">
          <img src={img005} alt=""></img>
          <h3 className="Deliveries">Deliveries</h3>
        </div>
      </div>
    </>
  );
};

export default Offer;
