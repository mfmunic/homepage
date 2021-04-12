import React, { useContext } from "react";

import { AppContext } from "../../context/appContext";

export const Logo = () => {
  const { color, updateState } = useContext(AppContext);

  return (
    <div id="templogo">
      <div id="nameLogo" className={`BG--${color}`} onClick={() => updateState({ location: "Homepage", color: "blue" })}>
        <h1>Marc</h1>
        <h1>Munic</h1>
      </div>
    </div>
  );
};
