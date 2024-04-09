import filtersvg from "../images/filter.svg";
import dropDown from "../images/dropdown.svg";


const FilterCard = ({showfilter}) => {

  return (
    <>
        <div className="filterCard">
          <button onClick={showfilter}>
            <span>Filter</span> <img width="20px" srcSet={filtersvg} alt="" />
          </button>

          <button>
            <span>Short By</span> <img width="20px" srcSet={dropDown} alt="" />
          </button>
        </div>
    </>
  );
};

export default FilterCard;
