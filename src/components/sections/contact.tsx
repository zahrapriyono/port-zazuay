'use client';

import type { ComponentType } from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '@/data/personal';
import { BracketHeading } from '@/components/ui/bracketHeading';
import { AnimateOnScroll } from '@/components/ui/animateOnScroll';

const SOCIAL_ICONS: Record<string, ComponentType<{ size?: number }>> = {
  FaGithub,
  FaLinkedin,
  Mail,
};

const SOCIAL_LABELS: Record<string, string> = {
  GitHub: 'zahrapriyono',
  LinkedIn: 'zahrapriyono',
  Email: personalInfo.email,
}

export function Contact() {
   return (
    <section id="contact" className="section-container text-foreground">

      {/* Heading in bracket style like Experience */}
      <BracketHeading title="CONTACT ME" />

      <AnimateOnScroll>
        <div className="relative">
          <span
            aria-hidden
            className="bg-dot-soft absolute -top-8 left-2 h-32 w-32 rounded-full sm:-left-6 sm:h-44 sm:w-44"
          />
          <span
            aria-hidden
            className="bg-dot-red absolute -right-1 -bottom-10 h-28 w-28 rounded-full sm:-right-8 sm:h-40 sm:w-40"
          />

          <div className="border-glass-border bg-glass relative rounded-3xl border p-6 shadow-[0_8px_40px_rgba(84,12,13,0.15)] backdrop-blur-xl sm:p-10">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

              {/* Left — "Let's connect!" bubble, like I'm texting */}
              <div className="flex flex-col justify-center">
                <div className="relative inline-block w-fit">
                  <div className="bg-highlight text-highlight-foreground rounded-3xl rounded-bl-sm px-5 py-3 font-mono text-sm tracking-wide">
                    Let&apos;s connect!
                  </div>
                  {/* Tail on bottom-left to look like outgoing message */}
                  <span
                    aria-hidden
                    className="bg-highlight absolute -bottom-1 left-4 h-3 w-3 rotate-45"
                  />
                </div>
              </div>

              {/* Right — social bubbles */}
              <div className="flex flex-col gap-4">
                {personalInfo.socials.map((social) => {
                  const Icon = SOCIAL_ICONS[social.icon];
                  const label = SOCIAL_LABELS[social.platform] ?? social.platform;
                  const external = social.url.startsWith('http');

                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      aria-label={social.platform}
                      className="bg-highlight text-highlight-foreground relative inline-flex w-fit items-center gap-3 rounded-3xl px-5 py-3 font-mono text-xs tracking-[0.12em] transition-opacity hover:opacity-80"
                    >
                      {Icon && <Icon size={16} />}
                      {label}
                      <span
                        aria-hidden
                        className="bg-highlight absolute -bottom-1 left-4 h-3 w-3 rotate-45"
                      />
                    </a>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
