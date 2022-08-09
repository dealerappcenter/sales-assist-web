import { Button, Nav } from 'src/components';
import Image from 'next/image';
import { partners, HeroImage } from '@src/assets';
import { calendlyLink } from '@src/utils/routes';
import { Section } from '@components/section';
import { useState, useEffect, useRef} from 'react';

interface HeroProps {
    heroData: Hero
}
export const Hero: React.FC<HeroProps> = ({ heroData }) => {
    const [currentModule, setCurrentModule] = useState(0);
    const divRef = useRef<HTMLDivElement | null>();

    useEffect(() => { 
        const time = setTimeout(() => {
            if (currentModule === (heroData.modules.length - 1)) {
                setCurrentModule(0)
                divRef.current?.scrollTo(0, 0)
            } else {
                divRef.current?.scrollTo(0, (divRef.current?.children[currentModule] as any).offsetTop)
                setCurrentModule(currentModule + 1)
            }
            clearTimeout(time)
        }, 2000);

        return () => {
            clearTimeout(time);
        }
    }, [currentModule, heroData.modules]);


    return (
        <header className='flex flex-col bg-white-soft h-full lg:px-12 pb-12'>
            <Nav />
            <Section className='container mx-auto'>
                <div className='flex items-center justify-center flex-col gap-6'>
                    <div className='flex flex-col items-center gap-2 py-6'>
                        <h1 className='text-4xl md:text-6xl lg:text-7xl'>{heroData.hero.upper_message}</h1>
                        <div ref={el => divRef.current = el} className='text-center overflow-hidden overflow-y-scroll gap-6 flex flex-col h-[40px] md:h-[65px] lg:h-[80px] w-full slices'>
                            {heroData.modules.map((m, i) => <h1 key={m} className='text-orange-normal text-4xl md:text-6xl lg:text-7xl slice'>{m}</h1>)}
                        </div>
                        <h1 className='text-4xl md:text-6xl lg:text-7xl'>{heroData.hero.lower_message}</h1>
                    </div>

                    <div className='max-w-4xl'>
                        <p className='text-gray-secondary text-justify'>
                            {heroData.desc.message}{' '}
                            <span className='font-bold underline underline-offset-2 decoration-orange-normal'>{heroData.desc.highLight}</span>{' '}
                            {heroData.desc.message_end}
                        </p>
                    </div>
                    <a href={calendlyLink} target="_blank" rel="noreferrer">
                            <Button className='font-light'>{heroData.button}</Button>
                        </a>

                    <div className='pt-10 items-center flex flex-col'>
                        <h3 className='pb-12 font-normal'>{heroData.trusted}</h3>
                        <div className='flex justify-center w-full items-center flex-wrap gap-12 lg:gap-24'>
                            {partners.map((t) => {
                                return <div key={t.id} className="w-40 h-20 flex items-center">
                                    <Image alt={'trusted'} src={t.path} />
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </Section>
        </header>
    )
}
