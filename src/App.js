
import React from "react";
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './Auth';

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
