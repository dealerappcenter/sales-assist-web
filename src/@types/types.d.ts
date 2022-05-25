type Plan = {
    name: string;
    code: string;
    price_per_year: string;
    price_per_month: string;
    price_per_user: string;
    perks: {
        name: string;
        perk: string;
    }[];
     features: {
        name: string;
        perks: string[];
    };
}

interface Section<T> {
    id?: string,
    data: T
}

type Kind = 'orange' | 'purple' | 'normal' | string

type Hero = {
    title:  string;
    desc:   string;
    button: string;
    trusted: string;
}

type HowItWorksSection = {
    title:   string;
    desc:    string;
    actions: Action[];
}

type Action = {
    code:  string;
    title: string;
    desc:  string;
    kind:  Kind;
    delay: number;
}

type BenefitsSection  = {
    title:    string;
    benefits: Benefit[];
}

type Benefit  = {
    kind:          string;
    bullet_points: BulletPoint[];
}

type BulletPoint  = {
    title: string;
    desc:  string;
}

interface SalesTeamSection {
    title:  string;
    quotes: Quote[];
}

interface Quote {
    thoughts: string;
    author:     string;
    position: string;
    url:      null | string;
}

type SimplifySection = {
    title: string,
    cta: string
}

type HomePageSections = {
    hero: Hero,
    HowItWork: HowItWorksSection,
    benefits: BenefitsSection,
    salesTeam: SalesTeamSection,
    simplifySales: SimplifySection
}
