import React from 'react';
import styles from './MajorArcanaDetails.module.css';

const MajorArcanaDetails = () => {
  return (
    <main className={styles.MajorArcanaDetails}>
      <h1>Major Arcana Divinator</h1>
      <h2>HTML | CSS | JavaScript</h2>
      <section>
        Browser-based app that allows the user to select a one-card or three-card tarot reading. The cards of a reading and the corresponding timestamp are saved in local storage. The user may look back on their readings or delete them. My responsibilities focused on creating and displaying the time stamp as well as rendering the cards from local storage onto the browser.
      </section>
    </main>
  );
};

export default MajorArcanaDetails;
