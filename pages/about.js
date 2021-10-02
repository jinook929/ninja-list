import Head from 'next/head'
import Link from 'next/link'

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
        <Link href="/ninjas"><a>See all ninjas</a></Link>
    </>
     );
}
 
export default About;