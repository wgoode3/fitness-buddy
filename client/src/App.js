import React from 'react';
import 'bulma/css/bulma.min.css';
import { Router, Link } from '@reach/router';
import Nav from './components/Nav';
import NewActivity from './components/NewActivity';
import EditActivity from './components/EditActivity';
import Home from './components/Home';

function App() {
  return (
    <div className="container">
      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Fitness Buddy
            </h1>
            <h2 className="subtitle">
              ...
            </h2>
          </div>
        </div>
      </section>
      <Nav />
      <Router>
        <Home path="/" />
        <NewActivity path="/new" />
        <EditActivity path="/edit/:_id" />
      </Router>
    </div>
  );
}

export default App;
