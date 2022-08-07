interface Plan {
    name: string;
    desc: string;
    code: string;
    price_per_user: PricePer;
    starting_at: PricePer;
    perks: Perk[];
    features: Features;
    custom?: Custom;
    users: number
    limit?: number
}

interface Features {
    name: string;
    perks: string[];
}

interface Perk {
    name: string;
    perk: number | string;
}

interface PricePer {
    name?: string,
    year: number;
    month: number;
}
interface Custom {
    contact_us: string;
    pricing: string;
    users: string;
}


interface Industry {
    code: string,
    name: string
}
interface Section<T> {
    id?: string,
    data: T
}

type Kind = 'orange' | 'purple' | 'normal' | string

type Hero = {
    hero:    HeroClass;
    desc:    Desc;
    button:  string;
    trusted: string;
    modules: string[];
    meta: string;
}

type Desc = {
    message:     string;
    highLight:   string;
    message_end: string;
}

type HeroClass = {
    upper_message: string;
    lower_message: string;
}


type HowItWorksSection = {
    title: string;
    desc: string;
    actions: Action[];
}

type Action = {
    code: string;
    title: string;
    desc: string;
    kind: Kind;
    delay: number;
}

type BenefitsSection = {
    title: string;
    benefits: Benefit[];
}

type Benefit = {
    kind: string;
    bullet_points: BulletPoint[];
}

type BulletPoint = {
    title: string;
    desc: string;
}

interface SalesTeamSection {
    title: string;
    quotes: Quote[];
}

interface Quote {
    thoughts: string;
    author: string;
    position: string;
    url: string;
}

type SimplifySection = {
    title: string,
    cta: string
}

type Automated = {
    title:     string;
    highlight: string;
    desc:      string;
    asset:     string;
}

// home page types
type HomePageSections = {
    hero: Hero,
    HowItWork: HowItWorksSection,
    benefits: BenefitsSection,
    salesTeam: SalesTeamSection,
    simplifySales: SimplifySection,
    actions: WhySalesAssistActionsSection,
    automated: Automated
}



/** Why sales assist page types */

type WhySalesAssistHeroSection = {
    title: string;
    desc: string;
    reasons: Reason[];
}

type WhySalesAssistSalesProcessSection = {
    title: string,
    industries: Array<Industry>
}

interface WhySalesAssistActionsSection {
    title: string;
    desc: string;
    actions: SalesAction[];
}

interface WhySalesAssistSimplifySalesSection {
    title: string;
    desc: string;
    options: Options;
    show_case: ShowCase[];
}

interface Options {
    select: string;
    customize: string;
    add: string;
}

interface ShowCase {
    url: string;
    title: string;
    desc: string;
    option: string;
}



interface SalesAction {
    name: string;
    title: string;
    desc: string;
    url: null | string;
    code: string;
    delay: number
}


type Reason = {
    code: string;
    title: string;
    desc: string;
}

interface WhySalesAssistCompleteSalesFaster {
    title: string;
    reasons: Reason[];
}


interface WhySalesAssistCompleteSalesPainlessSection {
    bullet_points: Point[];
    title: string;
    banner: {
        cta: string;
        text: string;
    }
}

interface Point {
    code: string;
    title: string;
    desc: string;
}


type WhySalesAssistSections = {
    hero: WhySalesAssistHeroSection,
    salesProcess: WhySalesAssistSalesProcessSection,
    actions: WhySalesAssistActionsSection,
    simplifySales: WhySalesAssistSimplifySalesSection,
    completeSalesFaster: WhySalesAssistCompleteSalesFaster,
    completeSalesPainless: WhySalesAssistCompleteSalesPainlessSection,
    automated: Automated
}

/** about us sections */

interface AboutUsHero {
    title: string;
    desc: string;
    our_values: OurValues;
}

interface OurValues {
    name: string;
    values: Point[];
}

interface AboutUsOurTeam {
    title: string;
    desc: string;
    team: Team;
    founded: Founded;
    countries: Countries;
}
interface Countries {
    title: string;
    countries: number;
}
interface Founded {
    title: string;
    year: number;
}
interface Team {
    title: string;
    members: number;
}
interface AboutUsTeamMembers {
    team: TeamMembers[];
}

interface TeamMembers {
    name: string;
    title: string;
    social: string;
    code?: string;
}


type AboutUsSections = {
    hero: AboutUsHero,
    ourTeam: AboutUsOurTeam,
    team: AboutUsTeamMembers
}
