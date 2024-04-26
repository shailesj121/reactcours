import React from "react";
import cancelBtn from "../images/cancelBtn.svg";

function Remove({ removeCross, removeFilter }) {
  return (
    <>
      {removeCross ? (
        <span onClick={removeFilter}>
          <img src={cancelBtn} alt="" srcSet={cancelBtn} />
        </span>
      ) : null}
    </>
  );
}

export default Remove;
