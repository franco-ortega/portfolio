import React from 'react';
import Email from './Email';
import GitHub from './GitHub';
import styles from './IslandChain.module.css';
import LinkedIn from './LinkedIn';
import Twitter from './Twitter';

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
