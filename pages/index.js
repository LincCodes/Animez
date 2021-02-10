import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Animez</title>
        <link rel="icon" href="/animez.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Animez</h1>

        <p className={styles.description}>Stream or Download free anime</p>
        </main>
    </div>
  )
}
