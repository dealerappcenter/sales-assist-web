import { Button, Nav } from 'src/components';
import Image from 'next/image';
import { partners, HeroImage  } from '@src/assets';
import { useResponsive } from '@hooks/useResponsive';
import { AnimatedBackGround } from '@src/animations/AnimatedBackground';
import { calendlyLink } from '@src/utils/routes';

interface HeroProps {
    heroData: Hero
}
export const Hero: React.FC<HeroProps> = ({ heroData }) => {
    const { isMobile, isDesktop, isTablet } = useResponsive();

    return (
        <header className='px-4 flex flex-col bg-white-soft lg:pb-12'>
            <Nav />
            <div className='flex-grow container mx-auto flex flex-col lg:flex-row w-full h-[65%] gap-6'>
                <div className='lg:w-[40%] lg:p-12 flex flex-col justify-center h-full order-2 lg:order-1 items-center lg:items-start'>
                    <h1 className='text-4xl lg:text-5xl lg:leading-[3.5rem] font-bold mx-auto text-gray-primary mb-6'>{heroData.title}</h1>
                    <p className='text-gray-secondary mb-6 w-full lg:w-[80%]'>{heroData.desc}</p>
                    <a href={calendlyLink} target="_blank" rel="noreferrer">
                        <Button className='lg:text-lg'>{heroData.button}</Button>
                    </a>
                </div>
                <div className='lg:w-[50%] md:px-16 px-12 flex items-center justify-center order-1 lg:order-2'>
                    <div className='w-[90%]'>
                        <AnimatedBackGround />
                    </div>
                </div>
            </div>
            <div className='h-[35%] container mx-auto flex flex-col items-center py-12'>
                <h2 className='mb-[3rem]'>Trusted by</h2>
                <div className='flex justify-evenly w-full items-center flex-wrap'>
                    {partners.map((t) => {
                        return <div key={t.id} className="p-4 w-40">
                            <Image className='m-12' alt={'trusted'} src={t.path}  />
                        </div>
                    })}
                </div>
            </div>
        </header>
    )
}
