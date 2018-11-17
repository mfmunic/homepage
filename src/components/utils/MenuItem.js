import React, { Component } from "react";
import { connect } from "react-redux";

class MenuItem extends Component {
  render() {
    const { text, color } = this.props;
    return (
      <div className="menuItem">
        <div id={`menuTail-${color}`} />
        <div className={`${color}BG menuRibbon`}>
          <p>
            <strong>{text}</strong>
          </p>
        </div>
        <div id={`menuStart-${color}`} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    routing: state.routing
  };
}

export default connect(mapStateToProps)(MenuItem);
