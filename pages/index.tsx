import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Hero, SalesTeams, Sales, Automated } from '@src/sections/home-page/';
import { Footer } from '@src/components/Footer';
import { getHomePageSections } from '@src/mocks/Home/index';
import { GA } from '@src/components/Analitiycs';
import { WhySalesAssistCompleteSalesFaster, WhySalesAssistIteration, WhySalesAssistSalesProcess } from '@src/sections/WhySalesAssist';

const Home: NextPage<HomePageSections> = (props) => {
  const { hero, salesProcess, completeSales, benefits, salesTeam, simplifySales, actions, automated } = props;
  return (
    <>
      <Head>
        <title>SalesAssist</title>
        <meta name="description" content={hero.meta} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <GA />

      <Hero {...{ heroData: hero }} />
      <WhySalesAssistIteration {...{ data: actions }} id='actions' />
      {/* <HowItWorks {...{data: HowItWork }} id='how-it-works' /> */}
      <Automated {...{ data: automated }} className='bg-white-soft' />
      <WhySalesAssistCompleteSalesFaster {...{ data: completeSales }} />
      <WhySalesAssistSalesProcess {...{ data: salesProcess }} />
      {/* <Benefits {...{ data: benefits }} id='benefits' /> */}
      <SalesTeams {...{ data: salesTeam }} />
      <Sales {...{ data: simplifySales }} />
      <Footer />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const data = getHomePageSections();
  return {
    props: {
      ...data
    }
  }
}
