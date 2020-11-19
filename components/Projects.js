import React from "react";
import styles from "../styles/Projects.module.css"
import { es, en, skills } from "../public/lang/language"

function Projects({isEnglish}) {
  return(
    <div className={styles.container} id="projects">
      <h1 className={styles.title}>{isEnglish ? en.menu.projects : es.menu.projects}</h1>
      <div className={styles.infoContainer}>
        <div className={styles.projectContainer}>
          <div className={styles.projectInfo}>
            <h1 className={styles.projectName}><a href="https://coraliapp-frontend.vercel.app/">{es.projects.coralify.name}</a></h1>
            <div className={styles.projectDescription}>
            <p className={styles.description}>{es.projects.coralify.description}</p>
            </div>
            <ul className={styles.listStack}>
              {isEnglish ? en.projects.coralify.stack.map((item, index) => (<li key={index}>{item}</li>)): es.projects.coralify.stack.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>
          </div>
          <a href="https://coraliapp-frontend.vercel.app/" className={styles.linkImage}>
            <div className={styles.imageContainer}>
              <img className={styles.projectImage} src="/images/coralify.png" alt="Coralify"/>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects;