// Portfolio centralized data manifest
import work01Img from '../assets/images/work-01-graphic-design.jpg';
import work02Img from '../assets/images/work-02-digital-art.jpg';
import work03Img from '../assets/images/work-03-sketches.jpg';
import work04Img from '../assets/images/work-04-portraits.jpg';
import work05Img from '../assets/images/work-05-anime-art.jpg';
import work06Img from '../assets/images/work-06-devotional-art.jpg';

import proc01Img from '../assets/images/process-01-idea.jpg';
import proc02Img from '../assets/images/process-02-sketch.jpg';
import proc03Img from '../assets/images/process-03-design.jpg';
import proc04Img from '../assets/images/process-04-final-art.jpg';

export interface Artwork {
  id: string;
  index: string;
  category: string;
  title: string;
  image: string;
  year: string;
  medium: string;
  dimensions?: string;
  description: string;
  concept: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  image: string;
  description: string;
  details: string;
}

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export const featuredArtworks: Artwork[] = [
  {
    id: 'graphic-design',
    index: '01',
    category: 'Graphic\nDesign',
    title: 'Modernist Typography & Print Collage',
    image: work01Img,
    year: '2024',
    medium: 'Print Layout & Editorial Typography',
    dimensions: 'A1 Poster Series',
    description: 'A striking editorial collage of modern typography sheets, geometric letterforms, Swiss-style grids, and contrasting black-and-yellow poster layouts.',
    concept: 'Exploring the rhythm and structural weight of typefaces through layered tactile prints, brutalist geometry, and dynamic layout compositions.'
  },
  {
    id: 'digital-art',
    index: '02',
    category: 'Digital\nArt',
    title: 'Girl with Earphones — Soft Twilight Glow',
    image: work02Img,
    year: '2024',
    medium: 'Digital Painting (Procreate)',
    dimensions: '3000 × 4200 px',
    description: 'An evocative portrait of a young woman with soft brown hair and white earphones, turning slightly with an introspective expression under warm natural lighting.',
    concept: 'Capturing a fleeting, intimate moment of modern youth, quiet contemplation, and the soothing sanctuary found in music.'
  },
  {
    id: 'sketches',
    index: '03',
    category: 'Sketches',
    title: 'Anatomical Heart & Flora Illustration',
    image: work03Img,
    year: '2024',
    medium: 'Fine Liner & Graphite on Paper',
    dimensions: 'A4 (210 × 297 mm)',
    description: 'A finely stippled anatomical heart drawing from which blooming sunflowers, leafy vines, and delicate butterflies emerge in organic harmony.',
    concept: 'A symbolic representation of life, blooming resilience, emotional vitality, and the natural beauty rooted deep within human vulnerability.'
  },
  {
    id: 'portraits',
    index: '04',
    category: 'Portraits',
    title: 'Pencil Portrait in Progress — The Human Gaze',
    image: work04Img,
    year: '2024',
    medium: 'Traditional Graphite Pencil on Paper',
    dimensions: 'A3 (297 × 420 mm)',
    description: 'A realistic female portrait captured mid-creation, revealing the delicate construction lines, fine facial shading, expressive eyes, and the artist’s hand holding a pencil.',
    concept: 'Honoring the meticulous, patient craft of hand-drawn portraiture, celebrating the raw creative process as much as the finished art.'
  },
  {
    id: 'anime-art',
    index: '05',
    category: 'Anime\nArt',
    title: 'Monkey D. Luffy — Smiling Spirit',
    image: work05Img,
    year: '2024',
    medium: 'Graphite & Ink Anime Illustration',
    dimensions: 'A4 (210 × 297 mm)',
    description: 'A joyful and energetic graphite illustration of Monkey D. Luffy wearing his iconic straw hat, smiling with radiant optimism against a cloud-filled sky.',
    concept: 'Embodying boundless adventure, infectious laughter, unshakable freedom, and the spirited essence of legendary manga storytelling.'
  },
  {
    id: 'devotional-art',
    index: '06',
    category: 'Devotional\nArt',
    title: 'Sri Hanuman — Sacred Devotion & Valor',
    image: work06Img,
    year: '2024',
    medium: 'Traditional Fine Pen & Ink Artwork',
    dimensions: 'A3 (297 × 420 mm)',
    description: 'An intricately detailed pen-and-ink devotional portrait of Lord Hanuman, adorned with an ornate royal crown, sacred jewelry, and a calm, compassionate expression.',
    concept: 'Celebrating timeless courage, selfless devotion, inner fortitude, and divine grace through precise traditional cross-hatching.'
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'IDEA',
    image: proc01Img,
    description: 'Finding inspiration in everyday things.',
    details: 'Observing subtle shadows, sculptural folds, architecture, and raw organic forms to spark the initial visual thesis.'
  },
  {
    step: '02',
    title: 'SKETCH',
    image: proc02Img,
    description: 'Bringing thoughts to paper.',
    details: 'Rapid graphite roughs and structural line studies to define perspective, emotional anatomy, and compositional flow.'
  },
  {
    step: '03',
    title: 'DESIGN',
    image: proc03Img,
    description: 'Refining with color, composition & detail.',
    details: 'Balancing chiaroscuro contrast, lighting palettes, architectural depth, and celestial motifs to establish the mood.'
  },
  {
    step: '04',
    title: 'FINAL ART',
    image: proc04Img,
    description: 'The vision, realized.',
    details: 'Polishing micro-textures, metallic highlights, and final post-processing until every stroke speaks with intent.'
  }
];

