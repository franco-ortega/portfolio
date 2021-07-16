import React from 'react';
import MapDetails from './MapDetails';
import StrigiMap from '../../assets/maps/Strigi.png';

const Strigi = () => {
  return (
    <MapDetails
      mapTitle={'Strigi'}
      map={StrigiMap}
    />
  );
};

export default Strigi;
