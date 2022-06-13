import { GitHub } from "@mui/icons-material";

import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.about}>
        <h2>Hi, my name is Andrew</h2>
        <div className={styles.prompt}>
          <p>Front-End developer with a passion for learning and creativity.</p>
          <GitHub />
        </div>
      </div>
      <div className={styles.skills}>
        <h1>Skills</h1>
        <ol className={styles.list}>
          <li className={styles.item}>
            <h2>Front-End</h2>
            <span>
              React, Redux, Redux Saga, Next.js, Formik, React Hook Form,
              MaterialUI, TailwindCS, CSS3: SCSS / StyledComponents / CSS
              Modules, HTML5
            </span>
          </li>
          <li className={styles.item}>
            <h2>Back-End</h2>
            <span>Node.js, REST API (Axios / Fetch), MockAPI</span>
          </li>
          <li className={styles.item}>
            <h2>Others</h2>
            <span>
              Git, GitHub, Webpack, Gulp, ESLint, Prettier, Husky, BEM, Figma,
              Photoshop
            </span>
          </li>
          <li className={styles.item}>
            <h2>Languages</h2>
            <span>JavaScript, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
