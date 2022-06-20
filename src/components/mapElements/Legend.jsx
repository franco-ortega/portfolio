import React from 'react';
import styles from './Legend.module.scss';

const Legend = () => {
  return (
    <section className={styles.Legend}>
      <div>
        <h3>Legend</h3>
        <p>
          <ul>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>React</li>
            <li>Redux</li>
            <li>Sass</li>
            <li>NextJS</li>
            <li>Node</li>
            <li>Express</li>
            <li>GraphQL</li>
            <li>Mongo</li>
            <li>PostgreSQL</li>
            <li>Airtable</li>
            <li>Jest</li>
            <li>QUnit</li>
            <li>Supertest</li>
            <li>React Testing Library</li>
          </ul>
          <ul>
            <li>Compass</li>
            <li>pgAdmin</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Heroku</li>
            <li>Netlify</li>
            <li>Postman</li>
            <li>Zapier</li>
            <li>VSCode</li>
            <li>Figma</li>
            <li>Miro</li>
            <li>Storybook</li>
            <li>Asana</li>
            <li>Hive</li>
            <li>Jira</li>
          </ul>
        </p>
      </div>
    </section>
  );
};

export default Legend;
