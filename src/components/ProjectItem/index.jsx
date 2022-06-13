import PropTypes from "prop-types";
import styles from "./ProjectItem.module.scss";

function ProjectItem({ name, image }) {
  ProjectItem.propTypes = {
    name: PropTypes.node.isRequired,
    image: PropTypes.node.isRequired,
  };

  return (
    <div className={styles.projectItem}>
      <div
        className={styles.bgImage}
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <h1 className={styles.projectTitle}>{name}</h1>
    </div>
  );
}

export default ProjectItem;
