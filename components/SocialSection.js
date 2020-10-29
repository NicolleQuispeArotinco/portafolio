import React from "react";
import styles from "../styles/Main.module.css"
import { Button, Link } from "@chakra-ui/core";

function SocialSection() {
  return(
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
  )
}

export default SocialSection;