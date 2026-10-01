'use client';

import Image from 'next/image';
import { personalInfo } from '@/data/personal';
import { AnimateOnScroll } from '@/components/ui/animateOnScroll';

const CHIPS = [
  'Computer Science',
  'Intelligent Systems',
  personalInfo.location,
];

// Heart-shaped clip path (objectBoundingBox units so it scales with the element)
const HEART_PATH =
  'M0.5,0.97 C0.12,0.68 0,0.5 0,0.28 C0,0.1 0.14,0 0.27,0 C0.37,0 0.46,0.05 0.5,0.15 C0.54,0.05 0.63,0 0.73,0 C0.86,0 1,0.1 1,0.28 C1,0.5 0.88,0.68 0.5,0.97 Z';

export function About() {
  return (
    <section id="about" className="section-container overflow-hidden">
      <svg width="0" height="0" aria-hidden className="absolute">
        <clipPath id="heart-clip" clipPathUnits="objectBoundingBox">
          <path d={HEART_PATH} />
        </clipPath>
      </svg>

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Left: red paper card with two heart-cut photos */}
        <AnimateOnScroll direction="right">
          <div className="relative mx-auto w-64 rotate-6 sm:w-72">
            <div className="relative aspect-1/2 w-full overflow-hidden shadow-xl">
              <Image
                src="/images/paper-red.webp"
                alt=""
                fill
                sizes="288px"
                className="object-cover"
              />
              <div className="absolute inset-x-[10%] top-[6%] aspect-square">
                <div
                  className="relative h-full w-full"
                  style={{ clipPath: 'url(#heart-clip)' }}
                >
                  <Image
                    src="/images/splash-photo-1.JPG"
                    alt={personalInfo.name}
                    fill
                    sizes="240px"
                    className="object-cover object-[50%_25%]"
                  />
                </div>
              </div>
              <div className="absolute inset-x-[4%] bottom-[6%] aspect-square">
                <div
                  className="relative h-full w-full"
                  style={{ clipPath: 'url(#heart-clip)' }}
                >
                  <Image
                    src="/images/splash-photo-2.jpg"
                    alt=""
                    fill
                    sizes="260px"
                    className="object-cover object-[55%_40%]"
                  />
                </div>
              </div>
            </div>
            <Image
              src="/images/pin.png"
              alt=""
              width={28}
              height={28}
              className="absolute -top-3 left-1/2 -translate-x-1/2"
            />
          </div>
        </AnimateOnScroll>

        {/* Right: heading + bio + chips */}
        <AnimateOnScroll direction="up" delay={0.1}>
          {/* Heading styled as selected text */}
          <div className="bg-highlight relative mb-6 inline-block px-3 py-1">
            <span
              aria-hidden
              className="absolute -top-1.5 -left-2 h-5 w-5 rounded-full bg-[#0a6cdf]"
            />
            <span
              aria-hidden
              className="absolute -right-2 -bottom-1.5 h-5 w-5 rounded-full bg-[#0a6cdf]"
            />
            <span
              aria-hidden
              className="absolute inset-y-0 left-0 w-0.5 bg-[#0a6cdf]"
            />
            <span
              aria-hidden
              className="absolute inset-y-0 right-0 w-0.5 bg-[#0a6cdf]"
            />
            <h2 className="font-display text-highlight-foreground text-5xl font-medium tracking-[-0.06em] sm:text-7xl">
              ABOUT ME
            </h2>
          </div>

          <p className="text-primary mb-8 max-w-xl font-mono text-sm leading-relaxed sm:text-base">
            {personalInfo.bio}
          </p>

          <div className="flex flex-wrap gap-3">
            {CHIPS.map((chip) => (
              <span
                key={chip}
                className="border-primary text-primary rounded-2xl border-2 border-dashed px-4 py-3 text-sm sm:text-base"
              >
                {chip}
              </span>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
