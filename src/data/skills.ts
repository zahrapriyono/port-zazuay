import { Skill } from '../types';

export const skills: Skill[] = [
  // Languages
  { name: 'Python', icon: 'SiPython', category: 'language', color: '#3776AB' },
  { name: 'Java', icon: 'FaJava', category: 'language', color: '#5382A1' },
  { name: 'C', icon: 'SiC', category: 'language', color: '#5C6BC0' },
  {
    name: 'TypeScript',
    icon: 'SiTypescript',
    category: 'language',
    color: '#3178C6',
  },
  {
    name: 'JavaScript',
    icon: 'SiJavascript',
    category: 'language',
    color: '#E6B800',
  },
  { name: 'Swift', icon: 'SiSwift', category: 'language', color: '#F05138' },
  { name: 'HTML', icon: 'SiHtml5', category: 'language', color: '#E34F26' },
  { name: 'CSS', icon: 'SiCss', category: 'language', color: '#1572B6' },

  // Frameworks
  { name: 'React', icon: 'SiReact', category: 'framework', color: '#149ECA' },
  {
    name: 'Next.js',
    icon: 'SiNextdotjs',
    category: 'framework',
    color: '#000000',
  },
  {
    name: 'FastAPI',
    icon: 'SiFastapi',
    category: 'framework',
    color: '#009688',
  },
  {
    name: 'TailwindCSS',
    icon: 'SiTailwindcss',
    category: 'framework',
    color: '#06B6D4',
  },

  // ML/AI
  {
    name: 'TensorFlow',
    icon: 'SiTensorflow',
    category: 'ml-ai',
    color: '#FF6F00',
  },
  { name: 'PyTorch', icon: 'SiPytorch', category: 'ml-ai', color: '#EE4C2C' },
  {
    name: 'Scikit-learn',
    icon: 'SiScikitlearn',
    category: 'ml-ai',
    color: '#F7931E',
  },

  // Databases
  { name: 'MySQL', icon: 'SiMysql', category: 'database', color: '#4479A1' },

  // Tools
  { name: 'Git', icon: 'SiGit', category: 'tool', color: '#F05032' },
  { name: 'Figma', icon: 'SiFigma', category: 'tool', color: '#F24E1E' },
];

// Helper: get skills by category
export const getSkillsByCategory = (category: Skill['category']): Skill[] =>
  skills.filter((skill) => skill.category === category);
