import React from "react";

import triviagameText from '../texts/TriviagameText';

export const Triviagame = () => {
  return (
    <div id="triviagamePI">
      <img className="preview" id="triviagame" src={require("../../utils/images/triviagameSG.png")} alt="Trivia game" />
      <a href="https://mfmunic.github.io/triviagame/" target="_blank" className="buttonLinks" rel="noreferrer">
        <button>Trivia Game</button>
      </a>
      <p>{triviagameText}</p>
    </div>
  );
};
