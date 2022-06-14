import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ProjectItem.module.scss";

function ProjectItem({ name, image, id, status }) {
  ProjectItem.propTypes = {
    name: PropTypes.node.isRequired,
    image: PropTypes.node.isRequired,
    id: PropTypes.node.isRequired,
    status: PropTypes.node.isRequired,
  };
  const navigate = useNavigate();

  return (
    <div
      className={styles.projectItem}
      onClick={() => navigate(`/project/${id}`)}
    >
      <div
        className={styles.projectItem__img}
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className={styles.projectItem__wrapper}>
        <h1 className={styles.projectItem__title}>{name}</h1>
        <p className={styles.projectItem__status}>
          <span>Status:</span> {status}
        </p>
      </div>
    </div>
  );
}

export default ProjectItem;
