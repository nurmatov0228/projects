import React from "react";
import "./cards.scss";
import group13 from "../../img/Group 13.png";
import kopi1 from "../../img/kopi1 copy.png";
import kopi2 from "../../img/kopi2.png";
import kopi3 from "../../img/kopi3.png";
import kopi4 from "../../img/kopi4.png";

const Cards = () => {
  return (
    <>
      <div className="cards">
        <div className="ourcollection">
          <img src={group13} alt="" />
        </div>
        <div className="bolimlar">
          <div className="bolim1">
            <div className="hikoya">
              <img src={kopi1} alt="" />
              <div className="bolimcha">
                <h2 className="title">Gran Espresso</h2>
                <p className="text">
                  Light and flavorful blend with cocoa and black pepper for an
                  intense experience
                </p>
              </div>
            </div>
          </div>
          <div className="bolim2">
            <div className="hikoya">
              <img src={kopi2} alt="" />
              <div className="bolimcha">
                <h2 className="title">Planalto</h2>
                <p className="text">
                  Brazilian dark roast with rich and velvety body, and hints of
                  fruits and nuts
                </p>
              </div>
            </div>
          </div>
          <div className="bolim3">
            <div className="hikoya">
              <img src={kopi3} alt="" />
              <div className="bolimcha">
                <h2 className="title">Piccollo</h2>
                <p className="text">
                  Mild and smooth blend featuring notes of toasted almond and
                  dried cherry
                </p>
              </div>
            </div>
          </div>
          <div className="bolim4">
            <div className="hikoya">
              <img src={kopi4} alt="" />
              <div className="bolimcha">
                <h2 className="title">Danche</h2>
                <p className="text">
                  Ethiopian hand-harvested blend densely packed with vibrant
                  fruit notes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
