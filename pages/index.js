import {useState} from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SocialSection from "../components/SocialSection"
import MailSection from "../components/MailSection"
import Main from "../components/Main"
import Header from "../components/Header"
import { es, en } from "../public/lang/language"

export default function Home() {
  const [isEnglish, setIsEnglish] = useState(true)

  return (
    <div className={styles.container}>
      <Head>
        <title>Nicolle Quispe</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Header isEnglish={isEnglish} setIsEnglish={setIsEnglish} es={es} en={en}/>
      <div className={styles.content}>
        <SocialSection/>
        <Main isEnglish={isEnglish}/>
        <MailSection/>
      </div>
    </div>
  )
}
