import React, {useState} from "react";
import styles from "../styles/About.module.css";
import { es, en } from "../public/lang/language"
import Header from "./Header"
import SocialSection from "./SocialSection";

function About({isDark, setIsDark}) {
  const [ isEnglish, setIsEnglish] = useState(true)

  const toggleLang = () => {
    setIsEnglish(!isEnglish);
  }

  const toggleDark = () => {
    setIsDark(!isDark);
  }
  return(
    <div className={styles.container}>
    <Header isDark={isDark} setIsDark={setIsDark} isEnglish={isEnglish} setIsEnglish={setIsEnglish} es={es} en={en}/>
    <div className={styles.mainContainer}>
      <SocialSection/>
      <div className={styles.main} >
        <h1 className={styles.title}>{isEnglish ? en.menu.about : es.menu.about}</h1>
        <div className={styles.infoContainer}>
          <div>
            <p className={styles.paragraph}>{isEnglish ? en.story.firstPara : es.story.firstPara}</p>
            <p className={styles.paragraph}>{isEnglish ? en.story.secondPara : es.story.secondPara}</p>
            <p className={styles.paragraph}>{isEnglish ? en.story.fourthParag : es.story.fourthParag}</p>
            <ul className={styles.skillsList}>
              <li>JavaScript (ES6+)</li>
              <li>HTML & CSS</li>
              <li>React</li>
              <li>Nextjs</li>
              <li>WordPress</li>
              <li>Redux</li>
            </ul>
          </div>
          <img src="/images/me.jpg" alt="me" className={styles.myImage}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About;