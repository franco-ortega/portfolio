import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Ocean from '../ocean/Ocean';
import ProfileDetails from '../continents/Profile/ProfileDetails';
import ProjectsDetails from '../continents/ProjectsDetails';
import BeHumanDetails from '../projects/BeHuman/BeHumanDetails';
import ChooseGifDetails from '../projects/ChooseGif/ChooseGifDetails';
import WeatherBeatsDetails from '../projects/WeatherBeats/WeatherBeatsDetails';
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
          <Route exact path="/behuman" component={BeHumanDetails} />
          <Route exact path="/choosegif" component={ChooseGifDetails} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
