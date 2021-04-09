import React, { useContext } from "react";
import { GOH } from "./portfolioItems/GOHPI";
import { RPSLS } from "./portfolioItems/RPSLSPI";
import { AppContext } from "../../context/appContext";
import { HomepagePI } from "./portfolioItems/HomepagePI";
import { Triviagame } from "./portfolioItems/TriviagamePI";

export const PortfolioDisplay = () => {
  const { toolbar } = useContext(AppContext);

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
  const displayItem = decidedDisplay(toolbar);
  return <div id="portfolioDisplay">{displayItem}</div>;
};
