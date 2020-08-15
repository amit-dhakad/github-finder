import React from 'react';
import './App.css';
import  Navbar  from "./components/layout/Navbar";
import User from './components/users/User'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'

// set public url in .env.local file to run on localhost:3000 REACT_APP_GITHUB_CLIENT_ID REACT_APP_GITHUB_CLIENT_SECRET set both property
// PUBLIC_URL='/'

const App = () => {

    return (

      <GithubState>
        <AlertState>
      <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar ></Navbar>
        <div className="container">
          <Alert />
          <Switch>
            <Route exact  path="/" component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login' component={User} />
            <Route  component={NotFound} />
          </Switch>

        </div>
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );
}

export default App;
