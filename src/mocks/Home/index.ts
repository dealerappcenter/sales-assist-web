import hero from './home.json'
import HowItWork from './howItWorks.json';
import benefits from './Benefits.json';
import salesTeam from './SalesTeam.json';
import simplifySales from './Simplify.json';

export function getHomePageSections(): HomePageSections {
    return {
        hero,
        HowItWork,
        benefits,
        salesTeam,
        simplifySales
    }
}
