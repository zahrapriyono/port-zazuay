'use client';

import { useEffect, useState } from 'react';
// import Image from 'next/image';
import { Download, ArrowRight } from 'lucide-react';
import { personalInfo } from '@/data/personal';
import { AnimateOnScroll } from '@/components/ui/animateOnScroll';

const TYPE_SPEED_MS = 80;
const DELETE_SPEED_MS = 40;
const HOLD_MS = 1500;

/**
 * NOTE: this is a new hook, not the guide's `useTypewriter` (Phase 4).
 * That hook types one string once and calls `onComplete` — it has no
 * loop/delete state, so it can't cycle through `personalInfo.roles`.
 * This is a small state machine built for that purpose specifically.
 */

function useRoleCycler(roles: string[]) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'holding' | 'deleting'>(
    'typing',
  );

  useEffect(() => {
    if (roles.length === 0) return;
    const currentRole = roles[roleIndex % roles.length];

    if (phase === 'typing') {
      if (text.length < currentRole.length) {
        const t = setTimeout(
          () => setText(currentRole.slice(0, text.length + 1)),
          TYPE_SPEED_MS,
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase('holding'), HOLD_MS);
      return () => clearTimeout(t);
    }

    if (phase === 'holding') {
      const t = setTimeout(() => setPhase('deleting'), HOLD_MS);
      return () => clearTimeout(t);
    }

    // phase === 'deleting'
    if (text.length > 0) {
      const t = setTimeout(() => setText(text.slice(0, -1)), DELETE_SPEED_MS);
      return () => clearTimeout(t);
    }

    setTimeout(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
      setPhase('typing');
    }, 0);
  }, [text, phase, roleIndex, roles]);

  return text;
}

export function Hero() {
  const roleText = useRoleCycler(personalInfo.roles);

  return (
    <section
      id="hero"
      className="section-container flex min-h-screen items-center"
    >
      <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2">
        <AnimateOnScroll direction="right">
          <p className="text-muted-foreground mb-3 text-sm font-medium">
            Hi, I&apos;m
          </p>
          <h1 className="font-display text-foreground mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            <span className="text-primary">{personalInfo.name}</span>
          </h1>
          <div className="mb-4 h-8">
            <span className="text-muted-foreground text-xl sm:text-2xl">
              {roleText}
              <span className="typewriter-cursor text-primary ml-0.5">|</span>
            </span>
          </div>
          <p className="text-muted-foreground mb-8 max-w-md text-base">
            {personalInfo.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
            >
              View My Work <ArrowRight size={16} />
            </a>
            <a
              href={personalInfo.resumeUrl}
              download
              className="text-foreground hover:bg-secondary inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-colors"
              style={{ borderColor: 'var(--border)' }}
            >
              Download CV <Download size={16} />
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="left" delay={0.15}>
          <div className="relative mx-auto aspect-square w-64 sm:w-80 lg:w-96">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  'radial-gradient(circle at 30% 30%, var(--accent), transparent 70%)',
              }}
              aria-hidden
            />
            <div className="border-card relative h-full w-full overflow-hidden rounded-full border-4 shadow-xl">
              {/* <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                fill
                sizes="(max-width: 768px) 256px, 384px"
                className="object-cover"
                priority
              /> */}
              <div className="from-secondary to-muted text-muted-foreground flex h-full w-full items-center justify-center bg-linear-to-br text-sm">
                Photo coming soon
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
