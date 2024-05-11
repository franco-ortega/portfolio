import React from 'react';
import { Link } from 'react-router-dom';
import PopUp from '../PopUp';
import ClosePopup from '../../buttons/ClosePopup';
import April from '../../../assets/maps/April.png';
import Ganderlund from '../../../assets/maps/Ganderlund.png';
import Gruenne from '../../../assets/maps/Gruenne.png';
import Harland from '../../../assets/maps/Harland.png';
import MarneOsso from '../../../assets/maps/MarneOsso.png';
import Strigi from '../../../assets/maps/Strigi.png';
import styles from './CartographyPopUp.module.scss';

const CartographyPopUp = () => {
  return (
    <PopUp>
      <div className={styles.CartographyPopUp}>
        <ClosePopup path={''} />
        <header>
          <h2>Cartography</h2>
        </header>
        <div>
          <section>
            <p>
              The inspiration for this site came from my longtime love of
              fantasy cartography. From <span>Middle Earth</span> to{' '}
              <span>Westeros</span> to the <span>Grishaverse</span>, I&apos;ve
              always loved flipping to the maps in fantasy novels whenever a new
              location is mentioned, and in recent years, have started creating
              my own worlds with pen and paper.
            </p>
            <p>Click images to see full maps.</p>
          </section>
          <section>
            <Link to='/april'>
              <div>
                <img
                  src={April}
                  alt='April calendar with the numbers are made of small islands.'
                />
              </div>
            </Link>
            <Link to='/ganderlund'>
              <div>
                <img
                  src={Ganderlund}
                  alt='April calendar with the numbers are made of small islands.'
                />
              </div>
            </Link>
            <Link to='/gruenne'>
              <div>
                <img
                  src={Gruenne}
                  alt='April calendar with the numbers are made of small islands.'
                />
              </div>
            </Link>
            <Link to='/harland'>
              <div>
                <img
                  src={Harland}
                  alt='April calendar with the numbers are made of small islands.'
                />
              </div>
            </Link>
            <Link to='/marneosso'>
              <div>
                <img
                  src={MarneOsso}
                  alt='April calendar with the numbers are made of small islands.'
                />
              </div>
            </Link>
            <Link to='/strigi'>
              <div>
                <img
                  src={Strigi}
                  alt='April calendar with the numbers are made of small islands.'
                />
              </div>
            </Link>
          </section>
        </div>
      </div>
    </PopUp>
  );
};

export default CartographyPopUp;
