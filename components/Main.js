import React from "react";
import styles from "../styles/Main.module.css"
import Principal from '../components/Principal'
import About from "../components/About"
import Experience from "../components/Experience"
import Projects from "../components/Projects"


function Main({isEnglish}){
  return(
    <div className={styles.main}>
      <Principal isEnglish={isEnglish}/>
      <About  isEnglish={isEnglish}/>
      <Experience  isEnglish={isEnglish}/>
      <Projects isEnglish={isEnglish}/>
    </div>
  )
}

export default Main;