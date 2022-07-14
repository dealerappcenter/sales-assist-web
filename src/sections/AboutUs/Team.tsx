import { TeamIcon } from '@components/TeamIcon';
import { Section } from '../../components/section/index';

export const AboutUsTeam: React.FC<Section<AboutUsTeamMembers>> = ({ data }) => {
    return (
        <section className='section bg-gray-primary'>
            <Section className='flex-grow container mx-auto'>
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
            </Section>
        </section>
    )
}
