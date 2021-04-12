import React from "react";

export const HomeDisplay = () => {
  return (
    <div id="homeDisplay">
      {/* <h1 className="blue-Text">Hello, World!</h1>
        <p>{homeText}</p> */}
      <div id="homeImages">
        <img src={require("../utils/images/Marc.png")} id="linkedInImg" className="homeImg" alt="Marc" />
        <img src={require("../utils/images/marcandhog.JPG")} id="mahImg" className="homeImg" alt="Marc" />
        <img src={require("../utils/images/marcandtractor.png")} id="matImg" className="homeImg" alt="Marc" />
        <img src={require("../utils/images/marcandstatue.jpg")} id="masImg" className="homeImg" alt="Marc" />
      </div>
      <div id="intro">
        <h1 id="introLine1">
          Hello, I'm{" "}
          <span id="myName" className="blue-Text">
            Marc F. Munic
          </span>
          .
        </h1>
        <h1 id="introLine2">I'm a full-stack web developer.</h1>
      </div>
    </div>
  );
};
