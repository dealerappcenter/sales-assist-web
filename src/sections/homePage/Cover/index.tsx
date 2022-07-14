import { Button, Nav } from 'src/components';
import Image from 'next/image';
import { partners, HeroImage } from '@src/assets';
import { useResponsive } from '@hooks/useResponsive';
import { AnimatedBackGround } from '@src/animations/AnimatedBackground';
import { calendlyLink } from '@src/utils/routes';
import { Section } from '../../../components/section/index';

interface HeroProps {
    heroData: Hero
}
export const Hero: React.FC<HeroProps> = ({ heroData }) => {
    return (
        <header className='flex flex-col bg-white-soft h-full lg:px-12 pb-12'>
            <Nav />
            <Section>
                <div className='flex-grow container mx-auto flex flex-col lg:flex-row w-full gap-12'>
                    <div className='lg:w-[40%] md:pr-12 flex flex-col justify-center h-full order-2 lg:order-1 items-center lg:items-start pb-12'>
                        <h1 className='text-4xl lg:text-5xl lg:leading-[3.5rem] font-bold mx-auto text-gray-primary mb-6'>{heroData.title}</h1>
                        <p className='text-gray-secondary mb-6 w-full'>{heroData.desc}</p>
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
                <div className='h-[35%] container mx-auto flex flex-col items-center py-12 gap-6 pb-14'>
                    <h3>{heroData.trusted}</h3>
                    <div className='flex justify-center w-full items-center flex-wrap gap-12'>
                        {partners.map((t) => {
                            return <div key={t.id} className="w-40 h-20">
                                <Image alt={'trusted'} src={t.path} />
                            </div>
                        })}
                    </div>
                </div>
            </Section>
        </header>
    )
}
