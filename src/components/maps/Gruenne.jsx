import React from 'react';
import { FocusOn } from 'react-focus-on';
import MapDetails from './MapDetails';
import GruenneMap from '../../assets/maps/Gruenne.png';

const Gruenne = () => {
  return (
    <FocusOn>
      <MapDetails
        mapTitle={'Gruenne'}
        map={GruenneMap}
      />
    </FocusOn>
  );
};

export default Gruenne;
