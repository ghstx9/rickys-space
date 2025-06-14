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
      src: '/images/ashariqa.jpg',
      alt: 'AshariQA',
      lightSrc: '/images/ashariqawhite.jpg'
    },
    technologies: ['HTML', 'CSS', 'JavaScript'],
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
    description: 'My previous portfolio website, built with Astro and TypeScript.',
    image: {
      src: '/images/rickyastro.jpg',
      alt: "Ricky's Portfolio",
      lightSrc: '/images/rickyastrowhite.jpg'
    },
    technologies: ['Astro', 'TypeScript', 'CSS'],
    links: {
      github: 'https://github.com/ghstx9/Portfolio1',
      demo: 'https://rickyastro.pages.dev/'
    },
    featured: true,
    status: 'completed'
  },
  {
    id: 'weatherapp',
    title: 'React Weather App',
    description: 'A weather app built with React and JavaScript.',
    image: {
      src: '/images/weather.jpg',
      alt: 'Weather App',
      lightSrc: '/images/weatherwhite.jpg'
    },
    technologies: ['React', 'TailwindCSS', 'JavaScript'],
    links: {
      github: 'https://github.com/ghstx9/weather-app',
      demo: 'https://rickysweatherapp.pages.dev/'
    },
    status: 'completed'
  },
  {
    id: 'tally',
    title: 'Tally Counter',
    description: 'A simple tally counter web in Astro & TypeScript.',
    image: {
      src: '/images/tallycounter.jpg',
      alt: 'panopticon',
      lightSrc: '/images/tallycounterwhite.jpg'
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