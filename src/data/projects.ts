export interface Project {
    title: string;
    description: string;
    label: string;
    gradient: number;
    image?: string;
    partner?: { name: string; url: string };
}

export const projects: Project[] = [
    {
        title: "Aila Recruitment",
        description: "A custom-designed recruitment website with integrated job listings. Roles are synced directly from their platform and can be posted manually or updated automatically — keeping candidates informed without extra effort.",
        label: "Recruitment",
        gradient: 1,
        image: "/projects/ailarecruitment.webp",
    },
    {
        title: "EOR International",
        description: "A clean, professional corporate website built to the client's brief. Designed from scratch with a clear focus on their international brand presence.",
        label: "Corporate",
        gradient: 2,
        image: "/projects/eorinternational.webp",
    },
    {
        title: "Impact Personal Training",
        description: "Full redesign of the client's existing site with integrated third-party booking and enquiry forms, tailored to their fitness brand and client experience.",
        label: "Fitness",
        gradient: 3,
        image: "/projects/impactpt.webp",
    },
    {
        title: "JDC Scaffolding",
        description: "Modern redesign of their existing site with a staff document portal, project portfolio, and integrated quote request forms. A cleaner, more professional online presence for their scaffolding business.",
        label: "Trade",
        gradient: 4,
        image: "/projects/jdcscaffolding.webp",
    },
    {
        title: "Luton Jobs and Skills",
        description: "A jobs and skills platform built in partnership with Mary Seacole Housing Association, featuring a custom AI-powered career assistant that creates personalised work and training plans via an integrated chat interface.",
        label: "Recruitment",
        gradient: 5,
        image: "/projects/lutonjobsandskills.webp",
        partner: { name: "Mary Seacole Housing Association", url: "https://maryseacoleha.com" },
    },
    {
        title: "SAS Accountants",
        description: "Rebuilt from the ground up with an intuitive Gutenberg editor, replacing a rigid ACF-based site that was difficult to manage. Designed for the client to easily update their service pages and accounting content.",
        label: "Finance",
        gradient: 6,
        image: "/projects/sasaccountants.webp",
    },
    {
        title: "SAS Micro",
        description: "Rebuilt alongside their main site with the same Gutenberg approach — redesigned content and layout tailored to their micro-business accounting services, now easy for the client to manage themselves.",
        label: "Finance",
        gradient: 1,
        image: "/projects/sasmicro.webp",
    },
    {
        title: "SAS Funding",
        description: "Rebuilt with the same Gutenberg-first approach. A redesigned site for their funding advisory brand with custom layout and content, giving the client full control over updates.",
        label: "Finance",
        gradient: 2,
        image: "/projects/sasfunding.webp",
    },
    {
        title: "SAS Tax",
        description: "Rebuilt alongside their other brands with a consistent Gutenberg framework. Tax-specific content and layout, redesigned and made manageable for the client.",
        label: "Finance",
        gradient: 3,
        image: "/projects/sastax.webp",
    },
    {
        title: "Select Tax And Accounts",
        description: "Migrated from their previous platform to WordPress with a clean design, now hosted and managed on our servers.",
        label: "Finance",
        gradient: 4,
        image: "/projects/selecttaxandaccounts.webp",
    },
    {
        title: "UK Credit Insurance",
        description: "A custom-designed, SEO-focused site consolidating three legacy brands into one. Built to support Google Ads campaigns with a clear site structure optimised for conversions.",
        label: "Finance",
        gradient: 5,
        image: "/projects/ukcreditinsurance.webp",
    },
    {
        title: "Group Promotions",
        description: "Rebuilt from their old website with a modern design, now supported by our ongoing maintenance and hosting.",
        label: "Marketing",
        gradient: 6,
        image: "/projects/grouppromotions.webp",
    },
    {
        title: "Futurizm",
        description: "A tech startup website showcasing innovative products, company vision, and investor information.",
        label: "Startup",
        gradient: 1,
        partner: { name: "Jane Kisnica", url: "https://www.janekisnica.com" },
    },
    {
        title: "Clarion Search",
        description: "Developed from Jane Kisnica's designs with a custom job listing area, bringing together strong visuals and practical recruitment functionality.",
        label: "Recruitment",
        gradient: 2,
        image: "/projects/clarionsearch.webp",
        partner: { name: "Jane Kisnica", url: "https://www.janekisnica.com" },
    },
    {
        title: "Haley Bridge",
        description: "Custom-designed site with a live job listing area that syncs with their platform. Jobs can be added, updated or removed from their own system without touching the website admin.",
        label: "Professional Services",
        gradient: 3,
        image: "/projects/haleybridge.webp",
    },
    {
        title: "Monster Clearance",
        description: "A fast, static site with a headless form integration — lightweight, performant, and purpose-built for their clearance business.",
        label: "Trade",
        gradient: 4,
        image: "/projects/monsterclearance.webp",
    },
    {
        title: "29homes",
        description: "Custom child theme with a specialised property listing page. Features a frontend bill toggle to display prices with or without bills included — a tailored solution for their lettings business.",
        label: "Real Estate",
        gradient: 5,
        image: "/projects/29homes.webp",
    },
    {
        title: "Bijoux Brows",
        description: "A custom ecommerce and membership site with LMS course delivery and event ticketing — built from the ground up to the client's spec.",
        label: "Fashion",
        gradient: 6,
        image: "/projects/bijouxbrows.webp",
    },
    {
        title: "Luton Supporting You",
        description: "Designed and built in partnership with Mary Seacole Housing Association. Custom post types for service listings with an integrated chatbot to help people find the support they need.",
        label: "Local Support",
        gradient: 1,
        image: "/projects/lutonsupportingyou.webp",
        partner: { name: "Mary Seacole Housing Association", url: "https://maryseacoleha.com" },
    },
    {
        title: "Yoga for Wellbeing",
        description: "A straightforward website build for a yoga instructor, designed to showcase their classes, philosophy and contact information.",
        label: "Wellness",
        gradient: 2,
        image: "/projects/yogaforwellbeing.webp",
    },
    {
        title: "KM4 HR",
        description: "Originally built as a multi-site with a custom integration to their recruitment software, syncing jobs across their brands. Now a streamlined brochure site, but built on foundations ready to scale back up when needed.",
        label: "Human Resources Recruitment",
        gradient: 3,
        image: "/projects/km4hr.webp",
    },
    {
        title: "Jane Kisnica",
        description: "A clean portfolio website for a graphic designer, built to showcase their creative work with a focus on visuals and easy navigation.",
        label: "Graphic Designer",
        gradient: 4,
        image: "/projects/janekisnica.webp",
    },
    {
        title: "Halny Tech Consulting",
        description: "A professional consulting site built to communicate expertise, services and pricing for a tech consultancy.",
        label: "Tech Consulting",
        gradient: 6,
        image: "/projects/halnytechconsulting.webp",
    },
    {
        title: "KM4 Group",
        description: "A static company holding website that sits above the KM4 HR brand. Built as a lightweight corporate presence for the wider group.",
        label: "Group Marketing",
        gradient: 5,
        image: "/projects/km4recruitmentgroup.webp",
    },
    {
        title: "DJ Carr",
        description: "Custom-designed website for DJ Carr, a Bedfordshire-based wedding and events DJ, showcasing packages, optional extras, and a modern live-mixing service across London and the South of England. ",
        label: "DJ Services",
        gradient: 1,
        image: "/projects/djcarr.webp",
    },
    {
        title: "Blackbridge Advisory",
        description: "Custom static website build for Blackbridge Advisory, created to the client’s specifications—presenting independent, confidential director support, clarifying financial difficulty options, and promoting their core “90‑Minute Call” service.",
        label: "Business Advisory",
        gradient: 2,
        image: "/projects/blackbridgeadvisory.webp",
    }
];