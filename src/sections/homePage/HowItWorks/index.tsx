import { motion, useAnimation, } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";

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
        <main ref={ref} className='h-screen px-4 py-20 container mx-auto'>
            <h1 className="text-gray-primary mb-4">How it works</h1>
            <h4 className="text-gray-secondary">3 easy steps to unify and streamline every customer interaction throughout your sales process.</h4>

            <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: {
                        opacity: 0,
                        x: -1000
                    },
                    visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1.5,
                        }
                    }
                }}
                className="my-6 group bg-card-normal rounded-2xl w-[27rem] h-[8.5rem] flex overflow-hidden"
            >
                <div className="h-0 w-6 group-hover:h-[10rem] bg-orange-normal duration-300 rounded-bl rounded-br" />
                <div className='flex p-2 h-full'>
                    <div className='flex px-4 justify-center p-4'>
                        <div className='h-20 w-20 rounded-full bg-orange-normal'></div>
                    </div>
                    <div className='h-full py-2'>
                        <h3 className='text-sm font-semibold text-gray-primary'> Add Sales Actions</h3>
                        <p className='text-gray-secondary text-sm'>Create an Action Panel for your sales team, by choosing from existing Actions or customize your own, from eSignatures to document collction to e-forms. </p>
                    </div>
                </div>
            </motion.div>
        </main>
    )
}
