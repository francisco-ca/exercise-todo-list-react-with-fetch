import React, {useState, useEffect } from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ControlledInput from "./componentes/ControlledInput.js";

function App() {

  return (
    <div className="App">
        
     <ControlledInput></ControlledInput>
     
    </div>
  );
}
   


export default App;
