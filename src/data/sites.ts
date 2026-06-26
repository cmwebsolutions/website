export interface SiteImage {
    src: string;
    alt: string;
}

const colors = ['4100F5', '0FD2BB', '6C5CE7', '1B1919', 'FF6B6B', '00B894'];

export const topSites: SiteImage[] = [
    { src: `https://placehold.co/400x300/${colors[0]}/white?text=Aila+Recruitment`, alt: "Aila Recruitment website" },
    { src: `https://placehold.co/400x300/${colors[1]}/white?text=EOR+International`, alt: "EOR International website" },
    { src: `https://placehold.co/400x300/${colors[2]}/white?text=Impact+PT`, alt: "Impact Personal Training website" },
    { src: `https://placehold.co/400x300/${colors[3]}/white?text=JDC+Scaffolding`, alt: "JDC Scaffolding website" },
    { src: `https://placehold.co/400x300/${colors[4]}/white?text=Luton+Jobs`, alt: "Luton Jobs and Skills website" },
    { src: `https://placehold.co/400x300/${colors[5]}/white?text=Monster+Clearance`, alt: "Monster Clearance website" },
];

export const bottomSites: SiteImage[] = [
    { src: `https://placehold.co/400x300/${colors[5]}/white?text=SAS+Accountants`, alt: "SAS Accountants website" },
    { src: `https://placehold.co/400x300/${colors[4]}/white?text=UK+Credit+Insure`, alt: "UK Credit Insurance website" },
    { src: `https://placehold.co/400x300/${colors[3]}/white?text=Group+Promotions`, alt: "Group Promotions website" },
    { src: `https://placehold.co/400x300/${colors[2]}/white?text=Futurizm`, alt: "Futurizm website" },
    { src: `https://placehold.co/400x300/${colors[1]}/white?text=Clarion+Search`, alt: "Clarion Search website" },
    { src: `https://placehold.co/400x300/${colors[0]}/white?text=Haley+Bridge`, alt: "Haley Bridge website" },
];