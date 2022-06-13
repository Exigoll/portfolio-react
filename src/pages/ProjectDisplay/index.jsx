import { useParams } from "react-router-dom";
import { GitHub } from "@mui/icons-material";

import ProjectList from "../../helpers/ProjectsList";

import styles from "./ProjectDisplay.module.scss";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className={styles.project}>
      <h1>{project.name}</h1>
      <img src={project.image} alt="Project" />
      <a href={project.linkDeploy} target="_blank" rel="noreferrer">
        <GitHub />
      </a>
      <p>
        <b>Type:</b> {project.type}
      </p>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
    </div>
  );
}

export default ProjectDisplay;
