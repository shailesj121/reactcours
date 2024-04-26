import data from "../data.json";
import star from "../images/star.svg";
import FilterCard from "./cardFilterButtons.jsx";
import { CR_URL } from "../utils/constant.jsx";
import Search from "./search.jsx";
import React, { useEffect, useState } from "react";
import { fatchData } from "../utils/fatching.jsx";
import { Dummy, DummyListing } from "./dummy.jsx";

const Body = ({ showfilter }) => {
  const [sdata, setData] = useState(null);
  const [success, setSuccess] = useState("");
  const [removeCross, setRemoveCross] = useState(false);

  function filterRating() {
    let newdata = sdata.filter((datanew) => datanew.info.avgRating > 4.3);
    setData(newdata);
    setRemoveCross(true);
    return;
  }

  function removeFilter(event) {
    setData(data);
    setRemoveCross(false);
  }

  useEffect(() => {
    fatchData().then((data) => {
      setData(data[0]);
      setSuccess(data[1]);
      console.log(data[0]);
    });
  }, []);

  return (
    <>
      <main>
        <div className="containers">
          <div className="heading-search">
            <h1 className="headingone">
              Restaurants with online food delivery in Delhi
            </h1>
            <Search sdata={sdata} />
          </div>

          {success == "success" ? (
            <FilterCard
              showfilter={showfilter}
              filterRating={filterRating}
              removeCross={removeCross}
              removeFilter={removeFilter}
            />
          ) : (
            <DummyListing />
          )}

          <div className="cardmenus">
            {sdata ? (
              success == "success" ? (
                sdata.map((sdata) => {
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
                })
              ) : (
                sdata
              )
            ) : (
              <Dummy />
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Body;
