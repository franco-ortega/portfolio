import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsDetails from '../continents/ProjectsDetails';
import styles from './WeatherBeatsDetails.module.css';

const WeatherBeatsDetails = () => {
  return (
    <>
      <ProjectsDetails />
      <main className={styles.WeatherBeatsDetails}>
        <h1>WeatherBeats</h1>
        <section className={styles.ProjectTech}>
        React | CSS | Node | Express | WeatherBit API | Spotify API | Heroku | Netlify
        </section>
        <section className={styles.ProjectInfo}>
            WeatherBeats provides a music playlist based on the weather. Users may customize their experience by selecting a preferred location, weather, or genre. Completed in a 10-day remote sprint with a 5-member team. My contributions included the acquisition of location data and associated fetch requests; creating a responsive design and consistent layout; building data files incorporated with props to enhance modularity and scalability; refactoring repetitive code.
        </section>
        <section className={styles.ProjectLinks}>
          <a href="https://weatherbeats.netlify.app/" rel="noreferrer" target="_blank">Website</a> |
          | <a href="https://github.com/WeatherBeats" rel="noreferrer" target="_blank">GitHub</a>
        </section>
        <Link to="/projects">
          <button className={styles.CloseButton} aria-label="Close">X</button>
        </Link>
      </main>
    </>
  );
};

export default WeatherBeatsDetails;
