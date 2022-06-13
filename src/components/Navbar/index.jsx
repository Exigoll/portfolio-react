import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Reorder } from "@mui/icons-material";

import styles from "./Navbar.module.scss";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div
      className={styles.navbar}
      id={expandNavbar ? `${styles.open}` : `${styles.close}`}
    >
      <div className={styles.toggleButton}>
        <button
          type="submit"
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <Reorder />
        </button>
      </div>
      <nav className={styles.links}>
        <Link className={styles.menu__link} to="/">
          Home
        </Link>
        <Link className={styles.menu__link} to="/projects">
          Projects
        </Link>
        <Link className={styles.menu__link} to="/experience">
          Experience
        </Link>
        {/* <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to="/home">
              Index
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to="/projects">
              Index
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to="/experience">
              Index
            </Link>
          </li>
        </ul> */}
      </nav>
    </div>
  );
}

export default Navbar;
