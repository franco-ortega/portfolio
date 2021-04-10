import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Profile from '../continents/Profile';

import Ocean from '../ocean/Ocean';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Ocean />
        {/* <Profile /> */}
        <Switch>
          <Route exact path="/profile" component={Profile}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
