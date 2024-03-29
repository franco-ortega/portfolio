import React from 'react';
import OpenDetails from '../../buttons/OpenDetails';
import ProjectLinks from '../../links/ProjectLinks';
import ProjectSummary from '../ProjectSummary';
import styles from './WeatherBeatsSummary.module.scss';

const WeatherBeatsSummary = () => {
  return (
    <ProjectSummary>
      <div className={styles.WeatherBeatsSummary}>
        <h2>WeatherBeats</h2>
        <div>
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
      </div>
    </ProjectSummary>
  );
};

export default WeatherBeatsSummary;
