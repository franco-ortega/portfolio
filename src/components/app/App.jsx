import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Ocean from '../ocean/Ocean';
import ProfileDetails from '../continents/Profile/ProfileDetails';
import ProjectsDetails from '../continents/Projects/ProjectsDetails';
import CartographyDetails from '../continents/Cartography/CartographyDetails';
import WeatherBeatsDetails from '../projects/WeatherBeats/WeatherBeatsDetails';
import BeHumanDetails from '../projects/BeHuman/BeHumanDetails';
import ChooseGifDetails from '../projects/ChooseGif/ChooseGifDetails';
import './App.css';
import MajorArcanaDetails from '../projects/MajorArcana/MajorArcanaDetails';
import EbbDetails from '../projects/Ebb/EbbDetails';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Ocean />
        <Switch>
          <Route exact path="/projects" component={ProjectsDetails} />
          <Route exact path="/profile" component={ProfileDetails} />
          <Route exact path="/cartography" component={CartographyDetails} />
          <Route exact path="/ebb" component={EbbDetails} />
          <Route exact path="/weatherbeats" component={WeatherBeatsDetails} />
          <Route exact path="/behuman" component={BeHumanDetails} />
          <Route exact path="/choosegif" component={ChooseGifDetails} />
          <Route exact path="/majorarcanadivinator" component={MajorArcanaDetails} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
