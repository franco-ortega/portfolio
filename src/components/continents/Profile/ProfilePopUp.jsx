import React from 'react';
import photo from '../../../assets/FrancoOrtega.jpg';
import ContinentPopUp from '../ContinentPopUp';
import styles from './ProfilePopUp.module.scss';

const ProfilePopUp = () => {
  return (
    <ContinentPopUp>
      <div className={styles.ProfilePopUp}>
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
        <div className={styles.Bio}>
          <span>
            Diligent and empathetic software engineer with excellent
            communication skills who thrives in collaborative, agile
            environments and loves to create user-focused, high-quality
            products. Experienced in building internal tools, improving existing
            systems, developing new features, writing documentation, and
            debugging issues across the stack in business applications. Guided
            by optimism to dream big and balanced with practicality to ensure
            goals are brought to fruition.
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
        </div>
      </div>
    </ContinentPopUp>
  );
};

export default ProfilePopUp;
