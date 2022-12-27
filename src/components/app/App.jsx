import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Ocean from '../ocean/Ocean';
import ProfileDetails from '../continents/Profile/ProfileDetails';
import ProjectsPopUp from '../continents/Projects/ProjectsPopUp';
import CartographyDetails from '../continents/Cartography/CartographyDetails';
import WeatherBeatsDetails from '../projects/WeatherBeats/WeatherBeatsDetails';
import BeHumanDetails from '../projects/BeHuman/BeHumanDetails';
import ChooseGifDetails from '../projects/ChooseGif/ChooseGifDetails';
import MajorArcanaDetails from '../projects/MajorArcana/MajorArcanaDetails';
import EbbDetails from '../projects/Ebb/EbbDetails';
import April from '../maps/April';
import Ganderlund from '../maps/Ganderlund';
import Harland from '../maps/Harland';
import Gruenne from '../maps/Gruenne';
import MarneOsso from '../maps/MarneOsso';
import Strigi from '../maps/Strigi';
import './App.scss';
import RootRPGDetails from '../projects/RootRPG/RootRPGDetails';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Ocean />
        <Switch>
          <Route exact path='/projects' component={ProjectsPopUp} />
          <Route exact path='/profile' component={ProfileDetails} />
          <Route exact path='/root-rpg' component={RootRPGDetails} />
          <Route exact path='/ebb' component={EbbDetails} />
          <Route exact path='/weatherbeats' component={WeatherBeatsDetails} />
          <Route exact path='/behuman' component={BeHumanDetails} />
          <Route exact path='/choosegif' component={ChooseGifDetails} />
          <Route
            exact
            path='/majorarcanadivinator'
            component={MajorArcanaDetails}
          />
          <Route exact path='/cartography' component={CartographyDetails} />
          <Route exact path='/april' component={April} />
          <Route exact path='/ganderlund' component={Ganderlund} />
          <Route exact path='/gruenne' component={Gruenne} />
          <Route exact path='/harland' component={Harland} />
          <Route exact path='/marneosso' component={MarneOsso} />
          <Route exact path='/strigi' component={Strigi} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
