import React from 'react';
import { useHistory } from 'react-router';
import { FocusOn } from 'react-focus-on';
import MapTallDetails from './MapTallDetails';
import MarneOssoMap from '../../assets/maps/MarneOsso.png';

const MarneOsso = () => {
  let history = useHistory();

  return (
    <FocusOn onEscapeKey={() => history.push('/cartography')}>
      <MapTallDetails
        mapTitle={'Marne Osso'}
        map={MarneOssoMap}
      />
    </FocusOn>
  );
};

export default MarneOsso;
