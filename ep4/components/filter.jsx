import cancleBtn from "../images/cancelBtn.svg";

const Filter = ({ showfilter }) => (
  <>
    <div className="filter-container">
      <div className="inner-container-filter">
        <div>
          <ul>
            <li>Sort</li>
            <li>Delivery Time</li>
            <li>Cuisines</li>
            <li>Explore</li>
            <li>Ratings</li>
            <li>Veg/Non-Veg</li>
            <li>Offers</li>
            <li>Cost for two</li>
          </ul>
        </div>
        <div className="filter_option"></div>
        <img
          onClick={showfilter}
          className="cancelbutton"
          width="20px"
          srcSet={cancleBtn}
          alt=""
        />
      </div>
    </div>
  </>
);

export default Filter;
