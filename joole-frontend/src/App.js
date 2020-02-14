import React ,{Component} from 'react';
import {BrowserRouter as Router, Route, withRouter, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

import {NavBar} from './components/header/NavBar'
import Login from './containers/login/login'
import Signup from './containers/signup/signup'
import Search from './containers/search/search';


const Page404 = ({ location }) => (
  <div>
     <h2>Awww there is no page found here for '<code>{location.pathname}</code>'' <br/> Try something else maybe?</h2>
  </div>
);

class App extends Component {
  render(){
      return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/search' component={Search} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }

}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

//export default App;
export default connect(mapStateToProps)(App);