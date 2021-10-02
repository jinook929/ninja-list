import { useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/ninjas.module.scss'

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/")
  const data = await res.json()

  return {
    props: { ninjas: data }
  }
}

const Ninjas = ({ ninjas }) => {
  let counterRef = useRef(1)
  console.log(`Ninjas rendered ${counterRef.current} time(s)!!!`)

  useEffect(() => {
    counterRef.current++
  })

  return (
    <div>
      <Head>
        <title>NINJA | List</title>
      </Head>
      <h1>All Ninjas</h1>
      {ninjas.map(ninja => (
        <Link key={ninja.id} href={`/ninjas/${ninja.id}`}>
          <a className={styles.single}><h3>{ninja.name}</h3></a>
        </Link>
      ))}
    </div>
  );
}

export default Ninjas;