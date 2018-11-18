import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    const { location, color } = this.props.display;
    return (
      <div>
        <div id="header">
          <h1 id="headerText" className={`${color}-Text`}>
            <strong>
              {location === "Resume"
                ? "R\u00C9SUM\u00C9"
                : location.toUpperCase()}
            </strong>
          </h1>
        </div>
        <div id="logoBorderHeader" />
        <div id="lowerLine" className={`${color}-HeaderBorder`} />
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

export default connect(mapStateToProps)(Header);
