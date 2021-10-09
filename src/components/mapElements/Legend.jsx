import React from 'react';
import styles from './Legend.module.css';

const Legend = () => {
  return (
    <section className={styles.LegendContainer}>
      <section className={styles.Legend}>
        <h1 className={styles.Title}>Legend</h1>
        <section className={styles.Tech}>
          <p className={styles.TechEntry}>
            <span className={styles.Bold}>Languages:</span> JavaScript, SQL, HTML, CSS
          </p>
          <p className={styles.TechEntry}>
            <span className={styles.Bold}>Front End:</span> React, Redux, Sass
          </p>
          <p className={styles.TechEntry}>
            <span className={styles.Bold}>Back End:</span> Node, Express
          </p>
          <p className={styles.TechEntry}>
            <span className={styles.Bold}>Databases:</span> PostgreSQL
          </p>
          <p className={styles.TechEntry}>
            <span className={styles.Bold}>Testing:</span> Jest, QUnit, React Testing Library, Supertest
          </p>
          <p className={styles.TechEntry}>
            <span className={styles.Bold}>Tools:</span> Git, GitHub, Heroku, Miro, Netlify, pgAdmin, Postman, Slack, VSCode, Whimsical, Zoom
          </p>
        </section>
      </section>
    </section>
  );
};

export default Legend;
