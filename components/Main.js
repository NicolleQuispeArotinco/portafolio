import React, {useState} from "react";
import styles from "../styles/Main.module.css"
import { Button, IconButton, Link } from "@chakra-ui/core";
import { es, en } from "../public/lang/language"

function Main({isDark, setIsDark}) {
  const [ isEnglish, setIsEnglish] = useState(true)

  const toggleLang = () => {
    setIsEnglish(!isEnglish);
  }

  const toggleDark = () => {
    setIsDark(!isDark);
  }

  return(
    <div className={styles.main}>
      <header className={styles.nav}>
        <div className={styles.ul}>
          <Button variantColor="white" variant="outline" onClick={toggleLang} className={styles.iconButton}>
            {isEnglish ? "En" : "Es"}
          </Button>
          <IconButton
            icon={isDark === false ? 'moon' : 'sun'}
            onClick={toggleDark}
            variantColor="white" variant="outline" 
            className={styles.iconButton}
          />
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.socialContainer}>
          <div className={styles.buttonContainer}>
            <Button variantColor="white" variant="ghost" className={styles.socialButton}>
              <Link href="https://github.com/NicolleQuispeArotinco">
                <img src="/images/github.svg"/>
              </Link>
            </Button>
            <Button variantColor="white" variant="outline" className={styles.socialButton}>
              <Link href="https://www.linkedin.com/in/nicolle-quispe-arotinco/">
                <img src="/images/linkedin.svg"/>
              </Link>
            </Button>
          </div>
        </div>
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
            <Button variantColor="white" variant="outline" className={styles.viewButton}>
              {isEnglish ? en.viewButton: es.viewButton}
              <img src="/images/arrow.svg"/>
            </Button>
        </div>
      </div>
      
    </div>
  )
}

export default Main;