import { TeamIcon } from '@components/TeamIcon';

export const AboutUsTeam: React.FC<Section<AboutUsTeamMembers>> = ({ data }) => {
    return (
        <section className='px-4 py-12 lg:px-12 lg:py-12 bg-gray-primary'>
            <div className='px-4 md:px-6 lg:px-12 flex-grow container mx-auto'>
                <div className='w-full flex items-center justify-center flex-col  text-white-normal'>
                    {/* first row */}
                    <div className='w-full flex flex-wrap items-start justify-center gap-2'>
                        {data.team.slice(0, 4).map((team) => <TeamIcon code={team.code} key={team.social} link={team.social} name={team.name} title={team.title}/>)}
                    </div>
                    
                    {/* first row */}
                    <div className='w-full flex flex-wrap items-start justify-center gap-2'>
                        {data.team.slice(4, data.team.length).map((team) => <TeamIcon code={team.code} key={team.social} link={team.social} name={team.name} title={team.title}/>)}
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
