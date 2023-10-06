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
        <div>
          <span>
            Detail-oriented software engineer who is passionate about creating
            user-focused products, and excels in collaborative and agile
            environments. Experienced in developing new features, enhancing
            existing systems, building internal tools, writing comprehensive
            documentation, and effectively debugging issues within business
            applications. Approaches work with optimism and strives to think big
            while remaining grounded in practicality, ensuring that goals are
            successfully achieved.
          </span>
          <span>
            Additionally, I grew up very much a math and science kid but have
            learned to love and nurture my creative side through writing,
            cartography, and board game design. Other things that bring me joy
            are bouldering, bike rides, art shows, and visiting friends who have
            landed in faraway places. Finally, roller hockey, punk rock, and
            zines were big parts of my past that taught me a lot about teamwork,
            expressiveness, and how the world could be a more equitable place.
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
