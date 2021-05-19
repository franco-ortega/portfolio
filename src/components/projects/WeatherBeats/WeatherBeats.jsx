import React from 'react';
import { Link } from 'react-router-dom';
import styles from './WeatherBeats.module.css';

const WeatherBeats = () => {
  return (
    <section className={styles.WeatherBeats}>
      <h2 className={styles.Title}>WeatherBeats</h2>
      <div className={styles.Summary}>
        WeatherBeats provides a music playlist based on the weather. Users may customize their experience by selecting a preferred location, weather, or genre.
      </div>
      <div className={styles.ButtonContainer}>
        <Link to="/weatherbeats">
          <button className={styles.DetailsButton} aria-label="Project Details">Click for project details.</button>
        </Link>
      </div>
    </section>
  );
};

export default WeatherBeats;
