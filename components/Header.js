import React from "react";
import styles from "../styles/About.module.css";
import { Button, IconButton} from "@chakra-ui/core";

function Header({isDark, setIsDark, isEnglish, setIsEnglish, es, en}){
  const toggleLang = () => {
    setIsEnglish(!isEnglish);
  }

  const toggleDark = () => {
    setIsDark(!isDark);
  }

  return(
    <header className={styles.nav}>
      <ul className={styles.options}>
        <li>{isEnglish ? en.menu.about : es.menu.about}</li>
        <li>{isEnglish ? en.menu.experience : es.menu.experience}</li>
        <li>{isEnglish ? en.menu.projects : es.menu.projects}</li>
      </ul>
      <div className={styles.ulButtons}>
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
  )
};

export default Header;