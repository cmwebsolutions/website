// Every Ellveren price lives here, so a price change is a one-line edit.
// Prices are what clients pay: Ellveren isn't VAT registered.

export const gbp = (amount: number) => `£${amount.toLocaleString('en-GB')}`;

export const rates = {
    hourly: 80,
    rush: 120,
    day: 550,
    halfDay: 300,
    perIncludedHour: 75,
};

export const oneOffs = {
    takeover: 195,
    assistedMove: 120,
};

export const extraSite = {
    wordpress: 65,
    static: 30,
};

export const annualDiscountPercent = 10;

export const annualPrice = (monthly: number) => Math.round(monthly * 12 * (1 - annualDiscountPercent / 100));

export interface Plan {
    name: string;
    price: number;
    priceFrom?: boolean;
    for: string;
    hours: string;
    turnaround: string;
    minimumTerm: string;
}

export const staticPlan: Plan = {
    name: 'Static',
    price: 45,
    for: 'Static websites',
    hours: '—',
    turnaround: '3 working days',
    minimumTerm: 'None',
};

export const carePlan: Plan = {
    name: 'Care',
    price: 85,
    for: 'WordPress websites',
    hours: '—',
    turnaround: '3 working days',
    minimumTerm: 'None',
};

export const careSupportPlan: Plan = {
    name: 'Care + Support',
    price: 235,
    for: 'WordPress + regular changes',
    hours: '2 hours',
    turnaround: '2 working days',
    minimumTerm: '3 months',
};

export const careGrowthPlan: Plan = {
    name: 'Care + Growth',
    price: 385,
    for: 'WordPress + ongoing improvements',
    hours: '4 hours',
    turnaround: '2 working days',
    minimumTerm: '3 months',
};

export const retainerTiers = [
    { hours: 6, price: 535 },
    { hours: 8, price: 685 },
    { hours: 10, price: 835 },
];

export const retainerPlan: Plan = {
    name: 'Retainer',
    price: retainerTiers[0].price,
    priceFrom: true,
    for: 'Ongoing development and planned work',
    hours: '6+ hours',
    turnaround: 'Next working day',
    minimumTerm: '3 months',
};

export const plans = [staticPlan, carePlan, careSupportPlan, careGrowthPlan, retainerPlan];

export const planPrice = (plan: Plan) => `${plan.priceFrom ? 'from ' : ''}${gbp(plan.price)}/month`;

export const addOns = [
    {
        name: 'Privacy-friendly analytics',
        price: '£10/month per site',
        description: 'Privacy-friendly website stats, no cookie banner needed for it. Available on any plan',
    },
    {
        name: 'SEO & GEO audit',
        price: '£495 one-off',
        description: 'Technical crawl, keyword and backlink review, AI-search visibility check, and a prioritised fix list',
    },
    {
        name: 'SEO & GEO monthly',
        price: 'from £250/month',
        description: '3 hours of ongoing SEO and AI-search work each month, plus tools and a monthly report. More time in 3-hour blocks. Added to a plan',
    },
    {
        name: 'Server care',
        price: '£75/month',
        description: 'For sites on your own server: monthly operating system and control panel security updates, uptime and disk monitoring, and backup checks. You pay your hosting company directly',
    },
    {
        name: 'Extra WordPress site',
        price: `${gbp(extraSite.wordpress)}/month`,
        description: 'Each additional WordPress site for the same business',
    },
    {
        name: 'Extra static site',
        price: `${gbp(extraSite.static)}/month`,
        description: 'Each additional static site for the same business, on the same plan',
    },
];

export const websiteBuilds = {
    businessFrom: 3500,
    integratedFrom: 6000,
    stagedPaymentsOver: 8000,
};

export const managedPlan = {
    setup: 499,
    monthly: 249,
    minimumMonths: 12,
};

export const managedPlanFirstYear = managedPlan.setup + managedPlan.monthly * managedPlan.minimumMonths;
