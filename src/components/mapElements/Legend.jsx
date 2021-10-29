import React from 'react';
import styles from './Legend.module.scss';

const Legend = () => {
  return (
    <section className={styles.Legend}>
      <div>
        <h3>Legend</h3>
        <article>
          <p><span>Languages:</span> JavaScript, HTML, CSS, SQL</p>
          <p><span>Front End:</span> React, Redux, Sass</p>
          <p><span>Back End:</span> Node, Express</p>
          <p><span>Databases:</span> PostgreSQL</p>
          <p><span>Testing:</span> Jest, QUnit, React Testing Library, Supertest</p>
          <p><span>Tools:</span> Git, GitHub, Heroku, Miro, Netlify, pgAdmin, Postman, Slack, VSCode, Whimsical, Zoom</p>
          <p><span>Learning:</span> TypeScript, NextJS, GraphQL, Python</p>
        </article>
      </div>
    </section>
  );
};

export default Legend;
