import { fadeInRight } from '@src/utils/animations';
import { motion, useAnimation, } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { Card } from '../../../components/Card/index';

export const HowItWorks = () => {
    const [ref, inView] = useInView({
        triggerOnce: true
    });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <main ref={ref} className='lg:h-screen px-4 py-20 container mx-auto'>
            <h1 className="text-gray-primary mb-4">How it works</h1>
            <h4 className="text-gray-secondary">3 easy steps to unify and streamline every customer interaction throughout your sales process.</h4>
            <div className='flex flex-col lg:flex-row  px-4 lg:px-12 py-12'>
                <div className='w-fit'>
                    <Card
                        isActive
                        controls={controls}
                        title='Add Sales Actions'
                        sub='Create an Action Panel for your sales team, by choosing from existing Actions or customize your own, from eSignatures to document collocation to e-forms.'
                        icon=''
                    />
                    <Card
                        controls={controls}
                        title='Interact with Customers'
                        sub='Streamline the sales process by texting customers Sales Actions, so they can easily and quickly review, complete and submit right from their mobile device.'
                        icon=''
                        delay={.5}
                    />
                    <Card
                        controls={controls}
                        title='Complete the Sales'
                        sub='Close the deal without any heavy lifting, automatically importing everything directly into your CRM and all other existing platforms.'
                        icon=''
                        delay={.8}
                    />
                </div>

                <div className='flex-grow'>
                    <motion.div
                        initial='hidden'
                        animate={controls}
                        variants={fadeInRight}
                        className="h-full"
                    >
                        <div className='bg-gray-disabled/30 h-full max-w-md mx-auto rounded-lg'>

                        </div>
                    </motion.div>
                </div>
            </div>

        </main>
    )
}
