import React from 'react';
import photo from '../../../assets/FrancoOrtega.jpg';
import ContinentPopUp from '../ContinentPopUp';
import styles from './ProfilePopUp.module.scss';

const ProfilePopUp = () => {
  return (
    <ContinentPopUp>
      <div className={styles.ProfilePopUp}>
        <header>
          <img src={photo} alt='Franco Ortega photo' className={styles.Photo} />
          <p className={styles.Name}>Franco Ortega</p>
          <p className={styles.Contact}>
            <a
              href='mailto:francoortegadev@gmail.com'
              rel='noreferrer'
              target='_blank'
              className={styles.ContactLink}
            >
              francoortegadev@gmail.com
            </a>
            <a href='tel:503-998-7444' className={styles.ContactLink}>
              503-998-7444
            </a>
            <div>
              <a
                href='https://github.com/franco-ortega'
                rel='noreferrer'
                target='_blank'
                className={styles.ContactLink}
              >
                GitHub
              </a>
              <span> - </span>
              <a
                href='https://www.linkedin.com/in/francoortega/'
                rel='noreferrer'
                target='_blank'
                className={styles.ContactLink}
              >
                LinkedIn
              </a>
            </div>
          </p>
        </header>
        <div>
          <span>
            Detail-oriented software engineer with a passion for creating
            user-focused products. Thrives in collaborative, cross-functional,
            agile environments. Adept at developing innovative features,
            improving existing systems, creating efficient internal tools, and
            debugging issues within business applications. Approaches work
            optimistically to think big while balancing practicality to
            consistently achieve goals.
          </span>
          <span>
            Additionally, despite growing up very much a math and science kid,
            has learned to love and nurture creativity through writing,
            cartography, and board game design. Other sources of joy are
            bouldering, bike rides, art shows, and visiting friends who have
            landed in faraway places. Finally, roller hockey, punk rock, and
            zines were big influences in the past that provided a lot of
            learnings around team work, expressiveness, and how the world could
            be a more equitable place.
          </span>
          <span>
            Yes to racial justice, social justice, climate justice, and economic
            justice.
          </span>
        </div>
      </div>
    </ContinentPopUp>
  );
};

export default ProfilePopUp;
