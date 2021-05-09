import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CartographyDetails.module.css';
import April from '../../../assets/maps/April.png';
import Harland from '../../../assets/maps/Harland.png';
import Strigi from '../../../assets/maps/Strigi.png';
import Gruenne from '../../../assets/maps/Gruenne.png';

const CartographyDetails = () => {
  return (
    <main className={styles.CartographyDetails}>
      <section className={styles.OuterCoastline}>
        <section className={styles.InnerCoastline}>
          <section className={styles.Continent}>
            <p className={styles.Title}>
              <header className={styles.Title}>Cartography</header>
            </p>
            <p className={styles.Content}>
              The inspiration for this site came from my longtime love of fantasy cartography. From Middle Earth to Westeros to the Grishaverse, I&apos;ve always loved flipping to the maps in fantasy novels whenever a new location is mentioned, and in recent years, I&apos;ve started creating my own worlds with pen and paper. More maps can be viewed at <a href="https://www.instagram.com/reefwoodcartography/" target="_blank" rel="noreferrer">@ReefwoodCartography on Instagram</a>.
            </p>
            <p className={styles.MapHarland}>
              <img src={Harland} alt="Harland map" className={styles.Harland} />
            </p>
            <p className={styles.MapStrigi}>
              <img src={Strigi} alt="Owl map" className={styles.Strigi} />
            </p>
            <p className={styles.MapApril}>
              <img src={April} alt="April map" className={styles.April} />
            </p>
            <p className={styles.MapGruenne}>
              <img src={Gruenne} alt="Gruenne map" className={styles.Gruenne} />
            </p>
            <p className={styles.ButtonContainer}>
              <Link to="/">
                <button className={styles.Button}>X</button>
              </Link>
            </p>
          </section>
        </section>
      </section>
    </main>
  );
};

export default CartographyDetails;
