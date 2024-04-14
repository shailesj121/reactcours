"use client";
import data from "../data.json";
import star from "../images/star.svg";
import FilterCard from "./cardFilterButtons.jsx";
import { CR_URL } from "../utils/constant.jsx";
import React, { useState } from "react";

const Body = ({ showfilter }) => {
  const [sdata, setData] = useState(data);
  const [removeCross, setRemoveCross] = useState(false);

  function filterRating() {
    let newdata = sdata.filter((datanew) => datanew.info.avgRating > 4.3);
    setData(newdata);
    setRemoveCross(true);
    return;
  }

  function removeFilter(event) {
    console.log("no");
    setData(data);
    setRemoveCross(false);
  }

  return (
    <>
      <main>
        <div className="containers">
          <div className="heading-search">
            <h1 className="headingone">
              Restaurants with online food delivery in Delhi
            </h1>
            <input type="search" className="search" placeholder="search" />
          </div>

          <FilterCard
            showfilter={showfilter}
            filterRating={filterRating}
            removeCross={removeCross}
            removeFilter={removeFilter}
          />

          <div className="cardmenus">
            {sdata.map((sdata) => {
              if (sdata.info.availability.opened) {
                return (
                  <div key={sdata.info.id} className="foodcards">
                    <img
                      width="400px"
                      className="footthumb"
                      srcSet={`${CR_URL}${sdata.info.cloudinaryImageId}`}
                    />
                    <div className="p-3">
                      <p className="cardFoodName">{sdata.info.name}</p>
                      <p className="starrating">
                        <img srcSet={star} alt="" height="15px" />{" "}
                        {sdata.info.avgRating}. {sdata.info.sla.slaString}
                      </p>
                      <p className="cuisines">
                        {sdata.info.cuisines.join(", ")}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Body;
