import React from 'react';
import { useHistory } from 'react-router';
import { FocusOn } from 'react-focus-on';
import ClosePopup from '../../buttons/ClosePopup';
import photo from '../../../assets/FrancoOrtega.jpg';
import ContinentPopUp from '../ContinentPopUp';
import styles from './ProfileDetails.module.scss';

const Profile = () => {
  let history = useHistory();

  return (
    <ContinentPopUp>
      <FocusOn
        onEscapeKey={() => history.push('/')}
        className={styles.ProfileDetails}
      >
        <ClosePopup path={''} />
        <header className={styles.Header}>
          <img src={photo} alt='Franco Ortega photo' className={styles.Photo} />
          <p className={styles.Name}>Franco Ortega</p>
          <p className={styles.Contact}>
            <a
              href='mailto:francopdx@gmail.com'
              rel='noreferrer'
              target='_blank'
              className={styles.ContactLink}
            >
              francopdx@gmail.com
            </a>
            <a href='tel:503-998-7444' className={styles.ContactLink}>
              503-998-7444
            </a>
            <a
              href='https://github.com/franco-ortega'
              rel='noreferrer'
              target='_blank'
              className={styles.ContactLink}
            >
              GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/francoortega/'
              rel='noreferrer'
              target='_blank'
              className={styles.ContactLink}
            >
              LinkedIn
            </a>
          </p>
        </header>
        <section className={styles.Bio}>
          <span>
            I&apos;m a software engineer who loves to create intuitive
            interfaces and build out features across the stack. I appreciate
            well-documented and efficient processes that offer structure and
            flexibility. I value clear and kind communication, cross-functional
            collaboration, and supportive environments that foster diversity and
            nurture growth. Optimism guides my efforts while practicality
            ensures that my goals are brought to fruition.
          </span>
          <span>
            Additionally, I grew up very much a math and science kid, but I have
            learned to love and nurture my creative side through writing,
            cartography, and board game design. Other things that bring me joy
            are bouldering, bike rides, art shows, and visiting friends who have
            landed in faraway places. Also, roller hockey, punk rock, and zines
            were big parts of my past that I very much appreciated and
            occasionally still enjoy in smaller doses these days.
          </span>
          <span>
            Yes to racial justice, social justice, climate justice, and economic
            justice.
          </span>
        </section>
      </FocusOn>
    </ContinentPopUp>
  );
};

export default Profile;
