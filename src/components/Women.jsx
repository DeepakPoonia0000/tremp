import React from "react";
import { Womendata } from "./Helper";
import Fotter from "./Fotter";

const Women = () => {
  return (
    <div className="">
      <div className="container text-center pb-5">
        <h2 className=" men_text pt-4 pt-sm-5 ">Womens Clothing</h2>
        <div className="row  justify-content-center w-100 flex-lg-row">
          {Womendata.map((obj, i) => {
            return (
              <div
                className=" col-lg-3 col-md-4 col-sm-6   pt-4"
                key={i}
              >
                <img
                  className="clothing_img  w-100 ps-3 ps-sm-0"
                  src={obj.img}
                  alt="womens "
                />
                <p className=" mt-3 fs-5 m-0 p-0">{obj.price}</p>
                <p className=" fs-6 fw-semibold m-0 p-0">{obj.des}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Fotter />
    </div>
  );
};

export default Women;
