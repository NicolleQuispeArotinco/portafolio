import React from "react";
import styles from "../styles/MailSection.module.css"

function MailSection(){
  return(
    <div className={styles.mailContainer}>
      <div className={styles.textContainer}>
        <span>nicolleqa03@gmail.com</span>
      </div>
    </div>
  )
}

export default MailSection;