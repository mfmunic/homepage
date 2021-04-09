import React, { useContext } from "react";

import { AppContext } from "../../context/appContext";

export const MenuItem = (props) => {
  const { updateState } = useContext(AppContext);

  const { text, color } = props;
  return (
    <div id="fullMenuItem" onClick={() => updateState({ location: text, color })}>
      <div id="menuShadow" />
      <div className="menuItem">
        <div id={`menuTail-${color}`} />
        <div className={`${color}-BG menuRibbon`}>
          <p>
            <strong>{text === "Resume" ? "R\u00E9sum\u00E9" : text}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
