import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from './App';

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" render={(props) => (<App items="books"/>)}/>
      <Route exact path="/books" render={(props) => (<App items="books"/>)}/>
      <Route exact path="/categories" render={(props) => (<App items="categories"/>)}/>
    </div>
  </Router>
), document.getElementById('root'));
