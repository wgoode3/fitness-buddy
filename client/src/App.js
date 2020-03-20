import React from 'react';
import { Router } from '@reach/router';
import Nav from './components/Nav';
import NewActivity from './components/NewActivity';
import EditActivity from './components/EditActivity';
import Home from './components/Home';
import SignInView from './components/SignInView';


function App() {
  return (
    <>
      <Nav />
      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Fitness Buddy</h1>
            {/* <h2 className="subtitle">...</h2> */}
          </div>
        </div>
      </section>
      <Router className="container" style={{marginTop: "50px"}}>
        <Home path="/" />
        <NewActivity path="/new" />
        <EditActivity path="/edit/:_id" />
        <SignInView path="/sign_in" />
      </Router>
    </>
  );
}

export default App;
