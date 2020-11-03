import React from "react";
import styles from "../styles/MailSection.module.css"

function MailSection(){
  return(
    <div className={styles.mailContainer}>
      <div className={styles.textContainer}>
        <p className={styles.mail}>nicolleqa03@gmail.com</p>
      </div>
    </div>
  )
}

export default MailSection;