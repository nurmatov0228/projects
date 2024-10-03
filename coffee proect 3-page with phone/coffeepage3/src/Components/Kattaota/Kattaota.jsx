import React from "react";
import "./kattaota.scss";
import uchburchak from "../../image/uchburchak.png";

const Kattaota = () => {
  return (
    <>
      <div className="kattaota">
        <div className="drink">
          <div className="tepa">
            <h1>How do you drink your coffee?</h1>
            <img src={uchburchak} alt=""></img>
          </div>
          <div className="past">
            <div className="_1">
              <div className="tortburchak _1__tortburchak">
                <div className="hikoya">
                  <h2>Capsule</h2>
                  <p>Compatible with Nespresso systems and similar brewers</p>
                </div>
              </div>
            </div>
            <div className="_2">
              <div className="tortburchak _2__tortburchak">
                <div className="hikoya">
                  <h2>Filter</h2>
                  <p>
                    For pour over or drip methods like Aeorpress, Chemex, and
                    v60
                  </p>
                </div>
              </div>
            </div>
            <div className="_3">
              <div className="tortburchak _3__tortburchak">
                <div className="hikoya">
                  <h2>Espresso</h2>
                  <p>
                    Dense and finely ground beans for an intense, flavorful
                    experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drink">
          <div className="tepa">
            <h1>What type of coffee?</h1>
            <img src={uchburchak} alt=""></img>
          </div>
          <div className="past">
            <div className="_1">
              <div className="tortburchak _1__tortburchak">
                <div className="hikoya">
                  <h2>Single Origin</h2>
                  <p>
                    Distinct, high quality coffee from a specific family-owned
                    farm
                  </p>
                </div>
              </div>
            </div>
            <div className="_2">
              <div className="tortburchak _2__tortburchak">
                <div className="hikoya">
                  <h2>Decaf</h2>
                  <p>
                    Just like regular coffee, except the caffeine has been
                    removed
                  </p>
                </div>
              </div>
            </div>
            <div className="_3">
              <div className="tortburchak _3__tortburchak">
                <div className="hikoya">
                  <h2>Blended</h2>
                  <p>
                    Combination of two or three dark roasted beans of organic
                    coffees
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drink">
          <div className="tepa">
            <h1>How much would you like?</h1>
            <img src={uchburchak} alt=""></img>
          </div>
          <div className="past">
            <div className="_1">
              <div className="tortburchak _1__tortburchak">
                <div className="hikoya">
                  <h2>250g</h2>
                  <p>
                    Perfect for the solo drinker. Yields about 12 delicious
                    cups.
                  </p>
                </div>
              </div>
            </div>
            <div className="_2">
              <div className="tortburchak _2__tortburchak">
                <div className="hikoya">
                  <h2>500g</h2>
                  <p>
                    Perfect option for a couple. Yields about 40 delectable
                    cups.
                  </p>
                </div>
              </div>
            </div>
            <div className="_3">
              <div className="tortburchak _3__tortburchak">
                <div className="hikoya">
                  <h2>1000g</h2>
                  <p>
                    Perfect for offices and events. Yields about 90 delightful
                    cups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drink">
          <div className="tepa">
            <h1>Want us to grind them?</h1>
            <img src={uchburchak} alt=""></img>
          </div>
          <div className="past">
            <div className="_1">
              <div className="tortburchak _1__tortburchak">
                <div className="hikoya">
                  <h2>Wholebean</h2>
                  <p>Best choice if you cherish the full sensory experience</p>
                </div>
              </div>
            </div>
            <div className="_2">
              <div className="tortburchak _2__tortburchak">
                <div className="hikoya">
                  <h2>Filter</h2>
                  <p>
                    For drip or pour-over coffee methods such as V60 or
                    Aeropress
                  </p>
                </div>
              </div>
            </div>
            <div className="_3">
              <div className="tortburchak _3__tortburchak">
                <div className="hikoya">
                  <h2>Cafetiére</h2>
                  <p>
                    Course ground beans specially suited for french press coffee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drink">
          <div className="tepa">
            <h1>How often should we deliver?</h1>
            <img src={uchburchak} alt=""></img>
          </div>
          <div className="past">
            <div className="_1">
              <div className="tortburchak _1__tortburchak">
                <div className="hikoya">
                  <h2>Every week</h2>
                  <p>$7.20 per shipment. Includes free first-className shipping.</p>
                </div>
              </div>
            </div>
            <div className="_2">
              <div className="tortburchak _2__tortburchak">
                <div className="hikoya">
                  <h2>Every 2 weeks</h2>
                  <p>$9.60 per shipment. Includes free priority shipping.</p>
                </div>
              </div>
            </div>
            <div className="_3">
              <div className="tortburchak _3__tortburchak">
                <div className="hikoya">
                  <h2>Every month</h2>
                  <p>$12.00 per shipment. Includes free priority shipping.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kattaota;
