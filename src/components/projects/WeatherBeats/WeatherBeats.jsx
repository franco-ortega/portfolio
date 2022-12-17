import React from 'react';
import OpenDetails from '../../buttons/OpenDetails';
import ProjectLinks from '../../links/ProjectLinks';
import styles from './WeatherBeats.module.scss';

const WeatherBeats = () => {
  return (
    <li className={styles.WeatherBeats}>
      <h2 className={styles.Title}>WeatherBeats</h2>
      <div className={styles.Summary}>
        <p>
          Provides users with a music playlist based on the weather in their
          area. Users may customize their experience by selecting a preferred
          location, weather, or genre.
        </p>
        <ProjectLinks
          website={'https://weatherbeats.netlify.app/'}
          github={'https://github.com/WeatherBeats'}
          linkColor={''}
        />
      </div>
      <OpenDetails path={'weatherbeats'} />
    </li>
  );
};

export default WeatherBeats;
