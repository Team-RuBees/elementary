// SignUpRouternp

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './SignUp';

const SignUpRouter = () => {
  return (
    <Router>
      <Route path="/signup" exact component={SignUp} />
    </Router>
  );
};

export default SignUpRouter;
