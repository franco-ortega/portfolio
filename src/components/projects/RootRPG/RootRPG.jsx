import React from 'react';
import OpenDetails from '../../buttons/OpenDetails';
import ProjectLinks from '../../links/ProjectLinks';
import styles from './RootRPG.module.scss';

const RootRPG = () => {
  return (
    <li className={styles.RootRPG}>
      <h2>Root RPG</h2>
      <div className={styles.Summary}>
        <p>
          An app to help friends learn the rule to this rad game! An app to help
          friends learn the rule to this rad game!
        </p>
        <ProjectLinks
          website={'https://root-rpg.vercel.app/'}
          github={'https://github.com/franco-ortega/root-rpg'}
          linkColor={''}
        />
      </div>
      <OpenDetails path={'root-rpg'} />
    </li>
  );
};

export default RootRPG;
