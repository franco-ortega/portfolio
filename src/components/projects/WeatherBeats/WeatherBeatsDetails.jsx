import React from 'react';
import { useHistory } from 'react-router';
import { FocusOn } from 'react-focus-on';
import ClosePopup from '../../buttons/ClosePopup';
import styles from './WeatherBeatsDetails.module.scss';
import ProjectLinks from '../../links/ProjectLinks';

const WeatherBeatsDetails = () => {
  let history = useHistory();

  return (
    <FocusOn onEscapeKey={() => history.push('/projects')}>
      <main className={styles.WeatherBeatsDetails}>
        <ClosePopup path={'projects'} background={'yellow'} color={'black'} />
        <div className={styles.Project}>
          <h2 className={styles.ProjectTitle}>WeatherBeats</h2>
          <h3 className={styles.ProjectTech}>
            React | CSS | Node | Express | WeatherBit API | Spotify API | Heroku
            | Netlify
          </h3>
          <p className={styles.ProjectInfo}>
            WeatherBeats provides a music playlist based on the weather. Users
            may customize their experience by selecting a preferred location,
            weather, or genre. Completed in a 10-day remote sprint with a
            5-member team.
          </p>
          <p>
            My contributions included the acquisition of location data and
            associated fetch requests; creating a responsive design and
            consistent layout; building data files incorporated with props to
            enhance modularity and scalability; refactoring repetitive code.
          </p>
          <ProjectLinks
            website={'hhttps://weatherbeats.netlify.app/'}
            github={'https://github.com/WeatherBeats'}
            linkColor={''}
          />
          {/* <p className={styles.ProjectLinks}>
            <span className={styles.Extension}>
              <a
                href='https://weatherbeats.netlify.app/'
                rel='noreferrer'
                target='_blank'
                className={styles.LinkText}
              >
                Website
              </a>
            </span>
            <span>|</span>
            <span className={styles.GitHub}>
              <a
                href='https://github.com/WeatherBeats'
                rel='noreferrer'
                target='_blank'
                className={styles.LinkText}
              >
                GitHub
              </a>
            </span>
          </p> */}
        </div>
      </main>
    </FocusOn>
  );
};

export default WeatherBeatsDetails;
