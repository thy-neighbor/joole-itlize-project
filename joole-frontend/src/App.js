import React from 'react';
import logo from './logo.svg';
import './App.css';

import {NavBar} from './components/header/NavBar'
import {Login} from './containers/login/login'

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
