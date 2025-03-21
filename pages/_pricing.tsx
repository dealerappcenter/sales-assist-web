import Head from "next/head";
import { useState } from 'react';
import { NextPage } from "next";
import { Footer } from "@src/components";
import { PricingHero, PricingQuestions, PricingComparison, PricingPlans } from '@src/sections/pricing'
import { GA } from '@src/components/Analitiycs';

const Pricing: NextPage = () => {
    const [isFull, setIsFull] = useState<boolean>(false);
    const handleIsFull = () => setIsFull(!isFull);
    return <>
        <Head>
            <title>Pricing</title>
            <meta name="description" content="Complete sales faster with SalesAssist - the Sales Completion Platform that unifies all the sales completion tools into a single panel within your CRM, integrates them with workflow automation and assists your sales team with smart suggestions." />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <GA />
        <PricingHero />
        <PricingPlans 
            isClicked={isFull}
            onClick={handleIsFull}
        />
        {isFull && <PricingComparison />}
        <PricingQuestions data={{}} id='Q&A'/>
        <Footer />
    </>
}


export default Pricing;