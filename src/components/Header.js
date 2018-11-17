import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <div>
        <div id="header">
          <h1 id="headerText">Header</h1>
        </div>
        <div id="lowerLine" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    routing: state.routing
  };
}

export default connect(mapStateToProps)(Header);
