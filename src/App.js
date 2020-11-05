
import React from "react";
import Home from './pages/Home';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './Auth';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/recipes" component={Dashboard} />
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
