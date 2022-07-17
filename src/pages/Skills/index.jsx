import styles from "./Skills.module.scss";

function Skills() {
  return (
    <div className={styles.skills}>
      <h1 className={styles.skills__title}>My Skills</h1>
      <ul className={styles.listSkills}>
        <li className={styles.listSkills__item}>
          <h2 className={styles.listSkills__title}>Front-End:</h2>
          <span>
            React, Redux, Redux Toolkit, Redux Saga, Next.js, Formik, React Hook
            Form, MaterialUI, SCSS, TailwindCSS, StyledComponents,
            StyledModules, HTML5
          </span>
        </li>
        <li className={styles.listSkills__item}>
          <h2 className={styles.listSkills__title}>Back-End:</h2>
          <span>Node.js, REST API (Axios / Fetch), MockAPI</span>
        </li>
        <li className={styles.listSkills__item}>
          <h2 className={styles.listSkills__title}>Others:</h2>
          <span>
            Git, GitHub, Webpack, Gulp, ESLint, Prettier, Husky, BEM, Figma,
            Photoshop
          </span>
        </li>
        <li className={styles.listSkills__item}>
          <h2 className={styles.listSkills__title}>Languages:</h2>
          <span>JavaScript, TypeScript</span>
        </li>
      </ul>
    </div>
  );
}

export default Skills;
