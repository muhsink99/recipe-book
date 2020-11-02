
import React from "react";
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { AuthProvider } from './Auth';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
