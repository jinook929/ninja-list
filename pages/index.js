import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>NINJA | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt atque quis earum. Nulla, quidem et? Maxime atque obcaecati, consequuntur laborum ex facere ipsum ipsa doloremque nisi consequatur quasi vitae eligendi?</p>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt atque quis earum. Nulla, quidem et? Maxime atque obcaecati, consequuntur laborum ex facere ipsum ipsa doloremque nisi consequatur quasi vitae eligendi?</p>
        <Link href="/ninjas"><a className={styles.btn}>See all ninjas</a></Link>
      </div>
    </>
  )
}
