import React from "react";
import styles from "../styles/About.module.css";
import { es, en, skills } from "../public/lang/language"

function About({isEnglish}) {
  return(
    <div className={styles.container} id="about">
      <h1 className={styles.title}>{isEnglish ? en.menu.about : es.menu.about}</h1>
      <div className={styles.infoContainer}>
        <div>
          <p className={styles.paragraph}>{isEnglish ? en.story.firstPara : es.story.firstPara}</p>
          <p className={styles.paragraph}>{isEnglish ? en.story.secondPara : es.story.secondPara}</p>
          <p className={styles.paragraph}>{isEnglish ? en.story.fourthParag : es.story.fourthParag}</p>
          <ul className={styles.skillsList}>
            {skills.map((item, index) => (<li key={index}>{item}</li>))}
          </ul>
        </div>
        <img src="/images/me.jpg" alt="me" className={styles.myImage}/>
      </div>
    </div>
  )
}

export default About;