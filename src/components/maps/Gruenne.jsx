import React from 'react';
import { useHistory } from 'react-router';
import { FocusOn } from 'react-focus-on';
import MapDetails from './MapDetails';
import GruenneMap from '../../assets/maps/Gruenne.png';

const Gruenne = () => {
  let history = useHistory();

  return (
    <FocusOn onEscapeKey={() => history.push('/cartography')}>
      <MapDetails
        mapTitle={'Gruenne'}
        map={GruenneMap}
      />
    </FocusOn>
  );
};

export default Gruenne;
