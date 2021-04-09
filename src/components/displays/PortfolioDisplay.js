import React from "react";

import { GOH } from "./portfolioItems/GOHPI";
import { HomepagePI } from "./portfolioItems/HomepagePI";
import { RPSLS } from "./portfolioItems/RPSLSPI";
import { Triviagame } from "./portfolioItems/TriviagamePI";

export const PortfolioDisplay = (props) => {
  const decidedDisplay = (chosen) => {
    switch (chosen) {
      case "GOH":
        return <GOH />;
      case "RPSLS":
        return <RPSLS />;
      case "Triviagame":
        return <Triviagame />;
      default:
        return <HomepagePI />;
    }
  };
  const displayItem = decidedDisplay(props.display.toolbar);
  return <div id="portfolioDisplay">{displayItem}</div>;
};
