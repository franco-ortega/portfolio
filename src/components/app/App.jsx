import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ProfileDetails from '../continents/ProfileDetails';
import ProjectsDetails from '../continents/ProjectsDetails';
// import Resume from '../continents/Resume';

import Ocean from '../ocean/Ocean';
import WeatherBeatsDetails from '../projects/WeatherBeatsDetails';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Ocean />
        <Switch>
          <Route exact path="/projects" component={ProjectsDetails} />
          <Route exact path="/profile" component={ProfileDetails} />
          {/* <Route exact path="/resume" component={Resume} /> */}
          <Route exact path="/weatherbeats" component={WeatherBeatsDetails} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
