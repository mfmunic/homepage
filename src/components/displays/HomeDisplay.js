import React from "react";
import businessMarc from "../utils/images/Marc.png";
import marcAndHog from "../utils/images/marcandhog.JPG";
import marcAndTractor from "../utils/images/marcandtractor.png";
import marcAndStatue from "../utils/images/marcandstatue.jpg";

export const HomeDisplay = () => {
  return (
    <div className="homeDisplay">
      <div className="homeImages">
        <img src={businessMarc} id="linkedInImg" className="homeImg" alt="Marc" />
        <img src={marcAndHog} id="mahImg" className="homeImg" alt="Marc" />
        <img src={marcAndTractor} id="matImg" className="homeImg" alt="Marc" />
        <img src={marcAndStatue} id="masImg" className="homeImg" alt="Marc" />
      </div>
      <div className="homeDisplay-intro">
        <h1 className="homeDisplay-intro-line z5">
          Hello, I'm{" "}
          <span id="myName" className="Text--blue">
            Marc F. Munic
          </span>
          .
        </h1>
        <h1 className="homeDisplay-intro-line">I'm a full-stack web developer.</h1>
      </div>
    </div>
  );
};
