import React from 'react';
import { Link } from 'react-router-dom';
import styles from './WeatherBeats.module.css';

const WeatherBeats = () => {
  return (
    <main className={styles.WeatherBeats}>
      <h2>WeatherBeats</h2>
      <section className={styles.Summary}>
        WeatherBeats provides a music playlist based on the weather. Users may customize their experience by selecting a preferred location, weather, or genre.
      </section>
      <Link to="/weatherbeats">
        <button className={styles.DetailsButton} aria-label="Project Details">Click for project details.</button>
      </Link>
    </main>
  );
};

export default WeatherBeats;
