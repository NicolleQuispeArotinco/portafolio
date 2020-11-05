import React from "react";
import styles from "../styles/Header.module.css";
import { Button } from "@chakra-ui/core";
import {Link} from "react-scroll";

function Header({isEnglish, setIsEnglish, es, en}){
  const toggleLang = () => {
    setIsEnglish(!isEnglish);
  }

  return(
    <header className={styles.nav}>
      <div className={styles.options}>
        <Link to="about" spy={true} smooth={true} offset={0} duration={500} className={styles.option}>{isEnglish ? en.menu.about : es.menu.about}</Link>
        <Link to="experience" spy={true} smooth={true} offset={0} duration={500} className={styles.option}>{isEnglish ? en.menu.experience : es.menu.experience}</Link>
        <Link to="projects" spy={true} smooth={true} offset={0} duration={500} className={styles.option}>{isEnglish ? en.menu.projects : es.menu.projects}</Link>
      </div>
      <div>
        <Button variantColor="white" variant="outline" onClick={toggleLang} className={styles.iconButton}>
          {isEnglish ? "En" : "Es"}
        </Button>
      </div>
    </header>
  )
};

export default Header;