import React from 'react';
import ProjectDetails from '../ProjectDetails';
import ClosePopup from '../../buttons/ClosePopup';
import ProjectLinks from '../../links/ProjectLinks';
import styles from './WeatherBeatsDetails.module.scss';

const WeatherBeatsDetails = () => {
  return (
    <ProjectDetails>
      <div className={styles.WeatherBeatsDetails}>
        <ClosePopup path={'projects'} background={'yellow'} color={'black'} />
        <h3>WeatherBeats</h3>
        <h4>
          React | CSS | Node | Express | WeatherBit API | Spotify API | Heroku |
          Netlify
        </h4>
        <p>
          WeatherBeats provides a music playlist based on the weather. Users may
          customize their experience by selecting a preferred location, weather,
          or genre. Completed in a 10-day remote sprint with a 5-member team.
        </p>
        <p>
          My contributions included the acquisition of location data and
          associated fetch requests; creating a responsive design and consistent
          layout; building data files incorporated with props to enhance
          modularity and scalability; refactoring repetitive code.
        </p>
        <ProjectLinks
          website={'hhttps://weatherbeats.netlify.app/'}
          github={'https://github.com/WeatherBeats'}
          linkColor={''}
        />
      </div>
    </ProjectDetails>
  );
};

export default WeatherBeatsDetails;
