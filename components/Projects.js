import React from "react";
import styles from "../styles/Projects.module.css"
import { es, en } from "../public/lang/language"
import { Button, Link } from "@chakra-ui/core";

function Projects({isEnglish}) {
  return(
    <div className={styles.container} id="projects">
      <h1 className={styles.title}>{isEnglish ? en.menu.projects : es.menu.projects}</h1>
      <div className={styles.infoContainer}>
        <div className={styles.projectContainer}>
          <div className={styles.projectInfo}>
            <h1 className={styles.projectName}>{isEnglish? en.projects.coralify.name: es.projects.coralify.name}</h1>
            <div className={styles.projectDescription}>
            <p className={styles.description}>{isEnglish? en.projects.coralify.description: es.projects.coralify.description}</p>
            </div>
            <ul className={styles.listStack}>
              {isEnglish ? en.projects.coralify.stack.map((item, index) => (<li key={index}>{item}</li>)): es.projects.coralify.stack.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>
            <div>
            <Button variantColor="white" variant="ghost" className={styles.projectIcon}>
              <Link href="https://github.com/acredutest/coraliapp-frontend">
                <img src="/images/githubProject.svg"/>
              </Link>
            </Button>
            <Button variantColor="white" variant="ghost" className={styles.projectIcon}>
              <Link href="https://coraliapp-frontend.vercel.app/">
                <img src="/images/externalLink.svg"/>
              </Link>
            </Button>
            </div>
          </div>
          <div className={styles.linkImage}>
            <div className={styles.imageContainer}>
              <img className={styles.projectImage} src="/images/coralify.png" alt="Coralify"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;