import React from "react";

import rpslsText from "../texts/RPSLSText";

export const RPSLS = () => {
  return (
    <div id="RPSLSPI">
      <img className="preview" id="RPSLS" src={require("../../utils/images/rpslsSG.png")} alt="RPSLS" />
      <a href="https://mfmunic.github.io/rock-paper-scissors/" target="_blank" className="buttonLinks" rel="noreferrer">
        <button>Rock Paper Scissors Lizard Spock</button>
      </a>
      <p>{rpslsText}</p>
    </div>
  );
};
