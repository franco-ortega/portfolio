import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsDetails from '../../continents/Projects/ProjectsDetails';
import beHumanIcon from '../../../assets/beHuman_halfSize.png';
import styles from './BeHumanDetails.module.css';

const BeHumanDetails = () => {
  return (
    <>
      <ProjectsDetails />
      <main className={styles.BeHumanDetails}>
        <h1>beHuman</h1>
        <section className={styles.ProjectTech}>
            HTML | CSS | JavaScript | Node | Express | SQL | Supertest | Heroku
        </section>
        <section className={styles.ProjectInfo}>
            VSCode extension that prompts users to take breaks with an hourly pop-up that provides wellness tips and movement videos. Users may adjust the time increment and reset the timer. My efforts included sandboxing to help develop the time tracking functionality and pop-ups; making a model with endpoints and testing; building an admin website to update the database and invite new admins.
        </section>
        <section className={styles.ProjectLinks}>
          <a href="https://marketplace.visualstudio.com/items?itemName=not-bot.be-human" rel="noreferrer" target="_blank">Extension</a>
          <img
            src={beHumanIcon}
            alt="beHuman icon of a seated human with an open laptop for a head"
            className={styles.ProjectIcon}
          />
          <a href="https://github.com/alchemy-be-human" rel="noreferrer" target="_blank">GitHub</a>
        </section>
        <Link to="/projects">
          <button className={styles.CloseButton} aria-label="Close">X</button>
        </Link>
      </main>
    </>
  );
};

export default BeHumanDetails;
