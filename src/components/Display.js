import React, { Component } from 'react';
import { connect } from 'react-redux';

class Display extends Component {
  render() {
    return (
      <div id="display">Display</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    routing: state.routing
  };
}

export default connect(mapStateToProps)(Display);
