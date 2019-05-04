import React, { Component } from 'react';
import { connect } from 'react-redux';

// import homeText from "./texts/HomeText";

class HomeDisplay extends Component {
  render() {
    return (
      <div className="homeDisplay">
        {/* <h1 className="blue-Text">Hello, World!</h1>
        <p>{homeText}</p> */}
        <div className="homeImages">
          <img
            src={require('../utils/images/Marc.png')}
            id="linkedInImg"
            className="homeImg"
            alt="Marc"
          />
          <img
            src={require('../utils/images/marcandhog.JPG')}
            id="mahImg"
            className="homeImg"
            alt="Marc"
          />
          <img
            src={require('../utils/images/marcandtractor.png')}
            id="matImg"
            className="homeImg"
            alt="Marc"
          />
          <img
            src={require('../utils/images/marcandstatue.jpg')}
            id="masImg"
            className="homeImg"
            alt="Marc"
          />
        </div>
        <div className="homeDisplay-intro">
          <h1 className="homeDisplay-intro-line z5">
            Hello, I'm <span className="Text--blue">Marc F. Munic</span>.
          </h1>
          <h1 className="homeDisplay-intro-line">
            I'm a full-stack web developer.
          </h1>
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

export default connect(mapStateToProps)(HomeDisplay);
