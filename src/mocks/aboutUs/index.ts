import hero from './hero.json';
import ourTeam from './ourTeam.json';
import team from './team.json';

export function getAboutUsSections(): AboutUsSections {
    return {
        hero,
        ourTeam,
        team
    }
}