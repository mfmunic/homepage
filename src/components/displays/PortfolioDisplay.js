import React, { Component } from "react";
import { connect } from "react-redux";

class PortfolioDisplay extends Component {
  render() {
    return (
      <div id="portfolioDisplay">
        <img
          className="preview"
          id="gameofhangman"
          src={require("../utils/images/gohSG.png")}
        />
        <p>Game of Hangman</p>
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

export default connect(mapStateToProps)(PortfolioDisplay);
