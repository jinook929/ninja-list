import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

const Test = () => {
  return (
    <>
      <Head>
        <title>NINJA | SVG Test</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <Title>Test</Title>
        <ImageContainer>
          <Image src="/test.svg" width={300} height={300} alt="test" />
        </ImageContainer>
      </div>
    </>
  )
}

export default Test

const Title = styled.h1`
  text-align: center;
`

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`