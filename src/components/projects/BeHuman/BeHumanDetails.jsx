import React from 'react';
import ClosePopup from '../../buttons/ClosePopup';
import ProjectsDetails from '../../continents/Projects/ProjectsDetails';
import beHumanIcon from '../../../assets/beHuman_halfSize.png';
import styles from './BeHumanDetails.module.css';

const BeHumanDetails = () => {
  return (
    <>
      <ProjectsDetails />
      <main className={styles.BeHumanDetails}>
        <ClosePopup
          path={'projects'}
          background={'white'}
          color={'black'}
        />
        <h1 className={styles.ProjectTitle}>beHuman</h1>
        <section className={styles.ProjectTech}>
            HTML | CSS | JavaScript | SQL | Node | Express | Supertest | Heroku
        </section>
        <section className={styles.ProjectInfo}>
            VSCode extension that prompts users to take breaks with an hourly pop-up that provides wellness tips and movement videos. Users may adjust the time increment and reset the timer. My efforts included sandboxing to help develop the time tracking functionality and pop-ups; making a model with endpoints and testing; building an admin website to update the database and invite new admins.
        </section>
        <img
          src={beHumanIcon}
          alt="beHuman icon of a seated human with an open laptop for a head"
          className={styles.ProjectIcon}
        />
        <section className={styles.ProjectLinks}>
          <span className={styles.Extension}>
            <a href="https://marketplace.visualstudio.com/items?itemName=not-bot.be-human" rel="noreferrer" target="_blank" className={styles.LinkText}>Extension</a>
          </span>
          <span>| |</span>
          <span className={styles.GitHub}>
            <a href="https://github.com/alchemy-be-human" rel="noreferrer" target="_blank" className={styles.LinkText}>GitHub</a>
          </span>
        </section>
      </main>
    </>
  );
};

export default BeHumanDetails;
