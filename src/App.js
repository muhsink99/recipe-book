
import React from "react";
import Home from './pages/Home';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import Dashboard from './pages/Dashboard';
import ResetPassword from './pages/auth/ResetPassword';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './Auth';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faSignOutAlt, faUtensils, faClock, faLink } from '@fortawesome/free-solid-svg-icons'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

library.add(fab, faSignOutAlt, faPlus, faUtensils, faClock, faLink);

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/recipes" component={Dashboard} />
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/reset" component={ResetPassword} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
