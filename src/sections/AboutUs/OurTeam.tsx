import { WorldMap } from '@src/assets';
import Image from 'next/image';
import { useResponsive } from '@hooks/useResponsive';
import { AnimatedWorldMap } from '../../animations/WorldMap/index';
import { Section } from '@src/components/section';

export const AboutUsOurTeam: React.FC<Section<AboutUsOurTeam>> = ({ data }) => {
    const { isDesktop, isMobile, isTablet } = useResponsive();
    return (
        <section className='section bg-gray-primary'>
            <Section className='flex-grow gap-6 flex flex-col'>
                <h1 className='text-white-normal md:text-4xl font-semibold mb-4'>{data.title}</h1>
                <h4 className='text-gray-secondary md:text-xl mb-4'>{data.desc}</h4>
                <div className='w-full flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-20 text-white-normal md:h-[30rem]'>
                    <div className='w-full md:w-[30%] text-white-normal flex flex-col justify-center order-2 md:order-1'>
                        <h3 className='font-light'>
                            <b className='mr-2 text-4xl font-bold'>{data.team.members}</b>
                            {data.team.title}
                        </h3>
                        <h3 className='font-light'>
                            {data.founded.title}
                            <b className='ml-2 text-4xl font-bold'>{data.founded.year}</b>
                        </h3>
                        <h3 className='font-light'>
                            <b className='mr-2 text-4xl font-bold'>{data.countries.countries}</b>
                            {data.countries.title}
                        </h3>
                    </div>
                    <div className='w-full md:w-[70%] order-1 md:order-2 flex items-center'>
                        {(isMobile || isTablet) && <Image src={WorldMap} alt='map'/>}
                        {isDesktop && <AnimatedWorldMap /> }
                    </div>
                </div>
                <div className='w-full flex items-center justify-center mt-6'>
                    <div className='w-[20%] md:w-[12%] rounded-full bg-orange-normal p-1'></div>
                </div>
            </Section>
        </section>
    )
}
