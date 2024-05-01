import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Ocean from '../components/ocean/Ocean';
import ProfilePopUp from '../components/continents/Profile/ProfilePopUp';
import ProjectsPopUp from '../components/continents/Projects/ProjectsPopUp';
import RootRPGDetails from '../components/projects/RootRPG/RootRPGDetails';
import EbbDetails from '../components/projects/Ebb/EbbDetails';
import WeatherBeatsDetails from '../components/projects/WeatherBeats/WeatherBeatsDetails';
import BeHumanDetails from '../components/projects/BeHuman/BeHumanDetails';
import MajorArcanaDetails from '../components/projects/MajorArcana/MajorArcanaDetails';
// import CartographyDetails from '../components/continents/Cartography/CartographyDetails';
import CartographyPopUp from '../components/continents/Cartography/CartographyPopUp';
import April from '../components/maps/April';
import Ganderlund from '../components/maps/Ganderlund';
import Harland from '../components/maps/Harland';
import Gruenne from '../components/maps/Gruenne';
import MarneOsso from '../components/maps/MarneOsso';
import Strigi from '../components/maps/Strigi';
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Ocean />
        <Switch>
          <Route exact path='/projects' component={ProjectsPopUp} />
          <Route exact path='/profile' component={ProfilePopUp} />
          <Route exact path='/root-rpg' component={RootRPGDetails} />
          <Route exact path='/glowing-colors' component={RootRPGDetails} />
          <Route exact path='/ebb' component={EbbDetails} />
          <Route exact path='/weatherbeats' component={WeatherBeatsDetails} />
          <Route exact path='/behuman' component={BeHumanDetails} />
          <Route
            exact
            path='/majorarcanadivinator'
            component={MajorArcanaDetails}
          />
          {/* <Route exact path='/cartography' component={CartographyDetails} /> */}
          <Route exact path='/cartography' component={CartographyPopUp} />
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
