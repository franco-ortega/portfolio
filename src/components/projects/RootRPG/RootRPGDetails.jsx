import React from 'react';
import { useHistory } from 'react-router';
import { FocusOn } from 'react-focus-on';
import ClosePopup from '../../buttons/ClosePopup';
import styles from './RootRPGDetails.module.scss';
import ProjectLinks from '../../links/ProjectLinks';

const RootRPGDetails = () => {
  let history = useHistory();

  return (
    <FocusOn onEscapeKey={() => history.push('/projects')}>
      <main className={styles.RootRPGDetails}>
        <ClosePopup path={'projects'} background={'black'} color={'white'} />
        <section className={styles.Project}>
          <h1 className={styles.ProjectTitle}>Root RPG</h1>
          <p className={styles.ProjectTech}>NextJS | Sass</p>
          <p className={styles.ProjectInfo}>
            As an avid board game and roleplaying game fan, I was delighted to
            find out this summer that one of my favorite board games from over
            the past several years was being adapted into a roleplaying game. I
            built this app to help introduce the 200+ pages of rules in a
            digestable format to new players.
            <br />
            <br />
            The home page covers important terminology, and the other pages dive
            deeper into the rules that will be used most often. The Playbooks
            page also provides players with PDFs to download for all the
            character classes.
            <br />
            <br />
            As with many of my projects, I took a mobile-first approach and
            focused on providing an intuitive interface that was paired with
            proper guidance. Also, I selected colors and imagery to create a
            vibe that matched the game. And it felt great to use my professional
            skills to help bring joy to my personal life.
          </p>
          <ProjectLinks
            website={'https://root-rpg.vercel.app/'}
            github={'https://github.com/franco-ortega/root-rpg'}
            linkColor={''}
          />
        </section>
      </main>
    </FocusOn>
  );
};

export default RootRPGDetails;
