import React from 'react';
import ClosePopup from '../buttons/ClosePopup';
import PropTypes from 'prop-types';
import styles from './MapTallDetails.module.scss';
import ContinentPopUp from '../continents/ContinentPopUp';

const MapTallDetails = ({ mapTitle, map }) => {
  return (
    <ContinentPopUp>
      <div className={styles.MapTallDetails}>
        <ClosePopup path={'cartography'} />
        <p>{mapTitle}</p>
        <img alt={mapTitle} src={map} />
      </div>
    </ContinentPopUp>
  );
};

MapTallDetails.propTypes = {
  mapTitle: PropTypes.string.isRequired,
  map: PropTypes.string.isRequired
};

export default MapTallDetails;
