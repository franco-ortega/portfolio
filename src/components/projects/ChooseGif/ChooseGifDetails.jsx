import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsDetails from '../../continents/Projects/ProjectsDetails';
import Gif from './chooseGifData';
import styles from './ChooseGifDetails.module.css';

const ChooseGifDetails = () => {
  return (
    <>
      <ProjectsDetails />
      <main className={styles.ChooseGifDetails}>
        <section className={styles.ButtonContainer}>
          <Link to="/projects">
            <button className={styles.CloseButton} aria-label="Close">X</button>
          </Link>
        </section>
        <h1>Choose GIF</h1>
        <section className={styles.ProjectTech}>
            React | CSS | Node | Express | Jest | Giphy API | Heroku | Netlify
        </section>
        <section className={styles.ProjectInfo}>
            Browser-based app that displays real time trending GIFs, provides the ability to search for GIFs by category, and allows users to sign up and save GIFs. The majority of my efforts went into the responsive web design; the Sign Up and Sign In pages; parts of the functionality only available to signed in users; and testing the endpoints handled by our server.
        </section>
        <section className={styles.ProjectLinks}>
          <a href="https://choose-gif-fe.netlify.app/" rel="noreferrer" target="_blank" className={styles.LinkText}>Website</a>
          <img
            src={Gif.currentGif}
            alt="Rotating cube that displays a gif on each side."
            className={styles.ProjectIcon}
          />
          <a href="https://github.com/Choose-Gif" rel="noreferrer" target="_blank" className={styles.LinkText}>GitHub</a>
        </section>
      </main>
    </>
  );
};

export default ChooseGifDetails;
