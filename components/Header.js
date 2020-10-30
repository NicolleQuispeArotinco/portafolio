import React from "react";
import styles from "../styles/About.module.css";
import { Button, IconButton} from "@chakra-ui/core";

function Header({isEnglish, setIsEnglish, es, en}){
  const toggleLang = () => {
    setIsEnglish(!isEnglish);
  }

  return(
    <header className={styles.nav}>
      <ul className={styles.options}>
        <li><a href="#about">{isEnglish ? en.menu.about : es.menu.about}</a></li>
        <li><a href="#experience">{isEnglish ? en.menu.experience : es.menu.experience}</a></li>
        <li><a href="#projects">{isEnglish ? en.menu.projects : es.menu.projects}</a></li>
      </ul>
      <div className={styles.ulButtons}>
        <Button variantColor="white" variant="outline" onClick={toggleLang} className={styles.iconButton}>
          {isEnglish ? "En" : "Es"}
        </Button>
      </div>
    </header>
  )
};

export default Header;