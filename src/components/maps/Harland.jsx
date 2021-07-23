import React from 'react';
import { FocusOn } from 'react-focus-on';
import MapDetails from './MapDetails';
import HarlandMap from '../../assets/maps/Harland.png';

const Harland = () => {
  return (
    <FocusOn>
      <MapDetails
        mapTitle={'Harland'}
        map={HarlandMap}
      />
    </FocusOn>
  );
};

export default Harland;
