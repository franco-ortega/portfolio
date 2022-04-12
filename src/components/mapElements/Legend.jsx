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
          </ul>
          <ul>
            <li>Compass</li>
            <li>pgAdmin</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Heroku</li>
            <li>Netlify</li>
            <li>Postman</li>
            <li>VSCode</li>
            <li>Zapier</li>
            <li>Asana</li>
            <li>Figma</li>
            <li>Miro</li>
            <li>Jira</li>
            <li>Slack</li>
            <li>Zoom</li>
          </ul>

        </p>
        {/* <p><span>Languages:</span> JavaScript, HTML, CSS, SQL</p>
          <p><span>Front End:</span> React, Redux, Sass</p>
          <p><span>Back End:</span> Node, Express</p>
          <p><span>Databases:</span> PostgreSQL</p>
          <p><span>Testing:</span> Jest, QUnit, React Testing Library, Supertest</p>
          <p><span>Tools:</span> Git, GitHub, Heroku, Miro, Netlify, pgAdmin, Postman, Slack, VSCode, Whimsical, Zoom</p>
          <p><span>Learning:</span> TypeScript, NextJS, GraphQL, Python</p> */}
        {/* </article> */}
      </div>
    </section>
  );
};

export default Legend;
