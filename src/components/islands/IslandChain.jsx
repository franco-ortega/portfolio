import React from 'react';
import Email from './Email';
import GitHub from './GitHub';
import LinkedIn from './LinkedIn';
import Twitter from './Twitter';
import styles from './IslandChain.module.css';

const IslandChain = () => {
  return (
    <main className={styles.IslandChain}>
      <GitHub />
      <LinkedIn />
      <Email />
      <Twitter />
      {/* <div className={styles.IslandGridBlock}></div> */}
    </main>
  );
};

export default IslandChain;
