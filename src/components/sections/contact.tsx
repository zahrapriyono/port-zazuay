'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ComponentType } from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { contactFormSchema } from '@/lib/validators';
import { personalInfo } from '@/data/personal';
import { SectionHeading } from '@/components/ui/sectionHeading';
import { AnimateOnScroll } from '@/components/ui/animateOnScroll';
import { cn } from '@/lib/utils';
import type { ContactFormData } from '@/types';

// Only the icons we use (personal.ts refers to them by name).
const SOCIAL_ICONS: Record<string, ComponentType<{ size?: number }>> = {
  FaGithub,
  FaLinkedin,
  Mail,
};

const fieldClass =
  'w-full rounded-xl border border-primary/30 bg-white/40 px-4 py-3 text-sm text-foreground ' +
  'placeholder:text-muted-foreground outline-none transition-colors focus:border-primary dark:bg-white/5';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-container text-foreground">
      <SectionHeading tag="CONTACT" title="Let's talk" highlight="talk" />

      <AnimateOnScroll>
        <div className="relative">
          {/* Colour behind the glass so the blur is visible */}
          <span
            aria-hidden
            className="bg-dot-soft absolute -top-8 left-2 h-32 w-32 rounded-full sm:-left-6 sm:h-44 sm:w-44"
          />
          <span
            aria-hidden
            className="bg-dot-red absolute -right-1 -bottom-10 h-28 w-28 rounded-full sm:-right-8 sm:h-40 sm:w-40"
          />

          {/* Glass block */}
          <div className="border-glass-border bg-glass relative rounded-3xl border p-6 shadow-[0_8px_40px_rgba(84,12,13,0.15)] backdrop-blur-xl sm:p-10">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div>
                <p className="mb-6 text-sm opacity-80">
                  Have a project, an opportunity, or just want to say hi? My
                  inbox is open.
                </p>

                {/* Email as a chat bubble, like the design */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="bg-highlight text-highlight-foreground relative mb-8 inline-block max-w-full rounded-3xl px-5 py-3 font-mono text-xs tracking-[0.12em] break-all uppercase transition-opacity hover:opacity-80"
                >
                  {personalInfo.email}
                  <span
                    aria-hidden
                    className="bg-highlight absolute -bottom-1 left-4 h-3 w-3 rotate-45"
                  />
                </a>

                <div className="flex gap-4">
                  {personalInfo.socials.map((social) => {
                    const Icon = SOCIAL_ICONS[social.icon];
                    const external = social.url.startsWith('http');
                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                        aria-label={social.platform}
                        className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
                      >
                        {Icon ? (
                          <Icon size={18} />
                        ) : (
                          social.platform.slice(0, 1)
                        )}
                      </a>
                    );
                  })}
                </div>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="space-y-4"
              >
                {/* Honeypot: real users never see or fill this; bots that
                                    auto-fill every input on the page will, and get silently
                                    rejected server-side (see /api/contact/route.ts). */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                  {...register('honeypot')}
                />

                <div>
                  <input
                    {...register('name')}
                    placeholder="Name"
                    aria-label="Name"
                    className={fieldClass}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register('email')}
                    placeholder="Email"
                    aria-label="Email"
                    className={fieldClass}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register('subject')}
                    placeholder="Subject"
                    aria-label="Subject"
                    className={fieldClass}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    {...register('message')}
                    placeholder="Message"
                    aria-label="Message"
                    rows={4}
                    className={fieldClass}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={cn(
                    'bg-primary text-primary-foreground w-full rounded-xl py-3 text-sm font-medium transition-opacity hover:opacity-90',
                    'disabled:opacity-60',
                  )}
                >
                  {status === 'submitting' ? 'Sending…' : 'Send message'}
                </button>

                {status === 'success' && (
                  <p className="text-xs text-green-700 dark:text-green-400">
                    Message sent — I&apos;ll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-xs text-red-600 dark:text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
