// src/data/projectdata.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    lightSrc?: string;
  };
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
  };
  featured?: boolean;
  status?: 'completed' | 'in-progress' | 'archived';
}

export const projects: Project[] = [
  {
    id: 'ashariqa',
    title: 'AshariQA',
    description: 'my attempt at making a clone of IslamQA, built in html/css with vanilla javascript.',
    image: {
      src: '/images/ashariqa.png',
      alt: 'AshariQA',
      lightSrc: '/images/ashariqawhite.png'
    },
    technologies: ['html', 'css', 'javascript'],
    links: {
      github: 'https://github.com/ghstx9/AshariQA',
      demo: 'https://ashariqa.pages.dev/'
    },
    featured: true,
    status: 'completed'
  },
  {
    id: 'rickyastro',
    title: "Ricky's Portfolio",
    description: 'my previous portfolio website, built with astro and typescript.',
    image: {
      src: '/images/rickyastro.png',
      alt: "Ricky's Portfolio",
      lightSrc: '/images/rickyastrowhite.png'
    },
    technologies: ['astro', 'typescript', 'css'],
    links: {
      github: 'https://github.com/ghstx9/Portfolio1',
      demo: 'https://rickyastro.pages.dev/'
    },
    featured: true,
    status: 'completed'
  },
  {
    id: 'spotify-clone',
    title: 'Spotify Clone',
    description: 'my very own version of a spotify clone.',
    image: {
      src: '/images/spotify-clone.png',
      alt: 'Spotify Clone'
    },
    technologies: ['astro', 'css', 'javascript'],
    links: {
      github: 'https://github.com/ghstx9/spotify-clone',
      demo: 'https://rckyspotify.pages.dev/'
    },
    status: 'completed'
  },
  {
    id: 'tally',
    title: 'Tally Counter',
    description: 'A simple tally counter web in Astro & TypeScript.',
    image: {
      src: '/images/tallycounter.png',
      alt: 'panopticon'
    },
    technologies: ['Astro', 'TailwindCSS', 'TypeScript'],
    links: {
      github: 'https://github.com/ghstx9/tallycounter',
      demo: 'https://tallytest1.pages.dev/'
    },
    status: 'completed'
  }
];

// Helper functions
export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByStatus = (status: Project['status']) => projects.filter(p => p.status === status);
export const getProjectById = (id: string) => projects.find(p => p.id === id);