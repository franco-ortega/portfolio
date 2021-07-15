import React from 'react';
import ClosePopup from '../../buttons/ClosePopup';
import ProjectsDetails from '../../continents/Projects/ProjectsDetails';
import Gif from './chooseGifData';
import styles from './ChooseGifDetails.module.css';

const ChooseGifDetails = () => {
  return (
    <>
      <ProjectsDetails />
      <main className={styles.ChooseGifDetails}>
        <ClosePopup path={'projects'} />
        <h1 className={styles.ProjectTitle}>Choose GIF</h1>
        <section className={styles.ProjectTech}>
            React | CSS | Node | Express | Jest | Giphy API | Heroku | Netlify
        </section>
        <section className={styles.ProjectInfo}>
            Browser-based app that displays real time trending GIFs, provides the ability to search for GIFs by category, and allows users to sign up and save GIFs. The majority of my efforts went into the responsive web design; the Sign Up and Sign In pages; parts of the functionality only available to signed in users; and testing the endpoints handled by our server.
        </section>
        <img
          src={Gif.currentGif}
          alt="Rotating cube that displays a gif on each side."
          className={styles.ProjectIcon}
        />
        <section className={styles.ProjectLinks}>
          <span className={styles.Extension}>
            <a href="https://choose-gif-fe.netlify.app/" rel="noreferrer" target="_blank" className={styles.LinkText}>Website</a>
          </span>
          <span>| |</span>
          <span className={styles.GitHub}>
            <a href="https://github.com/Choose-Gif" rel="noreferrer" target="_blank" className={styles.LinkText}>GitHub</a>
          </span>
        </section>
      </main>
    </>
  );
};

export default ChooseGifDetails;
