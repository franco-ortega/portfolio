import React from 'react';
import PropTypes from 'prop-types';
import { FocusOn } from 'react-focus-on';
import { useHistory } from 'react-router-dom';
import ClosePopup from '../buttons/ClosePopup';
import styles from './PopUp.module.scss';

const PopUp = ({ children }) => {
  let history = useHistory();

  return (
    <FocusOn onEscapeKey={() => history.push('/')}>
      <main className={styles.PopUp}>
        <ClosePopup path={''} />
        {children}
      </main>
    </FocusOn>
  );
};

PopUp.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PopUp;
