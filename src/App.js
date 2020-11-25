import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { Blog, Create } from './components'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/create">
          <Create />
        </Route>

        <Route path="/">
          <Blog />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
