import React from "react";
import "./umlautBtns.scss";

function UmlautBtns({ handleButtonClick }) {
  return (
    <div className="uml-btns">
      <button onClick={() => handleButtonClick("ä")}>ä</button>
      <button onClick={() => handleButtonClick("ö")}>ö</button>
      <button onClick={() => handleButtonClick("ü")}>ü</button>
      <button onClick={() => handleButtonClick("ß")}>ß</button>
    </div>
  );
}

export default UmlautBtns;  