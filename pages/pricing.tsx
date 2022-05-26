import Head from "next/head";
import { useState } from 'react';
import { NextPage } from "next";
import { Footer } from "@src/components";
import { PricingHero, PricingQuestions, PricingComparison, PricingPlans } from '@src/sections/pricing'

const Pricing: NextPage = () => {
    const [isFull, setIsFull] = useState<boolean>(false);
    const handleIsFull = () => setIsFull(!isFull);
    return <>
        <Head>
            <title>Pricing</title>
            <meta name="description" content="Customers hate being bounced from phone call to inbox to branch, and your team hates wasting valuable time to complete the sale. SalesAssist helps you deliver a sleek, mobile experience that your customers start and finish from their phones, while giving valuable time back to your team." />
            <link rel="icon" href="/favicon.ico" />
        </Head>
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