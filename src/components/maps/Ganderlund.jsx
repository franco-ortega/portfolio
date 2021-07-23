import React from 'react';
import { FocusOn } from 'react-focus-on';
import MapDetails from './MapDetails';
import GanderlundMap from '../../assets/maps/Ganderlund.png';

const Ganderlund = () => {
  return (
    <FocusOn>
      <MapDetails
        mapTitle={'Ganderlund'}
        map={GanderlundMap}
      />
    </FocusOn>
  );
};

export default Ganderlund;
