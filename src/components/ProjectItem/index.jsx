import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ProjectItem.module.scss";

function ProjectItem({ name, image, id }) {
  ProjectItem.propTypes = {
    name: PropTypes.node.isRequired,
    image: PropTypes.node.isRequired,
    id: PropTypes.node.isRequired,
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
      <h1 className={styles.projectItem__title}>{name}</h1>
    </div>
  );
}

export default ProjectItem;
