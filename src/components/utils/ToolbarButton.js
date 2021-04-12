import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";

export const ToolbarButton = (props) => {
  const { updateState, toolbar } = useContext(AppContext);
  const { text, color } = props;

  const active = text === toolbar ? "active" : "inactive";
  const textColor = active === "active" ? `${color}-BG` : `${color}-Text`;

  return (
    <div className={`toolbarButton-${active} ${textColor}`} onClick={() => updateState({ toolbar: text })}>
      {text}
    </div>
  );
};
