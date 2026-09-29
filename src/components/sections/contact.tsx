'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as Falcons from 'react-icons/fa';
import * as LucideIcons from 'lucide-react';
import type { IconType } from 'react-icons';
import { contactFormSchema } from '@/lib/validators';
import { personalInfo } from '@/data/personal';
import { SectionHeading } from '@/components/ui/sectionHeading';
import { AnimateOnScroll } from '@/components/ui/animateOnScroll';
import { cn } from '@/lib/utils';
import type { ContactFormData } from '@/types';

const falcons = Falcons as unknown as Record<string, IconType>;
const lucideIcons = LucideIcons as unknown as Record<
  string,
  React.ComponentType<{ size?: number }>
>;

function SocialIcon({ name, size = 18 }: { name: string; size?: number }) {
  const Lucide = lucideIcons[name];
  if (Lucide) return <Lucide size={size} />;
  const Fa = falcons[name];
  if (Fa) return <Fa size={size} />;
  return null;
}

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
    <section
      id="contact"
      className="section-container"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
      }}
    >
      <SectionHeading tag="CONTACT" title="Let's talk" highlight="talk" />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <AnimateOnScroll direction="right">
          <p className="mb-6 text-sm opacity-80">
            Have a project, an opportunity, or just want to say hi? My inbox is
            open.
          </p>
          <div className="flex gap-4">
            {personalInfo.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target={social.url.startsWith('http') ? '_blank' : undefined}
                rel={
                  social.url.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                aria-label={social.platform}
                className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:opacity-80"
                style={{ borderColor: 'var(--background)' }}
              >
                <SocialIcon name={social.icon} />
              </a>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="left" delay={0.1}>
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
                className="w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm outline-none"
                style={{ borderColor: 'var(--background)' }}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register('email')}
                placeholder="Email"
                className="w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm outline-none"
                style={{ borderColor: 'var(--background)' }}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register('subject')}
                placeholder="Subject"
                className="w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm outline-none"
                style={{ borderColor: 'var(--background)' }}
              />
              {errors.subject && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                {...register('message')}
                placeholder="Message"
                rows={4}
                className="w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm outline-none"
                style={{ borderColor: 'var(--background)' }}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className={cn(
                'w-full rounded-lg py-2.5 text-sm font-medium transition-opacity',
                'disabled:opacity-60',
              )}
              style={{
                backgroundColor: 'var(--primary)',
                color: 'var(--primary-foreground)',
              }}
            >
              {status === 'submitting' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className="text-xs text-green-400">
                Message sent — I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-xs text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
