import { gbp, managedPlan } from './plans';

// Enquiry options shared by /contact and the CTA form.
// slug is what /contact?interest=<slug> pre-selects
export const interests = [
    // Health check hidden for now.
    // { slug: 'health-check', label: 'Free website health check' },
    { slug: 'care', label: 'Care plan for my existing site' },
    { slug: 'new-website', label: 'A new website' },
    { slug: 'integrated', label: 'Integrated website, portal or web app' },
    { slug: 'managed', label: `Managed Website Plan: a new website for ${gbp(managedPlan.monthly)}/month` },
    { slug: 'seo', label: 'SEO & marketing' },
    { slug: 'not-sure', label: 'Not sure yet' },
];

export const budgets = ['Under £2,000', '£2,000–5,000', '£5,000–10,000', '£10,000+', 'Monthly plan only'];
