import React from "react";
import "./choose.scss";
import coffeebean from "../../img/coffee-bean.png";
import combinedshape from "../../img/Combined Shape.png";
import combinedshape1 from "../../img/Combined Shape (1).png";

const Choose = () => {
  return (
    <>
      <div className="choose">
        <div className="tepa">
          <div className="hikoyacha">
            <h1 className="title">Why choose us?</h1>
            <p className="text">
              A large part of our role is choosing which particular coffees will
              be featured in our range. This means working closely with the best
              coffee growers to give you a more impactful experience on every
              level.
            </p>
          </div>
        </div>
        <div className="past">
          <div className="bolim1 bosin">
            <img src={coffeebean} alt="" />
            <div className="hikoyacha">
              <h3 className="title">Best quality</h3>
              <p className="text">
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </div>
          </div>
          <div className="bolim2 bosin">
            <img src={combinedshape} alt="" />
            <div className="hikoyacha">
              <h3 className="title">Exclusive benefits</h3>
              <p className="text">
                Special offers and swag when you subscribe, including 30% off
                your first shipment.
              </p>
            </div>
          </div>
          <div className="bolim3 bosin">
            <img src={combinedshape1} alt="" />
            <div className="hikoyacha">
              <h3 className="title">Free shipping</h3>
              <p className="text">
                We cover the cost and coffee is delivered fast. Peak freshness:
                guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choose;
