import React, {useState} from "react";
import styles from "../styles/Main.module.css"
import { Button, IconButton, Link } from "@chakra-ui/core";
import { es, en } from "../public/lang/language"

function Principal({isEnglish, setIsEnglish}) {
  const toggleLang = () => {
    setIsEnglish(!isEnglish);
  }

  return(
    // <div className={styles.main}>
      <div className={styles.mainInfo}>
        <h3 className={styles.hello}>
          {isEnglish ? en.greeting: es.greeting}
        </h3>
        <h1 className={styles.name}>
          Nicolle Quispe.
        </h1>
        <h2 className={styles.occupation}>
          {isEnglish ? en.occupation: es.occupation}
        </h2>
        <a href="#about">
          <Button variantColor={"coral"} variant="outline" className={styles.viewButton}>
            {isEnglish ? en.viewButton: es.viewButton}
            <img src="/images/arrow.svg"/>
          </Button>
          </a>
      </div>
      
    // </div>
  )
}

export default Principal;