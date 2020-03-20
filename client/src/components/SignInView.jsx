import React from 'react';
import Register from './Register';
import Login from './Login';



const SignInView = props => {
  return (
    <div className="columns">
      <div className="column">
        <Register />
      </div>
      <div className="column">
        <Login />
      </div>
    </div>
  );
}

export default SignInView;