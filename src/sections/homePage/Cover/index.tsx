import { Button, Nav } from 'src/components';
import Image from 'next/image';
import { Toyota, Saleor, HeroImage  } from '@src/assets';
import { AnimatedHero } from '@src/animations/AnimatedHero';
import { useResponsive } from '@hooks/useResponsive';
const trusted = [
    Toyota,
    Saleor,
    Toyota,
    Saleor
]



export const Hero = () => {
    const { isMobile, isDesktop, isTablet } = useResponsive();

    return (
        <header className='px-4 flex flex-col bg-white-soft lg:pb-12'>
            <Nav />
            <div className='flex-grow container mx-auto flex flex-col lg:flex-row w-full h-[65%] gap-6'>
                <div className='lg:w-[40%] lg:p-12 flex flex-col justify-center h-full order-2 lg:order-1 items-center lg:items-start'>
                    <h1 className='text-4xl lg:text-5xl lg:leading-[3.5rem] font-bold mx-auto text-gray-primary mb-6'>The Sales Completion Platform</h1>
                    <p className='text-gray-secondary mb-6 w-full lg:w-[80%]'>An easier, faster way to complete the entire sales process with mobile-first eSignatures, document collection, ID verification, e-forms, payment and much more.</p>
                    <a href="https://calendly.com/salesasssit?primary_color=f1621a" target="_blank" rel="noreferrer">
                        <Button className='lg:text-lg'>See what we’re building - Book Demo!</Button>
                    </a>
                </div>
                <div className='lg:w-[50%] md:px-16 px-12 flex items-center justify-center order-1 lg:order-2'>
                    <div className='w-[90%]'>
                        {isDesktop && <AnimatedHero />}
                        {(isMobile || isTablet) && <Image src={HeroImage} alt='' />}
                    </div>
                </div>
            </div>
            <div className='h-[35%] container mx-auto flex flex-col items-center py-12'>
                <h2 className='mb-[3rem]'>Trusted by</h2>
                <div className='flex justify-evenly w-full items-center flex-wrap'>
                    {trusted.map((t) => {
                        return <div key={Date.now() * Math.random()} className="p-4">
                            <Image className='m-12' alt={'trusted'} src={t}  />
                        </div>
                    })}
                </div>
            </div>
        </header>
    )
}
