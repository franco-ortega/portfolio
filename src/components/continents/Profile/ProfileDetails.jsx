import React from 'react';
import { useHistory } from 'react-router';
import { FocusOn } from 'react-focus-on';
import ClosePopup from '../../buttons/ClosePopup';
import photo from '../../../assets/FrancoOrtega.jpg';
import styles from './ProfileDetails.module.css';
import ContinentDetails from '../ContinentDetails';

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
          <p className={styles.BioParagraph}>
                Compassion, communication, creativity, collaboration, and curiosity are qualities that I value dearly and strive to continuously improve. Optimism guides my efforts while realistic practicality ensures that my goals are brought to fruition. Doing work that improves the lives of others brings me great joy.
          </p>
          <p className={styles.BioParagraph}>
                Adaptability, empathy, and patience are strengths that have served me well across multiple fields from publishing to education to transportation. I have applied these to brainstorming, problem solving, and maintaining forward momentum even as circumstances change unexpectedly. Furthermore, my professional experience has put me in constant contact with people of all ages and from many walks of life. This has given me tremendous opportunity to grow as a communicator, listener, and mediator. I look forward to using these strengths and experiences to enhance my contributions as a member of a software development team for a company that values the well-being of its workers and cares about its impact.
          </p>
          <p className={styles.BioParagraph}>
                Of course, what would a profile page be without more personal details too? In addition to growing up as a math and science kid, I have learned to love and nurture my creative side through writing, cartography, and boardgame design. Other things that make me smile include bouldering, getting around on bike, attending art events, sharing food at potlucks, and visiting friends who have wound up in far-flung places. Also, roller hockey, punk rock, and zines were big parts of my past that I very much appreciated and occasionally still enjoy in smaller doses these days.
          </p>
          <p className={styles.BioParagraph}>
                Yes to social justice, climate justice, and economic justice. 
          </p>
        </section>
      </FocusOn>
    </ContinentDetails>
  );
};

export default Profile;
