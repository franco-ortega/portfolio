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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fuga
            impedit recusandae praesentium accusantium fugit repudiandae enim
            facere sapiente? Magnam fuga vero dignissimos, unde iste
            reprehenderit, ipsam eligendi ipsum possimus molestias voluptatibus
            ullam cum fugiat dolorem. Aliquid, veniam. Ullam, ex.
          </p>
          <ProjectLinks
            website={'https://root-rpg.vercel.app/'}
            github={'https://github.com/franco-ortega/root-rpg'}
          />
        </section>
      </main>
    </FocusOn>
  );
};

export default RootRPGDetails;
