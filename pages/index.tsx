import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Hero, SalesTeams, Sales, Automated, TrustedPartners, CompletionTools } from '@src/sections/home-page/';
import { Footer } from '@src/components/Footer';
import { getHomePageSections } from '@src/mocks/Home/index';
import { GA } from '@src/components/Analitiycs';
import { WhySalesAssistCompleteSalesFaster, WhySalesAssistIteration, WhySalesAssistSalesProcess } from '@src/sections/WhySalesAssist';
import { Nav } from 'src/components';

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

      <Nav />
      <Hero {...{ heroData: hero }} />
      <CompletionTools />
      <WhySalesAssistIteration {...{ data: actions }} id='actions' />
      {/* <HowItWorks {...{data: HowItWork }} id='how-it-works' /> */}
      <Automated {...{ data: automated }} className='bg-white-soft' />
      <WhySalesAssistCompleteSalesFaster {...{ data: completeSales }} />
      <WhySalesAssistSalesProcess {...{ data: salesProcess }} />
      <TrustedPartners {...{ data: hero }} />
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
