import React from "react";
import styles from "../styles/Main.module.css"

function Main() {
  return(
    <div className={styles.main}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>Español or english</li>
          <li>Dark mode</li>
        </ul>
      </nav>
      <div className={styles.content}>
        <div>
          <h1>Hey</h1>
        </div>
        <div className={styles.mainInfo}>
          <h3 className={styles.hello}>Hello, my name is</h3>
          <h1 className={styles.name}>Nicolle Quispe.</h1>
          <h2 className={styles.profession}>I’m a front-end developer.</h2>
        </div>
      </div>
      
    </div>
  )
}

export default Main;