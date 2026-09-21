import { Project } from './types';

import imageStreetCouture from './assets/images/street_couture_maboneng_1784717507856.jpg';
import imageJoburgWedding from './assets/images/joburg_wedding_editorial_1785698386628.jpg';
import imageBrandActivation from './assets/images/smartphone_activation_campaign_1784717905366.jpg';
import imageJoburgFamily from './assets/images/joburg_family_contemporary_1785698464551.jpg';
import imageJoburgLifestyle from './assets/images/joburg_lifestyle_maboneng_1785698449438.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'street-couture-exhibit',
    title: 'Street Couture and Nightfall',
    category: 'Street Couture and Nightfall',
    year: '2026',
    image: imageStreetCouture,
    description: "Celebrating you — personality, style, and raw detail. From art-directed portraiture to direct-flash nightfall.",
    layoutType: 'overlapping',
    museumNumber: 'CATEGORY 01',
    location: 'Braamfontein & Maboneng • Johannesburg',
    credits: 'Creative Direction & Photography: eko PHTGRPHY',
    medium: 'High-Contrast Nightfall • Direct Flash & Ambient Luminescence',
    aspectRatio: '16/9'
  },
  {
    id: 'weddings-exhibit',
    title: 'Weddings & celebrations',
    category: 'Weddings & celebrations',
    year: '2026',
    image: imageJoburgWedding,
    description: "The big moments, the quiet glances, and everything in between. Unfolding emotion and laughter, documented as they happen.",
    layoutType: 'full',
    museumNumber: 'CATEGORY 02',
    location: 'Rosebank & Sandton • South Africa',
    credits: 'Creative Direction: eko PHTGRPHY',
    medium: 'Medium Format Editorial • Authentic Unfolding Light',
    aspectRatio: '3/4'
  },
  {
    id: 'brand-activation-exhibit',
    title: 'BRAND & PRODUCT IMAGERY',
    category: 'BRAND & PRODUCT IMAGERY',
    year: '2026',
    image: imageBrandActivation,
    description: "Striking, purposeful imagery that articulates your vision, elevates your product, and commands attention.",
    layoutType: 'asymmetric-right',
    museumNumber: 'CATEGORY 03',
    location: 'Johannesburg • Commercial & Spatial Sets',
    credits: 'Art Direction & Commercial Photography: eko PHTGRPHY',
    medium: 'High Dynamic Architectural • Commercial Purposeful Illumination',
    aspectRatio: '16/9'
  },
  {
    id: 'family-exhibit',
    title: 'Family & Little ones',
    category: 'Family & Little ones',
    year: '2026',
    image: imageJoburgFamily,
    description: "Tiny toes, cheeky smiles, and the beautiful chaos of real life. The fleeting details you’ll treasure forever.",
    layoutType: 'asymmetric-left',
    museumNumber: 'CATEGORY 04',
    location: 'Westcliff • Johannesburg',
    credits: 'Photography: eko PHTGRPHY',
    medium: 'Natural Daylight Lofts • Organic Emotive Textures',
    aspectRatio: '4/3'
  },
  {
    id: 'lifestyle-exhibit',
    title: 'Lifestyle',
    category: 'Lifestyle',
    year: '2026',
    image: imageJoburgLifestyle,
    description: "Exceptional spaces, destinations, and the finer textures of life. Architecture, hospitality, and atmosphere brought vividly to light.",
    layoutType: 'overlapping',
    museumNumber: 'CATEGORY 05',
    location: 'Maboneng Precinct & Destinations • South Africa',
    credits: 'Spatial Curation & Photography: eko PHTGRPHY',
    medium: '35mm Fine Grain • Architectural Daylight',
    aspectRatio: '21/9'
  }
];
