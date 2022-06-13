import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Hero, HowItWorks, Benefits, SalesTeams, Sales } from '@src/sections/homePage/';
import { Footer } from '@src/components/Footer';
import { getHomePageSections } from '@src/mocks/Home/index';
import { GA } from '@src/components/Analitiycs';

const Home: NextPage<HomePageSections> = (props) => {
  const { hero, HowItWork, benefits, salesTeam, simplifySales } = props;
  return (
    <>
      <Head>
        <title>SalesAssist</title>
        <meta name="description" content={hero.desc} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <GA />

      <Hero {...{heroData: hero}}/>

      <HowItWorks {...{data: HowItWork }} id='how-it-works' />

      <Benefits {...{ data: benefits }} id='benefits' />

      <SalesTeams {...{ data: salesTeam}} />

      <Sales {...{ data: simplifySales}} />

      <Footer />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  const data = getHomePageSections();
  return {
    props: {
      ...data
    }
  }
}
