import React from 'react';
import { FocusOn } from 'react-focus-on';
import AprilMap from '../../assets/maps/April.png';
import MapDetails from './MapDetails';

const April = () => {
  return (
    <FocusOn>
      <MapDetails
        mapTitle={'April 2021'}
        map={AprilMap}
      />
    </FocusOn>
  );
};

export default April;
