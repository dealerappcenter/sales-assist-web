type Plan = {
    name: string;
    code: string;
    price_per_year: string;
    price_per_month: string;
    price_per_user: string;
    perks: ({
        name: string;
        perk: string;
    } | {
        name: string;
        perk: number;
    })[];
     features: {
        name: string;
        perks: string[];
    };
}
