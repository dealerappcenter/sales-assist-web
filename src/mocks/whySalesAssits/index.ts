import hero from './hero.json';
import salesProcess from './salesProcess.json';
import actions from './actions.json';
import simplifySales from './simplifySales.json';
import completeSalesFaster from './completeSales.json';
import completeSalesPainless from './completeSalesPainles.json'
import automated from './automated.json';
import benefits from './benefits.json';
import howItWorks from './howItWorks.json';

export function getWhySalesAssistSections(): WhySalesAssistSections {
    return {
        hero,
        salesProcess,
        actions,
        simplifySales,
        completeSalesFaster,
        completeSalesPainless,
        automated,
        benefits,
        howItWorks
    }
}
