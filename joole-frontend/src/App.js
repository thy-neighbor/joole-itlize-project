import React from 'react';
import {BrowserRouter as Router, Route, withRouter, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';


import {NavBar} from './components/header/NavBar'
import {Login} from './containers/login/login'
import {Signup} from './containers/signup/signup'

const Page404 = ({ location }) => (
  <div>
     <h2>Awww there is no page found here for '<code>{location.pathname}</code>'' <br/> Try something else maybe?</h2>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
