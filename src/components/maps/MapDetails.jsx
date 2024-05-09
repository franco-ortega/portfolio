import React from 'react';
import ClosePopup from '../buttons/ClosePopup';
import PropTypes from 'prop-types';
import PopUp from '../continents/PopUp';
import styles from './MapDetails.module.scss';

const MapDetails = ({ mapTitle, map }) => {
  return (
    <PopUp>
      <div className={styles.MapDetails}>
        <ClosePopup path={'cartography'} />
        <p>{mapTitle}</p>
        <div>
          <img alt={mapTitle} src={map} />
        </div>
      </div>
    </PopUp>
  );
};

MapDetails.propTypes = {
  mapTitle: PropTypes.string.isRequired,
  map: PropTypes.string.isRequired,
};

export default MapDetails;
