import Head from 'next/head'
import Nav from '../components/nav.js'
import Intro from '../components/intro.js'
import About from '../components/about.js'
import Subscribe from '../components/subscribe.js'
import Social from '../components/social.js'
import Footer from '../components/footer.js'

function Home() {
  return (
    <>
      <Head>
        <title>Kubjub</title>
        <link rel="icon" href="/kubjublogotransparent.png" />
      </Head>
      <Nav />
      <Intro />
      <About />
      <Subscribe />
      {/* <Social /> */}
      <Footer />

    </>
  )
}

export default Home
