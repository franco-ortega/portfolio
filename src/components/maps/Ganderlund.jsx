import React from 'react';
import { useHistory } from 'react-router';
import { FocusOn } from 'react-focus-on';
import MapDetails from './MapDetails';
import GanderlundMap from '../../assets/maps/Ganderlund.png';

const Ganderlund = () => {
  let history = useHistory();

  return (
    <FocusOn onEscapeKey={() => history.push('/cartography')}>
      <MapDetails
        mapTitle={'Ganderlund'}
        map={GanderlundMap}
      />
    </FocusOn>
  );
};

export default Ganderlund;