export const heroData = {
  eyebrow: ['VISUAL', 'STORIES', 'BEYOND', 'WORDS'],
  headline: ['Art', 'That', 'Speaks'],
  scriptPhrase: 'Without Words.',
  paragraph: 'A creative space where illustrations, graphic design and imagination come together. Exploring emotions, ideas and stories through art.',
  primaryCta: 'Explore My Work',
  secondaryCta: 'Watch Reel',
  rightDisciplines: ['IDEAS', 'SKETCHES', 'DESIGNS', 'ARTWORKS', 'EMOTIONS', 'STORIES'],
  rightHandwrittenNotes: ['Create', 'Design', 'Illustrate', 'Express']
};

export const aboutData = {
  eyebrow: 'ABOUT ME',
  headline: 'A Creative Mind Behind CHX.ARTS',
  body: "I'm Charan, an artist and graphic designer passionate about creating visuals that connect. Through designs, illustrations and sketches, I explore stories, emotions and ideas — turning imagination into art.",
  signature: 'Charan',
  ctaText: 'More About Me',
  verticalInspirations: ['Ideas', 'Emotions', 'People', 'Culture', 'Life', 'Art'],
  expandedBio: {
    statement: "Art isn't merely an aesthetic pursuit for me; it is an instinctual language. When words fail to articulate the depth of an experience or an emotion, composition, shadow, and gold fill the silence.",
    skills: ['Graphic & Identity Design', 'Concept Art & Matte Painting', 'Hyper-realistic Pencil & Charcoal', 'Anime Character Design', 'Traditional Indian Devotional Art'],
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Procreate', 'Blender 3D', 'Staedtler Graphite & Willow Charcoal']
  }
};

export const contactData = {
  quoteOverlay: "LET'S CREATE\nSOMETHING\nAMAZING\nTOGETHER.",
  heading: 'GET IN TOUCH',
  subheading: "Feel free to reach out for collaborations, commissions or just to say hi. I'd love to hear from you!",
  email: 'chx.arts@gmail.com',
  instagramHandle: '@chx.arts',
  instagramUrl: 'https://instagram.com/chx.arts',
  scriptQuote: 'Good Art Takes Feeling Into Something Real.'
};
