import React, { Component } from 'react';
import './App.scss';
import { HashRouter, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from "./layout/Header/";
import BMI from "./components/BMI/";
import BMR from "./components/BMR/";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    appTitle: state.appTitle
  };
};

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <HashRouter>
        <div className="App">
          <CssBaseline />
          <Header title={this.props.appTitle} />
          <Route exact path="/BMI" component={BMI} />
          <Route exact path="/BMR" component={BMR} />
        </div>
      </HashRouter>

    );
  }
}
export default connect(mapStateToProps, null)(App);
