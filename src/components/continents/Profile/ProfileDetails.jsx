import React from 'react';
import { useHistory } from 'react-router';
import { FocusOn } from 'react-focus-on';
import ClosePopup from '../../buttons/ClosePopup';
import photo from '../../../assets/FrancoOrtega.jpg';
import ContinentDetails from '../ContinentDetails';
import styles from './ProfileDetails.module.scss';

const Profile = () => {
  let history = useHistory();

  return (
    <ContinentDetails>
      <FocusOn onEscapeKey={() => history.push('/')}
        className={styles.ProfileDetails}>
        <ClosePopup path={''}/>
        <header className={styles.Header}>
          <img src={photo} alt="Franco Ortega photo" className={styles.Photo} />
          <p className={styles.Name}>Franco Ortega</p>
          <p className={styles.Contact}>
            <a href="mailto:francopdx@gmail.com" rel="noreferrer" target="_blank" className={styles.ContactLink}>francopdx@gmail.com</a>
            <a href="tel:503-998-7444" className={styles.ContactLink}>503-998-7444</a>
            <a href="https://github.com/franco-ortega" rel="noreferrer" target="_blank" className={styles.ContactLink}>GitHub</a>
            <a href="https://www.linkedin.com/in/francoortega/" rel="noreferrer" target="_blank" className={styles.ContactLink}>LinkedIn</a>
          </p>
        </header>
        <section className={styles.Bio}>
          <span>
            Helping others brings me great joy, and I am very grateful for being able to accomplish this as a software engineer. The puzzle and problem-solving aspects of code spark my curiosity and creative juices. Doing challenging work that is engaging and rewarding keeps me motivated and performing at my best.
          </span>
          <span>
            I love building products that provide a positive impact. To me this includes keeping in mind the user perspective in order to create intuitive interfaces that are supported by proper guidance and robust architecture.
          </span>
          <span>
            I appreciate agile development with well-documented and efficient processes that offer both structure and flexibility.
          </span>
          <span>
            I value clear & kind communication, creativity, cross-functional collaboration, and supportive environments that foster diversity & nurture growth.
          </span>
          <span>
            Optimism guides my efforts while practicality ensures that my goals are brought to fruition.
          </span>
          <span>
            Also, I grew up very much a math and science kid, but I have learned to love and nurture my creative side through writing, cartography, and board game design. Other things that make me smile are bouldering, bike rides, art shows, and visiting friends who have landed in faraway places. Also, roller hockey, punk rock, and zines were big parts of my past that I very much appreciated and occasionally still enjoy in smaller doses these days.
          </span>
          <span>
            Yes to racial justice, social justice, climate justice, and economic justice.
          </span>
        </section>
      </FocusOn>
    </ContinentDetails>
  );
};

export default Profile;
