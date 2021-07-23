import React from 'react';
import { useHistory } from 'react-router';
import { FocusOn } from 'react-focus-on';
import MapTallDetails from './MapTallDetails';
import StrigiMap from '../../assets/maps/Strigi.png';

const Strigi = () => {
  let history = useHistory();

  return (
    <FocusOn onEscapeKey={() => history.push('/cartography')}>
      <MapTallDetails
        mapTitle={'Strigi'}
        map={StrigiMap}
      />
    </FocusOn>
  );
};

export default Strigi;
