import React, { Component } from 'react';
import {connect} from 'react-redux';
import Login from './components/Login';
import './App.css';

// @todo: Create routes
class App extends Component {
  render() {
    const {currentUser} = this.props;
    return (
      <div className="App">
        {!currentUser && <Login />}
      </div>
    );
  }
}

function mapStateToProps ({currentUser}) {
  return {currentUser};
}

export default connect(mapStateToProps)(App);
