import React from 'react';
import { Link } from 'react-router-dom';
import ClosePopup from '../../buttons/ClosePopup';
import styles from './CartographyDetails.module.css';

const CartographyDetails = () => {
  return (
    <main className={styles.CartographyDetails}>
      <ClosePopup path={''}/>
      <header className={styles.Header}>
        <p className={styles.Title}>
          Cartography
        </p>
      </header>
      <section className={styles.Content}>
              The inspiration for this site came from my longtime love of fantasy cartography. From Middle Earth to Westeros to the Grishaverse, I&apos;ve always loved flipping to the maps in fantasy novels whenever a new location is mentioned, and in recent years, I&apos;ve started creating my own worlds with pen and paper. More maps can be viewed at <a href="https://www.instagram.com/reefwoodcartography/" target="_blank" rel="noreferrer">@ReefwoodCartography on Instagram</a>.
      </section>
      <section className={styles.DisplayCaseText}>Click image to view full map.</section>
      <section className={styles.MapsDisplayCase}>
        <Link to='/april'>
          <p className={styles.April}>
            <span role="img" aria-label="April map"></span>
          </p>
        </Link>
        <Link to='/ganderlund'>
          <p className={styles.Ganderlund}>
            <span role="img" aria-label="Ganderlund map"></span>
          </p>
        </Link>
        <Link to='/gruenne'>
          <p className={styles.Gruenne}>
            <span role="img" aria-label="Gruenne map"></span>
          </p>
        </Link>
        <Link to='/harland'>
          <p className={styles.Harland}>
            <span role="img" aria-label="Harland map"></span>
          </p>
        </Link>
        <Link to='/marneosso'>
          <p className={styles.MarneOsso}>
            <span role="img" aria-label="Marne Osso map"></span>
          </p>
        </Link>
        <Link to='/strigi'>
          <p className={styles.Strigi}>
            <span role="img" aria-label="Strigi map"></span>
          </p>
        </Link>
      </section>
    </main>
  );
};

export default CartographyDetails;
