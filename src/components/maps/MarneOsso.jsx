import React from 'react';
import { FocusOn } from 'react-focus-on';
import MapTallDetails from './MapTallDetails';
import MarneOssoMap from '../../assets/maps/MarneOsso.png';

const MarneOsso = () => {
  return (
    <FocusOn>
      <MapTallDetails
        mapTitle={'Marne Osso'}
        map={MarneOssoMap}
      />
    </FocusOn>
  );
};

export default MarneOsso;
