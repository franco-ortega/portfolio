import React from 'react';
import { useHistory } from 'react-router';
import styles from './WeatherBeats.module.css';

const WeatherBeats = () => {
  let history = useHistory();

  const onDetailsClick = () => {
    history.push('/weatherbeats');
  };

  return (
    <section className={styles.WeatherBeats}>
      <h2 className={styles.Title}>WeatherBeats</h2>
      <div className={styles.Summary}>
        WeatherBeats provides a music playlist based on the weather. Users may customize their experience by selecting a preferred location, weather, or genre.
      </div>
      <button onClick={onDetailsClick} className={styles.DetailsButton} >Click for project details.</button>
    </section>
  );
};

export default WeatherBeats;
