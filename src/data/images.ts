// Every photo on the site lives here, so swapping a placeholder is a one-line edit.
// Current photos are Unsplash placeholders (free licence); credits in src/assets/images/CREDITS.md.

import type { ImageMetadata } from 'astro';
import websitesBusiness from '../assets/images/websites-business.jpg';
import websitesIntegrated from '../assets/images/websites-integrated.jpg';
import websitesPortals from '../assets/images/websites-portals.jpg';
import websitesProcess from '../assets/images/websites-process.jpg';
import plansCare from '../assets/images/plans-care.jpg';
import routeExisting from '../assets/images/route-existing.jpg';
import routeNew from '../assets/images/route-new.jpg';
import routeMore from '../assets/images/route-more.jpg';
import whyEllveren from '../assets/images/why-ellveren.jpg';
import servicesCare from '../assets/images/services-care.jpg';
import servicesWebsites from '../assets/images/services-websites.jpg';
import aboutStory from '../assets/images/about-story.jpg';

export interface Photo {
    src: ImageMetadata;
    alt: string;
}

export const photos = {
    websitesBusiness: { src: websitesBusiness, alt: 'Two desktop monitors on a wooden desk by a window, showing website layouts' },
    websitesIntegrated: { src: websitesIntegrated, alt: 'Abstract blue network of connected lines and dots' },
    websitesPortals: { src: websitesPortals, alt: 'Laptop and phone showing a dark control-panel dashboard' },
    websitesProcess: { src: websitesProcess, alt: 'Hand sketching website wireframes on paper' },
    plansCare: { src: plansCare, alt: 'Corridor between rows of server cabinets, lit in blue' },
    routeExisting: { src: routeExisting, alt: 'Laptop showing code on a desk in soft afternoon light' },
    routeNew: { src: routeNew, alt: 'Tablet showing a website wireframe on a desk beside a laptop' },
    routeMore: { src: routeMore, alt: 'Desk at night with a code editor on a monitor and a dashboard on a laptop' },
    whyEllveren: { src: whyEllveren, alt: 'Desk with monitors and a laptop in warm evening light' },
    servicesCare: { src: servicesCare, alt: 'Blue network cables plugged into a server rack' },
    servicesWebsites: { src: servicesWebsites, alt: 'Laptop, phone and tablet on a desk showing the same app' },
    aboutStory: { src: aboutStory, alt: 'Tidy white desk with a monitor, lamp and plants' },
} satisfies Record<string, Photo>;
