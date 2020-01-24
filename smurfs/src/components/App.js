import React, { Component } from "react";

import Smurf from './smurfs';
import AddSmurfForm from './AddSmurfForm';

import "./App.css";



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Smurf Village</h1>
        <Smurf />
        <AddSmurfForm />
      </div>
    );
  }
}

export default App;
