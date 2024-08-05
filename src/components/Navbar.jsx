import React from "react";
import { TiThMenu } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";
import "./navbar.css";

import pp from "./images/LogoSports.png";
const Navbar = () => {
  return (
    <div className="main-div bg-Nav-Set">
      <div className="container w-100">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="SetNAVBARForSmall col-lg-4 col-12">
            <div className="Menu">
              <TiThMenu className="Menu " />
            </div>
            <div className=" setColLogo ">
              <img class=" w-75 mt-2" src={pp} alt="imagess.." />
            </div>
            <div className="Menu">
              <FaShoppingCart className="fs-4" />
            </div>
          </div>
          <div className="col-md-8 setcolo d-flex justify-content-end ">
            <div className="d-flex justify-content-end SetSmallScreenUl align-items-center">
              <ul className=" d-flex justify-content-between   gap-5 m-auto">
                <li>
                  <a href="" className="Link ">
                    Products
                  </a>
                </li>
                <li>
                  <a href="" className="Link">
                    Track Order
                  </a>
                </li>
                <li>
                  <a href="" className="Link">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="" className="Link">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
