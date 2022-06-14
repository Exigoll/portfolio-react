import styles from "./Projects.module.scss";
import ProjectItem from "../../components/ProjectItem";
import ProjectList from "../../helpers/ProjectsList";

function Projects() {
  return (
    <div className={styles.projects}>
      <h1 className={styles.projects__title}>My Personal Projects</h1>
      <div className={styles.projectList}>
        {ProjectList.map((obj) => {
          return (
            <ProjectItem
              name={obj.name}
              image={obj.image}
              key={obj.id}
              id={obj.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
