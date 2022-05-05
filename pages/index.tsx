import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero, HowItWorks, Benefits, SalesTeams, Sales } from '@src/sections/homePage/';
import { Footer } from '@src/components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SalesAssist</title>
        <meta name="description" content="An easier, faster way to complete the sales process with mobile-first e-Signatures, document collection, ID verification, e-Forms, payment and much more" />
      </Head>

      <Hero />

      {/* <HowItWorks/>

      <Benefits />

      <SalesTeams />

      <Sales />

      <Footer /> */}
    </>
  )
}

export default Home
