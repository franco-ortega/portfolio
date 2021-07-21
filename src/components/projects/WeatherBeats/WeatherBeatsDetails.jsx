import React from 'react';
import ClosePopup from '../../buttons/ClosePopup';
import ProjectsDetails from '../../continents/Projects/ProjectsDetails';
import styles from './WeatherBeatsDetails.module.css';

const WeatherBeatsDetails = () => {
  return (
    <>
      <ProjectsDetails />
      <main className={styles.WeatherBeatsDetails}>
        <ClosePopup
          path={'projects'}
          background={'yellow'}
          color={'black'}
        />
        <section className={styles.Project}>
          <h1 className={styles.ProjectTitle}>WeatherBeats</h1>
          <p className={styles.ProjectTech}>
        React | CSS | Node | Express | WeatherBit API | Spotify API | Heroku | Netlify
          </p>
          <p className={styles.ProjectInfo}>
            WeatherBeats provides a music playlist based on the weather. Users may customize their experience by selecting a preferred location, weather, or genre. Completed in a 10-day remote sprint with a 5-member team. My contributions included the acquisition of location data and associated fetch requests; creating a responsive design and consistent layout; building data files incorporated with props to enhance modularity and scalability; refactoring repetitive code.
          </p>
          <p className={styles.ProjectLinks}>
            <span className={styles.Extension}>
              <a href="https://weatherbeats.netlify.app/" rel="noreferrer" target="_blank" className={styles.LinkText}>Website</a>
            </span>
            <span>|</span>
            <span className={styles.GitHub}>
              <a href="https://github.com/WeatherBeats" rel="noreferrer" target="_blank" className={styles.LinkText}>GitHub</a>
            </span>
          </p>
        </section>
      </main>
    </>
  );
};

export default WeatherBeatsDetails;
