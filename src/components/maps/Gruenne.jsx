import React from 'react';
import MapDetails from './MapDetails';
import GruenneMap from '../../assets/maps/Gruenne.png';

const Gruenne = () => {
  return (
    <MapDetails
      mapTitle={'Gruenne'}
      map={GruenneMap}
    />
  );
};

export default Gruenne;
