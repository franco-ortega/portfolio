import React from 'react';
import ClosePopup from '../buttons/ClosePopup';
import PropTypes from 'prop-types';
import styles from './MapTallDetails.module.css';

const MapTallDetails = ({ mapTitle, map}) => {
  return (
    <div className={styles.MapTallDetails}>
      <ClosePopup path={'cartography'} />
      <p>{mapTitle}</p>
      <img
        alt={mapTitle}
        className={styles.MapTall}
        src={map}
      />
            
    </div>
  );
};

MapTallDetails.propTypes = {
  mapTitle: PropTypes.string.isRequired,
  map: PropTypes.string.isRequired

};

export default MapTallDetails;
