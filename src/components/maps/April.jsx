import React from 'react';
import { useHistory } from 'react-router';
import { FocusOn } from 'react-focus-on';
import AprilMap from '../../assets/maps/April.png';
import MapDetails from './MapDetails';

const April = () => {
  let history = useHistory();

  return (
    <FocusOn onEscapeKey={() => history.push('/cartography')}>
      <MapDetails
        mapTitle={'April 2021'}
        map={AprilMap}
      />
    </FocusOn>
  );
};

export default April;
