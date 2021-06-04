import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import HomePage from './pages/homepage/homepage.component';
import Projects from './pages/projects/projects.component';
import Footer from './components/footer/footer.component';

import './App.css';
import Nav from './components/nav/nav.component';

const App = () => {
  return (
  <Fragment>
    <Nav />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/projects' component={Projects} />
      <Redirect from='*' to='/' />
    </Switch>
    <Footer />
  </Fragment>
  );
}

export default App;
