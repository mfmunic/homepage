/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from "react";

import { AppContext } from "../context/appContext";

import { HomeDisplay } from "./displays/HomeDisplay";
import { AboutDisplay } from "./displays/AboutDisplay";
import { ResumeDisplay } from "./displays/ResumeDisplay";
import { ContactDisplay } from "./displays/ContactDisplay";
import { PortfolioDisplay } from "./displays/PortfolioDisplay";

export const Display = () => {
  const { location } = useContext(AppContext);
  const [display, setDisplay] = useState();

  useEffect(() => {
    displayPicker();
  }, [location]);

  const displayPicker = () => {
    switch (location) {
      case "About":
        setDisplay(<AboutDisplay />);
        break;
      case "Contact":
        setDisplay(<ContactDisplay />);
        break;
      case "Resume":
        setDisplay(<ResumeDisplay />);
        break;
      case "Portfolio":
        setDisplay(<PortfolioDisplay />);
        break;
      default:
        setDisplay(<HomeDisplay />);
    }
  };

  return <div id="display">{display}</div>;
};
