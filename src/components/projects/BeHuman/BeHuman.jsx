import React from 'react';
import OpenDetails from '../../buttons/OpenDetails';
import ProjectLinks from '../../links/ProjectLinks';
import styles from './BeHuman.module.scss';

const BeHuman = () => {
  return (
    <li className={styles.BeHuman}>
      <h2 className={styles.Title}>beHuman</h2>
      <div className={styles.Summary}>
        VSCode extension that prompts users to take breaks with an hourly pop-up
        that provides wellness tips and movement videos.
        <ProjectLinks
          website={
            'https://marketplace.visualstudio.com/items?itemName=not-bot.be-human'
          }
          github={'https://github.com/alchemy-be-human'}
        />
      </div>
      <OpenDetails path={'behuman'} />
    </li>
  );
};

export default BeHuman;
