import React from 'react';
import { useHistory } from 'react-router';
import { FocusOn } from 'react-focus-on';
import { Link } from 'react-router-dom';
import ClosePopup from '../../buttons/ClosePopup';
import PopUp from '../PopUp';
import styles from './CartographyPopUp.module.scss';

const CartographyPopUp = () => {
  let history = useHistory();

  return (
    <PopUp>
      <FocusOn
        onEscapeKey={() => history.push('/')}
        className={styles.CartographyPopUp}
      >
        <ClosePopup path={''} />
        <header>Cartography</header>
        <section>
          The inspiration for this site came from my longtime love of fantasy
          cartography. From <span>Middle Earth</span> to <span>Westeros</span>{' '}
          to the <span>Grishaverse</span>, I&apos;ve always loved flipping to
          the maps in fantasy novels whenever a new location is mentioned, and
          in recent years, have started creating my own worlds with pen and
          paper.
        </section>
        <section>
          <p>Click images to see full maps.</p>
          <Link to='/april'>
            <div className={styles.April}>
              <span role='img' aria-label='April map'></span>
            </div>
          </Link>
          <Link to='/ganderlund'>
            <div className={styles.Ganderlund}>
              <span role='img' aria-label='Ganderlund map'></span>
            </div>
          </Link>
          <Link to='/gruenne'>
            <div className={styles.Gruenne}>
              <span role='img' aria-label='Gruenne map'></span>
            </div>
          </Link>
          <Link to='/harland'>
            <div className={styles.Harland}>
              <span role='img' aria-label='Harland map'></span>
            </div>
          </Link>
          <Link to='/marneosso'>
            <div className={styles.MarneOsso}>
              <span role='img' aria-label='Marne Osso map'></span>
            </div>
          </Link>
          <Link to='/strigi'>
            <div className={styles.Strigi}>
              <span role='img' aria-label='Strigi map'></span>
            </div>
          </Link>
        </section>
      </FocusOn>
    </PopUp>
  );
};

export default CartographyPopUp;
