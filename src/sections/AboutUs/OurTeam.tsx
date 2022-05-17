import OurTeamData from '@src/mocks/aboutUs/ourTeam.json';

export const AboutUsOurTeam = () => {
    return (
        <section className='px-4 py-6 lg:px-12 lg:py-32 bg-gray-primary'>
            <div className='px-4 md:px-6 lg:px-12 flex-grow container mx-auto'>
                <h1 className='text-white-normal md:text-4xl font-semibold mb-4'>{OurTeamData.title}</h1>
                <div className='w-full flex gap-6 text-white-normal h-[30rem]'>
                    <div className='w-full md:w-1/2 text-white-normal flex flex-col justify-center'>
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
                    <div className='w-full md:w-1/2'>
                        map
                    </div>
                </div>
            </div>
        </section>
    )
}
