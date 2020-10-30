import React from "react";
import styles from "../styles/Main.module.css"
import { Button, IconButton, Link } from "@chakra-ui/core";
import { es, en } from "../public/lang/language"
import Principal from '../components/Principal'
import About from "../components/About"
import Experience from "../components/Experience"


function Main({isEnglish, setIsEnglish}){
  return(
    <div className={styles.main}>
      <Principal isEnglish={isEnglish} setIsEnglish={setIsEnglish}/>
      <About  isEnglish={isEnglish} setIsEnglish={setIsEnglish}/>
      <Experience  isEnglish={isEnglish} setIsEnglish={setIsEnglish}/>
    </div>
  )
}

export default Main;