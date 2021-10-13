import React from 'react';
import OpenDetails from '../../buttons/OpenDetails';
import styles from './WeatherBeats.module.scss';

const WeatherBeats = () => {
  return (
    <section className={styles.WeatherBeats}>
      <h2 className={styles.Title}>WeatherBeats</h2>
      <div className={styles.Summary}>
        Provides a music playlist based on the weather. Users may customize their experience by selecting a preferred location, weather, or genre.
      </div>
      <OpenDetails path={'weatherbeats'} />
    </section>
  );
};

export default WeatherBeats;
