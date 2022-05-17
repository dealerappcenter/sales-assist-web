import OurTeamData from '@src/mocks/aboutUs/ourTeam.json';
import { WorldMap } from '@src/assets';
import Image from 'next/image';

export const AboutUsOurTeam = () => {
    return (
        <section className='px-4 pt-6 lg:px-12 lg:pt-32 bg-gray-primary'>
            <div className='px-4 md:px-6 lg:px-12 flex-grow container mx-auto gap-6 flex flex-col'>
                <h1 className='text-white-normal md:text-4xl font-semibold mb-4'>{OurTeamData.title}</h1>
                <div className='w-full flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-20 text-white-normal md:h-[30rem]'>
                    <div className='w-full md:w-[30%] text-white-normal flex flex-col justify-center order-2 md:order-1'>
                        <h3 className='font-light'>
                            <b className='mr-2 text-4xl font-bold'>{OurTeamData.team.members}</b>
                            {OurTeamData.team.title}
                        </h3>
                        <h3 className='font-light'>
                            {OurTeamData.founded.title}
                            <b className='ml-2 text-4xl font-bold'>{OurTeamData.founded.year}</b>
                        </h3>
                        <h3 className='font-light'>
                            <b className='mr-2 text-4xl font-bold'>{OurTeamData.countries.countries}</b>
                            {OurTeamData.countries.title}
                        </h3>
                    </div>
                    <div className='w-full md:w-[70%] order-1 md:order-2 flex items-center'>
                        <Image src={WorldMap} alt='map'/>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center mt-6'>
                    <div className='w-[12%] rounded-full bg-orange-normal p-1'></div>
                </div>
            </div>
        </section>
    )
}
