import filtersvg from "../images/filter.svg";
import dropDown from "../images/dropdown.svg";
import Remove from "../utils/Remove.jsx";

const FilterCard = ({
  showfilter,
  filterRating,
  removeCross,
  removeFilter,
}) => {
  return (
    <>
      <div className="filterCard">
        <span className="button">
          <button onClick={showfilter}>
            <span>Filter</span> <img width="20px" srcSet={filtersvg} alt="" />
          </button>
        </span>

        <span className="button">
          <button>
            <span>Short By</span> <img width="20px" srcSet={dropDown} alt="" />
          </button>
        </span>
        <span className="button">
          <button onClick={filterRating}>
            <span>Rating 4.0+</span>
          </button>
          <Remove removeCross={removeCross} removeFilter={removeFilter} />
        </span>
      </div>
    </>
  );
};

export default FilterCard;
