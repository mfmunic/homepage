import React, { Component } from "react";
import { connect } from "react-redux";

class Logo extends Component {
  render() {
    const { color } = this.props.display;
    return (
      <div id="logoBorder">
        <div id="nameLogo" className={`${color}BG`}>
          <h1>Marc</h1>
          <h1>Munic</h1>
        </div>
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

export default connect(mapStateToProps)(Logo);
