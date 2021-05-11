import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import HomePage from './pages/homepage/homepage.component';
import Projects from './pages/projects/projects.component';

import './App.css';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/projects' component={Projects} />
      <Redirect from='*' to='/' />
    </Switch>
  );
}

export default App;
