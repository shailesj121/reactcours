import React, { useEffect, useState } from "react";
import { fatchData } from "../utils/fatching.jsx";
import { Dummy, DummyListing } from "./dummy.jsx";
import FilterCard from "./cardFilterButtons.jsx";
import { CR_URL } from "../utils/constant.jsx";
import star from "../images/star.svg";
import Search from "./search.jsx";

const Body = ({ showfilter }) => {
  const [originalData, setOriginalData] = useState("");
  const [removeCross, setRemoveCross] = useState(false);
  const [success, setSuccess] = useState(null);
  const [sdata, setData] = useState(null);

  function filterRating() {
    let newdata = sdata.filter((datanew) => datanew.info.avgRating > 4.3);
    setData(newdata);
    setRemoveCross(true);
    return;
  }

  function removeFilter(event) {
    setData(originalData);
    setRemoveCross(false);
  }

  useEffect(() => {
    fatchData().then((data) => {
      setOriginalData(data[0]);
      setData(data[0]);
      setSuccess(data[1]);
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

          {success ? (
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
              success ? (
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
