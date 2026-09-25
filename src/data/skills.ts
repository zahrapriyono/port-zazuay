import { Skill } from '../types';

export const skills: Skill[] = [
  // Languages
  { name: 'Python', icon: 'SiPython', category: 'language' },
  { name: 'Java', icon: 'SiOpenjdk', category: 'language' },
  { name: 'TypeScript', icon: 'SiTypescript', category: 'language' },
  { name: 'JavaScript', icon: 'SiJavascript', category: 'language' },
  { name: 'C', icon: 'SiC', category: 'language' },
  { name: 'Swift', icon: 'SiSwift', category: 'language' },

  // Frameworks
  { name: 'React', icon: 'SiReact', category: 'framework' },
  { name: 'Next.js', icon: 'SiNextdotjs', category: 'framework' },
  { name: 'FastAPI', icon: 'SiFastapi', category: 'framework' },
  { name: 'TailwindCSS', icon: 'SiTailwindcss', category: 'framework' },

  // ML/AI
  { name: 'TensorFlow', icon: 'SiTensorflow', category: 'ml-ai' },
  { name: 'PyTorch', icon: 'SiPytorch', category: 'ml-ai' },
  { name: 'Scikit-learn', icon: 'SiScikitlearn', category: 'ml-ai' },

  // Databases
  { name: 'MySQL', icon: 'SiMysql', category: 'database' },

  // Tools
  { name: 'Git', icon: 'SiGit', category: 'tool' },
  { name: 'Figma', icon: 'SiFigma', category: 'tool' },

  // Others
];

// Helper: get skills by category
export const getSkillsByCategory = (category: Skill['category']): Skill[] =>
  skills.filter((skill) => skill.category === category);
