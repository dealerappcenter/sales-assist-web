import { WhySalesAssistHero } from "@src/sections/WhySalesAssist";
import { NextPage } from "next";
import Head from "next/head";

const WhySalesAssist: NextPage = () => {
    return (<>
        <Head>
            <title>Wy SalesAssist</title>
            <meta name="description" content="Customers hate being bounced from phone call to inbox to branch, and your team hates wasting valuable time to complete the sale. SalesAssist helps you deliver a sleek, mobile experience that your customers start and finish from their phones, while giving valuable time back to your team." />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <WhySalesAssistHero />
    </>)
};


export default WhySalesAssist;