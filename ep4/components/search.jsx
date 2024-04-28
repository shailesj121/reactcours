import { useState } from "react";

const Search = ({ sdata }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState(false);
  const [focus, setFocus] = useState("show")

  function searchEvent(value) {
    setSearchValue(value);
    setSearchResult(sdata.filter((event) => event.info.name.toLowerCase().match(value.toLowerCase())));
  }

  const focusresult = ()=>{
      setFocus("show")
  }
  const bluresult = ()=>{
    setFocus("hide")
}


  return (
    <>
      <span className="relative">
        <input
          type="search"
          id="searchinput"
          onFocus={focusresult}
          onBlur={bluresult}
          onChange={(event) => searchEvent(event.target.value)}
          value={searchValue}
          className="search"
          placeholder="search"
        />

        {searchValue ? (
          <div id="searchResult" className={`absolute z-10 searchResult ${focus}`}>
            {searchResult.map((value, index) => (
              <div key={index} className="search_result-item">{value.info.name}</div>
            ))}{" "}
          </div>
        ) : null}
      </span>
    </>
  );
};

export default Search;
