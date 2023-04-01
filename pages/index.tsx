import Head from 'next/head'
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonathan Mosney :: UX Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.h1}>Jonathan Mosney</h1>
          <p className={styles.pBig}>I’m a <strong>UX Engineer</strong> with over 20 years of experience <strong>leading teams</strong> and <strong>building websites</strong> for some of the world’s most recognized brands.</p>
          <p className={styles.pSmall}>
              <a href="http://mosney.net/Jonathan_Mosney_Resume.pdf" target="_blank">Resume</a>
                 ·   
              <a href="https://www.linkedin.com/in/jonathanmosney">LinkedIn</a>
                 ·   
              jonathan@mosney.net
          </p>
          {/*
          <div className={styles.logoContainer}>
              <img className={styles.logo} src="images/youtube-logo.svg" alt="YouTube logo"/>
              <img className={styles.logo} src="images/google-logo.svg" alt="Google logo"/>
              <img className={styles.logo} src="images/apple-logo.svg" alt="Apple logo"/>
              <img className={styles.logo} src="images/atrenet-logo.svg" alt="AtreNet logo"/>
          </div>
           */}
      </main>
    </>
  )
}
