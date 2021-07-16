import React from 'react';
import MapTallDetails from './MapTallDetails';
import StrigiMap from '../../assets/maps/Strigi.png';

const Strigi = () => {
  return (
    <MapTallDetails
      mapTitle={'Strigi'}
      map={StrigiMap}
    />
  );
};

export default Strigi;
