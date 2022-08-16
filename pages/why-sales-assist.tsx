import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import {
    WhySalesAssistHero,
    WhySalesAssistSalesProcess,
    WhySalesAssistIteration, WhySalesAssistSimplifySales,
    WhySalesAssistCompleteSalesFaster,
    WhySalesAssistCompletingSalesIsPainless,
} from "@src/sections/WhySalesAssist";
import { Footer } from "@src/components";
import { getWhySalesAssistSections } from "@src/mocks/whySalesAssits";
import { GA } from "@src/components/Analitiycs";
import { Automated, Benefits, HowItWorks } from "@src/sections/homePage";

const WhySalesAssist: NextPage<WhySalesAssistSections> = (props) => {
    const { hero, benefits, howItWorks, actions, simplifySales, automated, completeSalesPainless } = props;
    return (<>
        <Head>
            <title>Why SalesAssist</title>
            <meta name="description" content="Customers hate being bounced from phone call to inbox to branch, and your team hates wasting valuable time to complete the sale. SalesAssist helps you deliver a sleek, mobile experience that your customers start and finish from their phones, while giving valuable time back to your team." />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <GA />
        <WhySalesAssistHero {...{ data: hero }} />
     
        <Benefits {...{ data: benefits }} id='benefits' />
        
        <HowItWorks {...{data: howItWorks }} id='how-it-works' />


        {/* <WhySalesAssistSalesProcess {...{ data: salesProcess }} /> */}

        {/* <WhySalesAssistIteration {...{ data: actions }} id='actions' /> */}

        <WhySalesAssistSimplifySales {...{ data: simplifySales }} />

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
