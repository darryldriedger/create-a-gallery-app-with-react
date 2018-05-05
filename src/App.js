import React, { Component } from 'react';
import './App.css';

import MainPage  from './Components/pages/MainPage';
import Cats      from './Components/pages/Cats'
import Dogs      from './Components/pages/Dogs'
import Coffee from './Components/pages/Coffee'
import Error     from './Components/pages/Error';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  // redirect
} from 'react-router-dom'

//Using the react router to render specific pages
//Switch will find the first path that matches, else it renders the error page
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Router>
            <div >
              <Switch>
                <Route exact path="/" render={ () => <MainPage/>}/>
                <Route exact path='/cats' render={ () => <Cats/>}/>
                <Route exact path='/dogs' component={Dogs}/>
                <Route exact path='/coffee' component={Coffee}/>
                <Route component={Error}/>
              </Switch>
           </div>
          </Router>
        </div>
      </div>
    );
  }
}
