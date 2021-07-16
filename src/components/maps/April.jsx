import React from 'react';
import AprilMap from '../../assets/maps/April.png';
import MapDetails from './MapDetails';

const April = () => {
  return (
    <MapDetails
      mapTitle={'April 2021'}
      map={AprilMap}
    />
  );
};

export default April;
