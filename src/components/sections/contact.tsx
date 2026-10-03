'use client';

// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
import type { ComponentType } from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { contactFormSchema } from '@/lib/validators';
import { personalInfo } from '@/data/personal';
import { SectionHeading } from '@/components/ui/sectionHeading';
import { AnimateOnScroll } from '@/components/ui/animateOnScroll';
// import { cn } from '@/lib/utils';
// import type { ContactFormData } from '@/types';

// Only the icons we use (personal.ts refers to them by name).
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

// const fieldClass =
//   'w-full rounded-xl border border-primary/30 bg-white/40 px-4 py-3 text-sm text-foreground ' +
//   'placeholder:text-muted-foreground outline-none transition-colors focus:border-primary dark:bg-white/5';

// type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  // const [status, setStatus] = useState<FormStatus>('idle');
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm<ContactFormData>({
  //   resolver: zodResolver(contactFormSchema),
  // });

  // const onSubmit = async (data: ContactFormData) => {
  //   setStatus('submitting');
  //   try {
  //     const res = await fetch('/api/contact', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(data),
  //     });
  //     if (!res.ok) throw new Error('Request failed');
  //     setStatus('success');
  //     reset();
  //   } catch {
  //     setStatus('error');
  //   }
  // };

  return (
    <section id="contact" className="section-container text-foreground">
      <SectionHeading tag="CONTACT" title="Let's talk" highlight="talk" />

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
            <p className="mb-8 max-w-md text-sm opacity-80">
              Have a project, an opportunity, or just want to say hi? My inbox is open.
            </p>

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
      </AnimateOnScroll>
    </section>
  );
}
