import React from 'react';
import { useHistory } from 'react-router';
import { FocusOn } from 'react-focus-on';
import MapDetails from './MapDetails';
import HarlandMap from '../../assets/maps/Harland.png';

const Harland = () => {
  let history = useHistory();

  return (
    <FocusOn onEscapeKey={() => history.push('/cartography')}>
      <MapDetails
        mapTitle={'Harland'}
        map={HarlandMap}
      />
    </FocusOn>
  );
};

export default Harland;
