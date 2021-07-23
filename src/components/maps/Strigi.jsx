import React from 'react';
import { FocusOn } from 'react-focus-on';
import MapTallDetails from './MapTallDetails';
import StrigiMap from '../../assets/maps/Strigi.png';

const Strigi = () => {
  return (
    <FocusOn>
      <MapTallDetails
        mapTitle={'Strigi'}
        map={StrigiMap}
      />
    </FocusOn>
  );
};

export default Strigi;
