import React, { Component } from "react";
import { connect } from "react-redux";

import triviagameText from "../texts/TriviagameText";

class Triviagame extends Component {
  render() {
    return (
      <div id="triviagamePI">
        <img
          className="preview"
          id="triviagame"
          src={require("../../utils/images/triviagameSG.png")}
          alt="Trivia game"
        />
        <a
          href="https://mfmunic.github.io/triviagame/"
          target="_blank"
          className="buttonLinks"
        >
          <button>Trivia Game</button>
        </a>
        <p>{triviagameText}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    routing: state.routing,
    display: state.display
  };
}

export default connect(mapStateToProps)(Triviagame);
