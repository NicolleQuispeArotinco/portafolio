import React from "react";
import styles from "../styles/About.module.css";
import { es, en, skills } from "../public/lang/language"

function About({isEnglish}) {
  return(
    <div className={styles.container} id="about">
      <h1 className={styles.title}>{isEnglish ? en.menu.about : es.menu.about}</h1>
      <div className={styles.infoContainer}>
        <div className={styles.aboutMeText}>
          <p className={styles.paragraph}>{isEnglish ? en.story.firstPara : es.story.firstPara}</p>
          <p className={styles.paragraph}>{isEnglish ? en.story.secondPara : es.story.secondPara}</p>
          {isEnglish ? <p className={styles.paragraph}>In 2017, I was admitted to <a href="https://www.usmp.edu.pe/" className={styles.link}>San Martin de Porres University</a> and in March 2020, I started <a href="https://www.codeable.la/" className={styles.link}>Codeable</a> , an intensive 6-month bootcamp where I reinforced some languages I already knew and learned new ones.</p> : <p className={styles.paragraph} >En el 2017, ingresé a la <a href="https://www.usmp.edu.pe/" className={styles.link}>Universidad de San Martin de Porres</a> y en marzo del 2020 ingresé a <a href="https://www.codeable.la/"  className={styles.link}>Codeable</a>, un bootcamp intensivo de 6 meses, en este último reforcé algunos lenguajes que ya sabía y aprendí nuevos.</p>}
          <ul className={styles.skillsList}>
            {skills.map((item, index) => (<li key={index}>{item}</li>))}
          </ul>
        </div>
        <div className={styles.myImageContainer}>
          <img src="/images/me.jpg" alt="me" className={styles.myImage}/>
        </div>
        <p className={`${styles.paragraph} ${styles.moreInfo}`}>{isEnglish ? en.story.fifthParag : es.story.fifthParag}</p>
      </div>
    </div>
  )
}

export default About;