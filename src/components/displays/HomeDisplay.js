import React, { Component } from "react";
import { connect } from "react-redux";

import homeText from "./texts/HomeText";

class HomeDisplay extends Component {
  render() {
    return (
      <div id="homeDisplay">
        <h1 className="blue-Text">Hello, World!</h1>
        <p>{homeText}</p>
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

export default connect(mapStateToProps)(HomeDisplay);
