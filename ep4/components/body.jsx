import data from "../data.json";
import star from "../images/star.svg";
import FilterCard from "./cardFilterButtons.jsx";
import { CR_URL } from "../utils/constant.jsx";

const Body = ({ showfilter }) => {
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

          <FilterCard showfilter={showfilter} />

          <div className="cardmenus">
            {data.map((data) => {
              if (data.info.availability.opened) {
                return (
                  <div key={data.info.id} className="foodcards">
                    <img
                      width="400px"
                      className="footthumb"
                      srcSet={`${CR_URL}${data.info.cloudinaryImageId}`}
                    />
                    <div className="p-3">
                      <p className="cardFoodName">{data.info.name}</p>
                      <p className="starrating">
                        <img srcSet={star} alt="" height="15px" />{" "}
                        {data.info.avgRating}. {data.info.sla.slaString}
                      </p>
                      <p className="cuisines">
                        {data.info.cuisines.join(", ")}
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
