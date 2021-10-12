import React from 'react';
import { useHistory } from 'react-router';
import { FocusOn } from 'react-focus-on';
import { Link } from 'react-router-dom';
import ClosePopup from '../../buttons/ClosePopup';
import ContinentDetails from '../ContinentDetails';
import styles from './CartographyDetails.module.scss';

const CartographyDetails = () => {
  let history = useHistory();

  return (
    <ContinentDetails>
      <FocusOn onEscapeKey={() => history.push('/')}
        className={styles.CartographyDetails}>
        <ClosePopup path={''}/>
        <header>Cartography</header>
        <section>
          The inspiration for this site came from my longtime love of fantasy cartography. From <span>Middle Earth</span> to <span>Westeros</span> to the <span>Grishaverse</span>, I&apos;ve always loved flipping to the maps in fantasy novels whenever a new location is mentioned, and in recent years, I&apos;ve started creating my own worlds with pen and paper. More maps can be viewed at <a href="https://www.instagram.com/reefwoodcartography/" target="_blank" rel="noreferrer">@ReefwoodCartography on Instagram</a>.
        </section>
        <section>
          <p>Click image to view full map.</p>
          <Link to='/april'>
            <div className={styles.April}>
              <span role="img" aria-label="April map"></span>
            </div>
          </Link>
          <Link to='/ganderlund'>
            <div className={styles.Ganderlund}>
              <span role="img" aria-label="Ganderlund map"></span>
            </div>
          </Link>
          <Link to='/gruenne'>
            <div className={styles.Gruenne}>
              <span role="img" aria-label="Gruenne map"></span>
            </div>
          </Link>
          <Link to='/harland'>
            <div className={styles.Harland}>
              <span role="img" aria-label="Harland map"></span>
            </div>
          </Link>
          <Link to='/marneosso'>
            <div className={styles.MarneOsso}>
              <span role="img" aria-label="Marne Osso map"></span>
            </div>
          </Link>
          <Link to='/strigi'>
            <div className={styles.Strigi}>
              <span role="img" aria-label="Strigi map"></span>
            </div>
          </Link>
        </section>
      </FocusOn>
    </ContinentDetails>
  );
};

export default CartographyDetails;
