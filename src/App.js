
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/signin" component={Signin} exact />
      </Switch>
    </main>
  );
}

export default App;
