import React, { Component } from "react";
import { connect } from "react-redux";
import MenuItem from "./utils/MenuItem";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <div id="logoBorder">
          <div id="nameLogo">
            <h1>Marc</h1>
            <h1>Munic</h1>
          </div>
        </div>
        <div id="menu">
          <MenuItem text="About" color="red" />
          <MenuItem text="R&eacute;sum&eacute;" color="yellow" />
          <MenuItem text="Portfolio" color="green" />
          <MenuItem text="Contact" color="orange" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    routing: state.routing
  };
}

export default connect(mapStateToProps)(Sidebar);
