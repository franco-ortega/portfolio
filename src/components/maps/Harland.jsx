import React from 'react';
import MapDetails from './MapDetails';
import HarlandMap from '../../assets/maps/Harland.png';

const Harland = () => {
  return (
    <MapDetails
      mapTitle={'Harland'}
      map={HarlandMap}
    />
  );
};

export default Harland;
