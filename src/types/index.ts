// ===== Personal Info =====
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  nickname: string;
  fullName: string;
  tagline: string;
  bio: string;
  roles: string[];
  email: string;
  location: string;
  resumeUrl: string;
  profileImage: string;
  socials: SocialLink[];
}

// ===== Skills =====
export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
  color: string; // brand colour (hex)
}

export type SkillCategory =
  'language' | 'framework' | 'ml-ai' | 'database' | 'tool' | 'other';

// ===== Projects =====
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail?: string;
  techStack: string[];
  category: ProjectCategory;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  date: string; // YYYY-MM format
}

export type ProjectCategory = 'ml' | 'backend' | 'frontend' | 'fullstack';

// ===== Experience =====
export interface Experience {
  id: string;
  title: string;
  organization: string;
  description: string;
  bullets: string[];
  startDate: string;
  endDate: string | 'Present';
  type: ExperienceType;
  logo?: string;
  photos?: string[]; // optional photos for the polaroid card
}

export type ExperienceType = 'professional' | 'organizational' | 'volunteer';

// ===== Education =====
export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string | 'Present';
  gpa?: string;
  logo?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  logo?: string;
}

// ===== Contact Form =====
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string; // bot trap
}
