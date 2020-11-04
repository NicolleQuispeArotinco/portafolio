import React from "react";
import styles from "../styles/Experience.module.css";
import { es, en } from "../public/lang/language"

function Experience({isEnglish}) {
  return(
    <div className={styles.container} id="experience">
      <h1 className={styles.title}>{isEnglish ? en.menu.experience : es.menu.experience}</h1>
      <div className={styles.infoContainer}>
          <h2 className={styles.infoTitle}>{isEnglish ? en.experience.labsti.job : es.experience.labsti.job} <span>@{isEnglish ? en.experience.labsti.name : es.experience.labsti.name}</span></h2>
          <span className={styles.date}>{isEnglish ? en.experience.labsti.date : es.experience.labsti.date}</span>
          <ul className={styles.toDoList}>
            {isEnglish ? en.experience.labsti.toDo.map((item, index) => (<li key={index}>{item}</li>)): es.experience.labsti.toDo.map((item, index) => (<li key={index}>{item}</li>))}
          </ul>
      </div>
    </div>

  )
}

export default Experience;