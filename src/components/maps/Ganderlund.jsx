import React from 'react';
import MapDetails from './MapDetails';
import GanderlundMap from '../../assets/maps/Ganderlund.png';

const Ganderlund = () => {
  return (
    <MapDetails
      mapTitle={'Ganderlund'}
      map={GanderlundMap}
    />
  );
};

export default Ganderlund;
