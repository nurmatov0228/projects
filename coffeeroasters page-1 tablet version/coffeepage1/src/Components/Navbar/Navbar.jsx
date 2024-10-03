import React from "react";
import "./navbar.scss";
import group5 from "../../img/Group 5.png";

const Navbar = () => {
  return (
    <>
      <div className="coffeeroasters">
        <img src={group5} alt="coffeeroasters" />
      </div>
      <div className="navbar">
        <div className="uy">
          <a href="../../.././coffeeroasters page-1 tablet version/coffeepage1/public/index.html">
            Home
          </a>
        </div>
        <div className="haqimizda">
          <a href="../../.././coffeeroaster page-2 tablet version/coffeepage2/public/index.html">
            About us
          </a>
        </div>
        <div className="bajar">
          <a href="../../.././coffee proect 3-page with phone/coffeepage3/public/index.html">
            Create your plan
          </a>
        </div>
      </div>

      <div className="burgerbutton">
        <hr />
        <hr />
        <hr />
      </div>
    </>
  );
};

export default Navbar;