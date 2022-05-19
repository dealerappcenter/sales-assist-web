import { NextPage } from "next";
import Head from "next/head";
import { 
    WhySalesAssistHero,
    WhySalesAssistSalesProcess, 
    WhySalesAssistIteration,WhySalesAssistSimplifySales,
    WhySalesAssistCompleteSalesFaster,
    WhySalesAssistCompletingSalesIsPainless,
} from "@src/sections/WhySalesAssist";
import { Footer } from "@src/components";

const WhySalesAssist: NextPage = () => {
    return (<>
        <Head>
            <title>Wy SalesAssist</title>
            <meta name="description" content="Customers hate being bounced from phone call to inbox to branch, and your team hates wasting valuable time to complete the sale. SalesAssist helps you deliver a sleek, mobile experience that your customers start and finish from their phones, while giving valuable time back to your team." />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <WhySalesAssistHero />

        <WhySalesAssistSalesProcess/>

        <WhySalesAssistIteration />

        <WhySalesAssistSimplifySales id='actions'/>

        <WhySalesAssistCompleteSalesFaster />

        <WhySalesAssistCompletingSalesIsPainless />

        <Footer kind="dark" />
    </>)
};


export default WhySalesAssist;