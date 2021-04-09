import React from "react";

import gohText from "../texts/GOHText";

export const GOH = () => {
  return (
    <div id="GOH">
      <img className="preview" id="gameofhangman" src={require("../../utils/images/gohSG.png")} alt="Game Of Hangman" />
      <a href="https://mfmunic.github.io/Hangman-Game/" target="_blank" className="buttonLinks" rel="noreferrer">
        <button>Game of Hangman</button>
      </a>
      <p>{gohText}</p>
    </div>
  );
};
