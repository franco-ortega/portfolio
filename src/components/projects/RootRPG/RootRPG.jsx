import React from 'react';
import OpenDetails from '../../buttons/OpenDetails';
import styles from './RootRPG.module.scss';

const RootRPG = () => {
  return (
    <section className={styles.RootRPG}>
      <h2 className={styles.Title}>Root RPG</h2>
      <div className={styles.Summary}>
        An app to help friends learn the rule to this rad game!
      </div>
      <OpenDetails path={'root-rpg'} />
    </section>
  );
};

export default RootRPG;
