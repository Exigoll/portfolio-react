import {
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  Telegram,
} from "@mui/icons-material";

import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.about}>
        <h2 className={styles.about__title}>Hi, my name is Andrew</h2>
        <div className={styles.prompt}>
          <p>Front-End developer with a passion for learning and creativity.</p>
          <div className={styles.socialMedia}>
            <a href="https://t.me/exigoll" target="__blank">
              <Telegram />
            </a>
            <a href="https://www.instagram.com/exigoll" target="__blank">
              <Instagram />
            </a>
            <a href="https://github.com/Exigoll" target="__blank">
              <GitHub />
            </a>
            <a href="mailto: exigoll@bk.ru">
              <Email />
            </a>
            <a
              href="https://www.linkedin.com/in/andrew-skrynnik-44293b229"
              target="__blank"
            >
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
