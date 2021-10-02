import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const About = () => {
    return (
        <>
            <Head>
                <title>NINJA | About</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1>About Page</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque animi voluptas expedita officia dolorum, quasi rerum facere corrupti repudiandae vitae dolorem veritatis soluta ut praesentium reprehenderit sequi deserunt odio quod.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque animi voluptas expedita officia dolorum, quasi rerum facere corrupti repudiandae vitae dolorem veritatis soluta ut praesentium reprehenderit sequi deserunt odio quod.</p>
            </div>
            
                <Link href="/ninjas"><BtnWrapper>See all ninjas</BtnWrapper></Link>
            
        </>
    )
}

export default About

const BtnWrapper = styled.a`
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
  &:hover {
    cursor: pointer;
    background-color: #7979ff;
  }
`