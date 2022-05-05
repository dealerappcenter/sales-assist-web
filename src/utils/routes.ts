export enum Paths {
    whySalesAssist = '/why-sales-assist',
    pricing = '/pricing',
    about = '/about-us',
}

export enum RouteNames {
    whySalesAssist = 'Why SalesAssist',
    pricing = 'Pricing',
    about = 'About us',
    qAndA = 'Q&A',
    howItWorks = 'How it works',
    Benefits = 'Benefits',
    actions = 'Actions',
    bookADemo = 'BookADemo',
    legal = 'Legal',
    policy = 'Privacy Policy',
}

export type Route = { path: string, name: string };
export type Routes = Array<Route>;

/**
 * NOTE: order is important here since this arr will be used to map all the routes in the nav;
 */
export const routes: Routes = [
    // {
    //     path: Paths.whySalesAssist,
    //     name: RouteNames.whySalesAssist
    // },
    // {
    //     path: Paths.pricing,
    //     name: RouteNames.pricing
    // },
    // {
    //     path: Paths.about,
    //     name: RouteNames.about
    // }
]


const salesAssist = {
    title: 'SalesAssist',
    links: [
        { path: '', name: RouteNames.howItWorks },
        { path: '', name: RouteNames.Benefits },
        { path: '', name: RouteNames.actions },
        { path: '', name: RouteNames.pricing },
        { path: '', name: RouteNames.qAndA },
    ]
}

const company = {
    title: 'Company',
    links: [
        { path: '', name: RouteNames.about },
        { path: '', name: RouteNames.bookADemo },
    ]
}

const contact = {
    title: 'Contact Us',
    links: [
        { path: 'mailto:', name: 'example@salesassist.io' },
        { path: 'tel:', name: '+1202020202' },
    ]
}

export const footerLinks = {
    salesAssist,
    company,
    contact,
}