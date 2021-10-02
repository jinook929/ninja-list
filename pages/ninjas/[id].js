import Link from 'next/link'
import styled from "styled-components"

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/")
  const data = await res.json()
  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() }
    }
  })

  return ({
    paths,
    fallback: false
  })
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
  const data = await res.json()

  return {
    props: { ninja: data }
  }
}

const Details = ({ ninja }) => {
  console.log("props.ninja", ninja)
  return (
    <>
      <NinjaDetails>
        <h1>{ninja.name}</h1>
        <p><span>Email :</span> {ninja.email}</p>
        <p><span>Website :</span> {ninja.website}</p>
        <p><span>City :</span> {ninja.address.city}</p>
      </NinjaDetails>
      <BtnWrapper>
        <Link href="/ninjas"><a>See all ninjas</a></Link>
      </BtnWrapper>
    </>
  )
}

export default Details

const NinjaDetails = styled.div`
  p span {
    font-weight: bold;
  }
`

const BtnWrapper = styled.button`
  display: block;
  width: 150px;
  padding: 8px 0;
  margin: 20px auto;
  background: #4979ff;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  text-align: center;
`