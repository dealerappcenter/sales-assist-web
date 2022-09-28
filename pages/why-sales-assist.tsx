import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import {
  WhySalesAssistHero,
  WhySalesAssistSimplifySales,
  WhySalesAssistCompletingSalesIsPainless,
  Customers
} from "@src/sections/WhySalesAssist";
import { Footer } from "@src/components";
import { getWhySalesAssistSections } from "@src/mocks/whySalesAssits";
import { GA } from "@src/components/Analitiycs";
import { Benefits, HowItWorks, TrustedPartners, SalesTeams } from "@src/sections/home-page";

const WhySalesAssist: NextPage<WhySalesAssistSections> = (props) => {
  const { hero, benefits, howItWorks, simplifySales, completeSalesPainless, salesTeam } = props;
  return (<>
    <Head>
      <title>Why SalesAssist</title>
      <meta name="description" content="Complete sales faster with SalesAssist - the Sales Completion Platform that unifies all the sales completion tools into a single panel within your CRM, integrates them with workflow automation and assists your sales team with smart suggestions." />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <GA />

    <WhySalesAssistHero {...{ data: hero }} />
    <Benefits {...{ data: benefits }} id='benefits' />
    <HowItWorks {...{ data: howItWorks }} id='how-it-works' />
    {/* <WhySalesAssistSalesProcess {...{ data: salesProcess }} /> */}
    {/* <WhySalesAssistIteration {...{ data: actions }} id='actions' /> */}
    <WhySalesAssistSimplifySales {...{ data: simplifySales }} />
    <Customers />
    <TrustedPartners />
    <SalesTeams {...{ data: { ...salesTeam, slanted: false } }} />
    {/* <Automated {...{ data: automated }}/> */}
    {/* <WhySalesAssistCompleteSalesFaster {...{ data: completeSalesFaster }} id='complete-sales-faster-anywhere' /> */}
    <WhySalesAssistCompletingSalesIsPainless {...{ data: completeSalesPainless }} />
    <Footer kind="dark" />
  </>)
};

export default WhySalesAssist;

export const getStaticProps: GetStaticProps = async (context) => {
  const data = getWhySalesAssistSections();

  return {
    props: {
      ...data
    }
  }
}
