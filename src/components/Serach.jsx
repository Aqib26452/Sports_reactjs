import React from "react";
import "./search.css";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";

const Serach = () => {
  return (
    <div className="container mt-5 SearchBG">
      <div className="row m-auto d-flex justify-content-between ">
        <div className="col-md-10 d-flex setSearchBG p-2">
          <div className="col-md-3Set d-flex justify-content-center align-items-center">
            <h5 className="ShoesSetSmall">Shoes</h5>

            <p className="lineset1"></p>
          </div>

          <div className="col-md-8Set d-flex align-items-center ">
            <div className="w-100">
              <input
                type="text"
                className=" setInputbg w-100"
                placeholder=" runninng shoes  |"
              />
            </div>
            <div className="d-flex gap-2 justify-content-center align-items-center">
              <MdOutlineCancel className="fs-4" />
              <p className="lineset2"></p>
            </div>
          </div>
          <div className="col-md-1Set d-flex justify-content-center align-items-center m-auo">
            <p className="lineset1"></p>
            <IoSearchSharp className="fs-3 SearchIconForSmall" />
          </div>
        </div>
        <div className="col-md-2 SetChartButton   bg-warning p-2">
          <div className="d-flex justify-content-center align-items-center bg-warning w-100 gap-4">
            <div className="">
              <FaShoppingCart className="fs-4" />
            </div>
            <div className="">
              <p className="m-auto fw-bold">View Chart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serach;
