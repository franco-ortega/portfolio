import React from 'react';
import ClosePopup from '../buttons/ClosePopup';
import PropTypes from 'prop-types';
import styles from './MapDetails.module.scss';

const MapDetails = ({ mapTitle, map}) => {
  return (
    <div className={styles.MapDetails}>
      <ClosePopup path={'cartography'} />
      <p>{mapTitle}</p>
      <img
        alt={mapTitle}
        className={styles.Map}
        src={map}
      />
            
    </div>
  );
};

MapDetails.propTypes = {
  mapTitle: PropTypes.string.isRequired,
  map: PropTypes.string.isRequired

};

export default MapDetails;
