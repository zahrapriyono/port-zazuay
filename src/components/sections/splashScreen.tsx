'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { ScrollIndicator } from '@/components/ui/scrollIndicator';
import { FolderIcon } from '@/components/ui/folderIcon';
import { SelectionFrame } from '@/components/ui/selectionFrame';
import { personalInfo } from '@/data/personal';
import {
  SPLASH_TYPING_SPEED_MS,
  SPLASH_TYPING_DELAY_MS,
  SPLASH_SCROLL_INDICATOR_DELAY_MS,
} from '@/lib/constants';

// Decorative dots: [top%, left%, size classes]
const DOTS: Array<[string, string, string]> = [
  ['5%', '15%', 'h-9 w-9 sm:h-14 sm:w-14'],
  ['20%', '46%', 'h-8 w-8 sm:h-12 sm:w-12'],
  ['88%', '19%', 'h-9 w-9 sm:h-14 sm:w-14'],
  ['85%', '40%', 'h-8 w-8 sm:h-12 sm:w-12'],
];

export function SplashScreen() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  const { displayText } = useTypewriter({
    text: personalInfo.fullName,
    speed: SPLASH_TYPING_SPEED_MS,
    delay: SPLASH_TYPING_DELAY_MS,
    onComplete: () => {
      setTimeout(
        () => setShowScrollIndicator(true),
        SPLASH_SCROLL_INDICATOR_DELAY_MS - 1000,
      );
    },
  });

  return (
    <section className="bg-background relative flex min-h-screen items-center overflow-hidden">
      {/* Decorative dots */}
      {DOTS.map(([top, left, size]) => (
        <span
          key={`${top}-${left}`}
          aria-hidden
          className={`absolute rounded-full ${size}`}
          style={{ top, left, backgroundColor: 'var(--splash-dot)' }}
        />
      ))}

      {/* Folder icons */}
      <FolderIcon className="animate-windblown-1 absolute top-[14%] left-[30%] hidden w-20 sm:block sm:w-28" />
      <FolderIcon className="animate-windblown-2 absolute bottom-[14%] left-[4%] w-16 sm:w-24" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-24 pb-24 md:grid-cols-2 md:pt-0 lg:px-12">
        {/* Left: title block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center md:items-start"
        >
          {/* Context-menu bubble */}
          <div className="bg-bubble text-bubble-foreground relative mb-6 ml-0 flex overflow-visible rounded-xl text-xs shadow-lg md:ml-40">
            {['Cut', 'Copy', 'Paste', 'Replace… ▸'].map((label, i) => (
              <span
                key={label}
                className={`px-3 py-2 ${i > 0 ? 'border-border border-l' : ''}`}
              >
                {label}
              </span>
            ))}
            <span
              aria-hidden
              className="bg-bubble absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45"
            />
          </div>

          <h1 className="font-display text-primary text-6xl leading-none font-medium tracking-[-0.06em] sm:text-8xl lg:text-9xl">
            PORTFOLIO
          </h1>

          {/* Typed name inside a "selected text box" frame */}
          <SelectionFrame className="mt-5 px-8 py-3">
            <span className="text-primary font-mono text-lg tracking-tight sm:text-2xl">
              {displayText}
            </span>
            <span className="typewriter-cursor text-primary ml-0.5 font-mono">
              |
            </span>
          </SelectionFrame>

          <a
            href={personalInfo.resumeUrl}
            download
            className="border-border bg-card text-primary mt-10 inline-flex items-center gap-6 rounded-full border px-6 py-1.5 font-mono text-xs tracking-[0.3em] uppercase shadow-sm transition-transform hover:-translate-y-0.5 md:ml-24"
          >
            Download CV
            <span className="bg-primary text-primary-foreground flex h-5 w-5 items-center justify-center rounded-full">
              <ArrowDown size={12} strokeWidth={3} />
            </span>
          </a>
        </motion.div>

        {/* Right: pinned photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative mx-auto w-64 sm:w-80 lg:w-88"
        >
          <div
            aria-hidden
            className="absolute inset-y-6 -left-6 w-10 rounded-full bg-black/25 blur-xl"
          />
          <div className="bg-muted relative aspect-4/5 w-full overflow-hidden">
            <Image
              src="/images/splash-photo.webp"
              alt={personalInfo.name}
              fill
              priority
              sizes="(max-width: 640px) 256px, 352px"
              className="object-cover object-[50%_40%]"
            />
          </div>
          <Image
            src="/images/pin.png"
            alt=""
            width={28}
            height={28}
            className="absolute -top-3 left-1/2 -translate-x-1/2"
          />
        </motion.div>
      </div>

      <ScrollIndicator visible={showScrollIndicator} />
    </section>
  );
}
