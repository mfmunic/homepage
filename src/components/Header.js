import React, { useContext } from "react";

import { AppContext } from "../context/appContext";
// import HomeToolbar from "./toolbars/HomeToolbar";
import { AboutToolbar } from "./toolbars/AboutToolbar";
import { ResumeToolbar } from "./toolbars/ResumeToolbar";
import { PortfolioToolbar } from "./toolbars/PortfolioToolbar";
import { ContactToolbar } from "./toolbars/ContactToolbar";

export const Header = () => {
  const { location, color } = useContext(AppContext);

  const toolbarPicker = () => {
    switch (location) {
      case "About":
        return <AboutToolbar />;
      case "Contact":
        return <ContactToolbar />;
      case "Resume":
        return <ResumeToolbar />;
      case "Portfolio":
        return <PortfolioToolbar />;
      default:
        return <div />;
    }
  };

  const toolbar = toolbarPicker(location);

  return (
    <div>
      <div id="header">
        <h1 id="headerText" className={`${color}-Text`}>
          <strong>{location === "Resume" ? "R\u00C9SUM\u00C9" : location.toUpperCase()}</strong>
        </h1>
      </div>
      <div id="logoBorderHeader" />
      <div id="lowerLine" className={`${color}-HeaderBorder`} />
      {location !== "Homepage" && (
        <div id="toolbar" className={`${color}-border`}>
          {toolbar}
        </div>
      )}
    </div>
  );
};
