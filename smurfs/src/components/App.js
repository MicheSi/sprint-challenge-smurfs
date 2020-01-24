import React from "react";
import { useDispatch } from "react-redux";
import {postSmurf} from '../actions';

import Smurf from './smurfs';
import AddSmurfForm from './AddSmurfForm';

import "./App.css";




function App() {
  const dispatch = useDispatch();

  const postNewSmurf = newSmurf => {
    dispatch(postSmurf(newSmurf))
  }

  return (
    <div className="App">
      <h1>My Smurf Village</h1>
      <Smurf />
      <AddSmurfForm postNewSmurf={postNewSmurf}/>
    </div>
  );
}

export default App;
