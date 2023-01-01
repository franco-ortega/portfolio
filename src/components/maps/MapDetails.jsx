import React from 'react';
import ClosePopup from '../buttons/ClosePopup';
import PropTypes from 'prop-types';
import styles from './MapDetails.module.scss';
import ContinentPopUp from '../continents/ContinentPopUp';

const MapDetails = ({ mapTitle, map }) => {
  return (
    <ContinentPopUp>
      <div className={styles.MapDetails}>
        <ClosePopup path={'cartography'} />
        <p>{mapTitle}</p>
        <img alt={mapTitle} className={styles.Map} src={map} />
      </div>
    </ContinentPopUp>
  );
};

MapDetails.propTypes = {
  mapTitle: PropTypes.string.isRequired,
  map: PropTypes.string.isRequired
};

export default MapDetails;
