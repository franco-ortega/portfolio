import React from 'react';
import beHumanIcon from '../../../assets/beHuman_halfSize.png';
import ProjectDetails from '../ProjectDetails';
import ClosePopup from '../../buttons/ClosePopup';
import ProjectLinks from '../../links/ProjectLinks';
import styles from './BeHumanDetails.module.scss';

const BeHumanDetails = () => {
  return (
    <ProjectDetails>
      <div className={styles.BeHumanDetails}>
        <ClosePopup
          path={'projects'}
          background={'var(--white-one)'}
          color={'var(--black-one)'}
        />
        <h3 className={styles.ProjectTitle}>beHuman</h3>
        <h4 className={styles.ProjectTech}>
          HTML | CSS | JavaScript | SQL | Node | Express | Supertest | Heroku
        </h4>
        <p className={styles.ProjectInfo}>
          VSCode extension that prompts users to take breaks with an hourly
          pop-up that provides wellness tips and movement videos. Users may
          adjust the time increment and reset the timer. My efforts included
          sandboxing to help develop the time tracking functionality and
          pop-ups; making a model with endpoints and testing; building an admin
          website to update the database and invite new admins.
        </p>
        <ProjectLinks
          website={
            'https://marketplace.visualstudio.com/items?itemName=not-bot.be-human'
          }
          github={'https://github.com/alchemy-be-human'}
        />
        <img
          src={beHumanIcon}
          alt='beHuman icon of a seated human with an open laptop for a head'
        />
      </div>
    </ProjectDetails>
  );
};

export default BeHumanDetails;
