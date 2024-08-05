// import React from "react";
import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { IoIosArrowDropup } from "react-icons/io";
import { FaSortAmountDown } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

import { FaHeart } from "react-icons/fa";
import "./Body.css";

const Mainbody = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?sort=desc")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching the JSON data", error);
      });
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3 ">
            <div className="d-flex justify-content-left align-items-center gap-3">
              <div className="fs-4">
                <FaFilter />
              </div>
              <div className="">
                <p className="m-auto fs-3">Filters</p>
              </div>
            </div>
            <hr className="mt-3" />
            <div className="Applied-Filter d-flex justify-content-between">
              <div className="Applied-Filter ">
                <p>Applied Filters</p>
              </div>
              <div className="Applied-Filter ">
                <a href="">clear all</a>
              </div>
            </div>
            <div className="Alldiv d-flex justify-content-between">
              <div className="AlldivSmall d-flex p-1 gap-1 bgSetForAllCross justify-content-center align-items-center">
                <div className="">
                  <p className="m-auto">All</p>
                </div>
                <div className="">
                  <MdOutlineCancel className="fs-4" />
                </div>
              </div>
              <div className="AlldivSmall d-flex p-1 gap-1 bgSetForAllCross justify-content-center align-items-center">
                <div className="">
                  <p className="m-auto">Running Shoes</p>
                </div>
                <div className="">
                  <MdOutlineCancel className="fs-4" />
                </div>
              </div>
              <div className="AlldivSmall d-flex p-1 gap-1 bgSetForAllCross justify-content-center align-items-center">
                <div className="">
                  <p className="m-auto">Red</p>
                </div>
                <div className="">
                  <MdOutlineCancel className="fs-4" />
                </div>
              </div>
            </div>
            <hr className="mt-4 hrhide" />
            <div className="CategoryDiv ">
              <div className="d-flex justify-content-between">
                <div className="">
                  <p>Category</p>
                </div>
                <div className="">
                  <IoIosArrowDropup className="fs-3" />
                </div>
              </div>
              <div className="d-flex gap-4">
                <div className="">
                  <input type="checkbox" />
                </div>
                <div className="">
                  <p>All</p>
                </div>
              </div>
              <div className="d-flex gap-4">
                <div className="">
                  <input type="checkbox" />
                </div>
                <div className="">
                  <p>Running Shoes</p>
                </div>
              </div>
              <div className="d-flex gap-4">
                <div className="">
                  <input type="checkbox" />
                </div>
                <div className="">
                  <p>Category 3</p>
                </div>
              </div>
              <div className="d-flex gap-4">
                <div className="">
                  <input type="checkbox" />
                </div>
                <div className="">
                  <p>Category 4</p>
                </div>
              </div>
            </div>
            <hr className="mt-3 hrhide" />
            <div className="StockDiv ">
              <div className="d-flex justify-content-between">
                <div className="">
                  <p>Stock Status</p>
                </div>
                <div className="">
                  <IoIosArrowDropup className="fs-3" />
                </div>
              </div>
              <div className="d-flex gap-4">
                <div className="">
                  <input type="checkbox" />
                </div>
                <div className="">
                  <p>All Info</p>
                </div>
              </div>
              <div className="d-flex gap-4">
                <div className="">
                  <input type="checkbox" />
                </div>
                <div className="">
                  <p>In Stock</p>
                </div>
              </div>
              <div className="d-flex gap-4">
                <div className="">
                  <input type="checkbox" />
                </div>
                <div className="">
                  <p>Out Stock</p>
                </div>
              </div>
            </div>
            <hr className="mt-3 hrhide" />
            <div className="SizeDiv">
              <div className="d-flex justify-content-between">
                <div className="">
                  <p>Size</p>
                </div>
                <div className="">
                  <IoIosArrowDropup className="fs-3" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 ">
            <div className="d-flex HSRHide">
              <div className="d-flex gap-1">
                <div className="HSRHide">
                  <a href="" className="ASetCol fw-bold">
                    Home
                  </a>
                </div>
                <div className="HSRHide">
                  <p className="fw-bold"> / </p>
                </div>
              </div>
              <div className="d-flex gap-1">
                <div className="HSRHide">
                  <a href="" className="ASetCol fw-bold ">
                    Search
                  </a>
                </div>
                <div className="HSRHide">
                  <p className="fw-bold"> / </p>
                </div>
              </div>
              <div className="d-flex gap-1">
                <div className="HSRHide">
                  <a href="" className="ASetCol fw-bold">
                    Runnung Shoes
                  </a>
                </div>
                <div className="hrhide">
                  <p className="fw-bold"> / </p>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center w-75 colShow col-12">
                <div className="colShow">
                  <h2>
                    <i>"Running Shoes"</i>
                  </h2>
                </div>
                <div className="colShow">
                  <p className="m-auto fw-bold">______ 288 Results</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3 borderrSet w-25 colHide">
                <div className="fs-4 colHide">
                  <FaSortAmountDown />
                </div>
                <div className="colHide">
                  <p className="m-auto">Sort by</p>
                </div>
              </div>
            </div>
            <div className="row">
              {data.map((product) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-6 cardset mt-3 gap-3 CardSET"
                  key={product.id}
                >
                  <div className="card height-Set-Card mt-3 d-flex justify-content-center">
                    <div className="card-img ">
                      <img
                        src={product.image}
                        className="card-img-top d-flex justify-content-center"
                        alt={product.title}
                      />
                    </div>
                    <div className="card-body ">
                      <p className="card-title fw-bold">{product.title}</p>
                      <div className="card-category ">
                        <p className=" fs-5 ">{product.category}</p>
                      </div>
                      <div className="review d-flex justify-content-between">
                        <div className="d-flex gap-2">
                          <IoIosStar className="fs-4 iconColorSet" />
                          <p>5.0 (10 Reviews)</p>
                        </div>
                        <div className="">
                          <p class="SetColStock fw-bold">In Stock</p>
                        </div>
                      </div>
                      <div className="card-text ">
                        <p className="card-text fw-bolder fs-3">
                          ${product.price}
                        </p>
                      </div>
                      <div className="mt-3 d-flex w-100 gap-4">
                        <div className="w-75 ">
                          <button className="w-100 bg-black SetButtonStyle ">
                            <b className="fw-bolder fs-5"> + </b> Add To Chart
                          </button>
                        </div>
                        <div className="IconBGSET w-25 d-flex justify-content-center align-items-center">
                          <FaHeart className="fs-4 fw-bolder " />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainbody;
