import React from 'react';
import styles from './Legend.module.scss';

const Legend = () => {
  return (
    <section className={styles.Legend}>
      <div>
        <h3>Legend</h3>
        <div>
          <ul>
            <li>HTML</li>
          </ul>
          <ul>
            <li>CSS</li>
            <li>Sass</li>
          </ul>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>NextJS</li>
          </ul>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>GraphQL</li>
            <li>Postman</li>
          </ul>
          <ul>
            <li>Airtable</li>
            <li>Mongo</li>
            <li>PostgreSQL</li>
            <li>Compass</li>
            <li>pgAdmin</li>
          </ul>
          <ul>
            <li>Jest</li>
            <li>QUnit</li>
            <li>Supertest</li>
            <li>React TL</li>
          </ul>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Heroku</li>
            <li>Netlify</li>
          </ul>
          <ul>
            <li>Zapier</li>
            <li>VSCode</li>
          </ul>
          <ul>
            <li>Figma</li>
            <li>Miro</li>
            <li>Storybook</li>
          </ul>
          <ul>
            <li>Asana</li>
            <li>Hive</li>
            <li>Jira</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Legend;
