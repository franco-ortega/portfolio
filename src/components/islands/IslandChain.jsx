import React from 'react';
import Email from './Email';
import GitHub from './GitHub';
import LinkedIn from './LinkedIn';
import Twitter from './Twitter';
import styles from './IslandChain.module.scss';

const IslandChain = () => {
  return (
    <div className={styles.IslandChain}>
      <GitHub />
      <LinkedIn />
      <Twitter />
      <Email />
    </div>
  );
};

export default IslandChain;
