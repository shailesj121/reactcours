import { useState } from "react";

const Search = ({ sdata }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState(false);

  function searchEvent(value) {
    setSearchValue(value);
    setSearchResult(sdata.filter((event) => event.info.name.toLowerCase().match(value.toLowerCase())));
  }


  return (
    <>
      <span className="relative">
        <input
          type="search"
          // onFocus={focusSearch}
          onChange={(event) => searchEvent(event.target.value)}
          value={searchValue}
          className="search"
          placeholder="search"
        />

        {searchValue ? (
          <div className="absolute z-10 searchResult">
            {searchResult.map((value) => (
              <div className="search_result-item">{value.info.name}</div>
            ))}{" "}
          </div>
        ) : null}
      </span>
    </>
  );
};

export default Search;
