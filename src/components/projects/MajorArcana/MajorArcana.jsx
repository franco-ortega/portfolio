import React from 'react';
import OpenDetails from '../../buttons/OpenDetails';
import ProjectLinks from '../../links/ProjectLinks';
import styles from './MajorArcana.module.scss';

const MajorArcana = () => {
  return (
    <li className={styles.MajorArcana}>
      <h2>Major Arcana Divinator</h2>
      <div>
        <p>
          Users may select a one-card or three-card tarot reading. Readings are
          stored with timestamps and can be viewed again later or erased.
        </p>
        <ProjectLinks
          website={
            'https://mystechal-divinators.github.io/project-week-tarot-divinators/'
          }
          github={
            'https://github.com/Mystechal-Divinators/project-week-tarot-divinators'
          }
        />
      </div>
      <OpenDetails path={'majorarcanadivinator'} />
    </li>
  );
};

export default MajorArcana;
