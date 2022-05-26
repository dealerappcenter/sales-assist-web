export enum Paths {
    whySalesAssist = '/why-sales-assist',
    pricing = '/pricing',
    about = '/about-us',
}

export enum RouteNames {
    whySalesAssist = 'Why SalesAssist',
    pricing = 'Pricing',
    about = 'About Us',
    qAndA = 'Q&A',
    howItWorks = 'How it Works',
    Benefits = 'Benefits',
    actions = 'Actions',
    bookADemo = 'Book Demo',
    legal = 'Legal',
    policy = 'Privacy Policy',
}

export type Route = { path: string, name: string };
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

export const calendlyLink = 'https://calendly.com/salesasssit?primary_color=f1621a';

const salesAssist = {
    title: 'SalesAssist',
    links: [
        { path: '/#how-it-works', name: RouteNames.howItWorks },
        { path: '/#benefits', name: RouteNames.Benefits },
        { path: '', name: 'Use Cases' },
        { path: `${Paths.whySalesAssist}/#actions`, name: RouteNames.actions },
        { path: Paths.pricing, name: RouteNames.pricing },
        { path: `${Paths.pricing}/#Q&A`, name: RouteNames.qAndA },
    ]
}

const company = {
    title: 'Company',
    links: [
        { path: '/about-us', name: RouteNames.about },
        { path: calendlyLink, name: RouteNames.bookADemo },
    ]
}

const contact = {
    title: 'Contact Us',
    links: [
        { path: 'mailto:help@salesassist.io', name: 'help@salesassist.io' },
        { path: '#', name: '251 Little Falls Drive, Wilmington, Delaware 19808' },
    ]
}

export const footerLinks = {
    salesAssist,
    company,
    contact,
}
