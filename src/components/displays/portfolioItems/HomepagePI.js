import React from "react";

import homeText from "../texts/HomeText";

export const HomepagePI = () => {
  return (
    <div id="HomepagePI">
      <img className="preview" id="homepagePI" src={require("../../utils/images/homepage.png")} alt="homepage preview" />
      <p>{homeText}</p>
    </div>
  );
};
