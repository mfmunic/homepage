import React, { Component } from "react";
import { connect } from "react-redux";

import ToolbarButton from "../utils/ToolbarButton";

class PortfolioToolbar extends Component {
  render() {
    const color = "green";
    return (
      <div>
        <ToolbarButton text="Homepage" color={color} />
        <ToolbarButton text="GoT Hangman" color={color} />
        <ToolbarButton text="RPSLS" color={color} />
        <ToolbarButton text="Triviagame" color={color} />
        <ToolbarButton text="Dogepile" color={color} />
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

export default connect(mapStateToProps)(PortfolioToolbar);
