import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Code = () => {
  return (
    <>
      <Head>
        <title>NINJA | Repo</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <Title>Source Code</Title>
        <GitHub>GitHub Repo</GitHub>
        <ImageContainer>
          <Link href="https://github.com/jinook929/ninja-list">
            <a target="_blank">
              <Image src="/test.svg" width={300} height={300} alt="test" />
            </a>
          </Link>
        </ImageContainer>
      </div>
    </>
  )
}

export default Code

const Title = styled.h1`
  text-align: center;
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`

const GitHub = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(275%);
  /* z-index: 1; */
`