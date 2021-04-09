import React from "react";
import * as display from "../../modules/actions/display";

export const ToolbarButton = (props) => {
  const toolbarLocation = (item) => {
    props.dispatch(display.toolbar(item));
  };

  const { text, color } = props;
  const active = text === props.display.toolbar ? "active" : "inactive";
  const textColor = active === "active" ? `${color}-BG` : `${color}-Text`;
  return (
    <div className={`toolbarButton-${active} ${textColor}`} onClick={() => toolbarLocation(text)}>
      {text}
    </div>
  );
};
