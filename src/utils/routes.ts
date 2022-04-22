export enum Paths {
    whySalesAssist = '/why-sales-assist',
    pricing = '/pricing',
    about = '/about-us',
}

export enum RouteNames {
    whySalesAssist = 'Why SalesAssist',
    pricing = 'Pricing',
    about = 'About us',
}

export type Route = { path: string, name: string};
export type Routes = Array<Route>;

/**
 * NOTE: order is important here since this arr will be used to map all the routes in the nav;
 */
export const routes: Routes = [
    {
        path: Paths.whySalesAssist,
        name: RouteNames.whySalesAssist
    },
    {
        path: Paths.pricing,
        name: RouteNames.pricing
    },
    {
        path: Paths.about,
        name: RouteNames.about
    }
]