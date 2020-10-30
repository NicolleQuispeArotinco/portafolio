import React, {useState} from "react";
import styles from "../styles/Experience.module.css";
import { es, en } from "../public/lang/language"
import Header from "./Header"
import SocialSection from "./SocialSection";

function Experience({isEnglish, setIsEnglish}) {
  const toggleLang = () => {
    setIsEnglish(!isEnglish);
  }

  return(
    <div className={styles.container} id="experience">
    {/* <Header isDark={isDark} setIsDark={setIsDark} isEnglish={isEnglish} setIsEnglish={setIsEnglish} es={es} en={en}/> */}
    <div className={styles.main} >
      <h1 className={styles.title}>{isEnglish ? en.menu.experience : es.menu.experience}</h1>
      <div className={styles.infoContainer}>
          <h2 className={styles.infoTitle}>{isEnglish ? en.experience.labsti.job : es.experience.labsti.job} <span>@{isEnglish ? en.experience.labsti.name : es.experience.labsti.name}</span></h2>
          <span className={styles.date}>{isEnglish ? en.experience.labsti.date : es.experience.labsti.date}</span>
          <ul className={styles.toDoList}>
{isEnglish ? en.experience.labsti.toDo.map((item) => (<li>{item}</li>)): es.experience.labsti.toDo.map((item) => (<li>{item}</li>))}
          </ul>
      </div>
    </div>
    </div>

  )
}

export default Experience;