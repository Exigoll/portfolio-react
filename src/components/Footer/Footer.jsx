import { Instagram, Telegram, Email, LinkedIn } from "@mui/icons-material";

import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.socialMedia}>
        <a href="https://t.me/exigoll" target="__blank">
          <Telegram />
        </a>
        <a href="https://www.instagram.com/exigoll" target="__blank">
          <Instagram />
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
      <p>&copy; 2022 @Exigoll</p>
    </div>
  );
}

export default Footer;
