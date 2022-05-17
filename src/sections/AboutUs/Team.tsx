import TeamData from '@src/mocks/aboutUs/team.json';

export const AboutUsTeam = () => {
    return (
        <section className='px-4 py-6 lg:px-12 lg:py-12 bg-gray-primary'>
            <div className='px-4 md:px-6 lg:px-12 flex-grow container mx-auto'>
                <div className='w-full flex flex-col md:flex-row gap-6 text-white-normal md:h-[30rem]'>
                    <div className='w-full md:w-1/2 text-white-normal flex flex-col justify-center order-2 md:order-1'>
                        
                    </div>
                    <div className='w-full md:w-1/2 order-1 md:order-2'>
                    </div>
                </div>
            </div>
        </section>
    )
}
