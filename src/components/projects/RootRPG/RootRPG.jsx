import React from 'react';
import OpenDetails from '../../buttons/OpenDetails';
import ProjectLinks from '../../links/ProjectLinks';
import styles from './RootRPG.module.scss';

const RootRPG = () => {
  return (
    <li className={styles.RootRPG}>
      <h2>Root RPG Guide</h2>
      <div>
        <p>
          App designed to help new players learn the rules of the Root
          Roleplaying Game in a digestable format. Includes downloadable PDFs
          for all the character classes.
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
