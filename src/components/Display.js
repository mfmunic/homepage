import React, { useContext } from "react";

import { AppContext } from "../context/appContext";

import { HomeDisplay } from "./displays/HomeDisplay";
import { AboutDisplay } from "./displays/AboutDisplay";
import { ResumeDisplay } from "./displays/ResumeDisplay";
import { PortfolioDisplay } from "./displays/PortfolioDisplay";
import { ContactDisplay } from "./displays/ContactDisplay";

export const Display = () => {
  const { location } = useContext(AppContext);
  const displayPicker = (location) => {
    switch (location) {
      case "About":
        return <AboutDisplay />;
      case "Contact":
        return <ContactDisplay />;
      case "Resume":
        return <ResumeDisplay />;
      case "Portfolio":
        return <PortfolioDisplay />;
      default:
        return <HomeDisplay />;
    }
  };
  const display = displayPicker(location);
  return <div id="display">{display}</div>;
};
