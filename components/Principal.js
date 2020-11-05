import React from "react";
import styles from "../styles/Main.module.css"
import { Button } from "@chakra-ui/core";
import { es, en } from "../public/lang/language"

function Principal({isEnglish}) {
  return(
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
    </div>
  )
}

export default Principal;