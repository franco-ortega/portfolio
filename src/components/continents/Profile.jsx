import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../../assets/franco.jpg';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <main className={styles.Profile}>
      <section className={styles.OuterCoastline}>
        <section className={styles.InnerCoastline}>
          <section className={styles.Continent}>
            <header className={styles.Header}>Profile</header>
            <section className={styles.Bio}>
              <img src={photo} alt="profile photo" className={styles.Photo} />
              <p className={styles.BioParagraph}>
                Compassion, communication, creativity, collaboration, and curiosity are qualities that I value dearly and strive to continuously improve. Optimism guides my efforts while realistic practicality ensures that my goals are brought to fruition. Doing work that improves the lives of others brings me great joy.
              </p>
              <p className={styles.BioParagraph}>
                Adaptability, empathy, and patience are strengths that have served me well across multiple fields from publishing to education to transportation. I have applied these to brainstorming, problem solving, and maintaining forward momentum even as circumstances change unexpectedly. Furthermore, my professional experience has put me in constant contact with people of all ages and from many walks of life. This has given me tremendous opportunity to grow as a communicator, listener, and mediator. I look forward to using these strengths and experiences to enhance my contributions as a member of a software development team for a company that values the well-being of its workers and cares about its impact.
              </p>
              <p className={styles.BioParagraph}>
                Additionally, despite being a math and science kid, I have learned to appreciate and nurture my creative side through writing, cartography, and designing boardgames. I also enjoy bouldering, getting around on bike, and attending art events.
              </p>
              <p className={styles.BioParagraph}>
                Yes to social justice, climate justice, and economic justice. 
              </p>
              <p className={styles.BioParagraph}>
                <a href="mailto:francopdx@gmail.com" rel="noreferrer" target="_blank">francopdx@gmail.com</a>
                <br/>
                <a href="tel:503-998-7444">503-998-7444</a>
                <br/>
                <a href="https://github.com/franco-ortega" rel="noreferrer" target="_blank">GitHub</a>
                <br/>
                <a href="https://www.linkedin.com/in/franco-ortega/" rel="noreferrer" target="_blank">LinkedIn</a>
              </p>
            </section>
            <Link to="/">
              <button className={styles.Button}>X</button>
            </Link>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Profile;
