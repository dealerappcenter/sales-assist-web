import hero from './home.json'
import HowItWork from './howItWorks.json';
import benefits from './Benefits.json';
import salesTeam from './SalesTeam.json';
import simplifySales from './Simplify.json';
import actions from './actions.json'
import automated from './automated.json';

export function getHomePageSections(): HomePageSections {
    return {
        hero,
        HowItWork,
        benefits,
        salesTeam,
        simplifySales,
        actions,
        automated
    }
}
