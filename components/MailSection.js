import React from "react";
import styles from "../styles/MailSection.module.css"

function MailSection(){
  return(
    <div className={styles.mailContainer}>
      <div className={styles.textContainer}>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=nicolleqa03@gmail.com"
          target="_blank"
        >
          nicolleqa03@gmail.com
        </a>
      </div>
    </div>
  )
}

export default MailSection;