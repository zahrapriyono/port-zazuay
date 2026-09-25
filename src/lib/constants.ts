export const SITE_CONFIG = {
  title: 'Zaza — ML Engineer & Developer',
  description:
    "Portfolio of Zahra' Zakiyyah Priyono. ML Engineer, Backend Developer, and Frontend Developer.",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://zaza.dev',
} as const;

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const;

export const SPLASH_TYPING_SPEED_MS = 100;
export const SPLASH_TYPING_DELAY_MS = 500;
export const SPLASH_SCROLL_INDICATOR_DELAY_MS = 3000;
