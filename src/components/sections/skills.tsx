'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { IconType } from 'react-icons';
import { FaJava } from 'react-icons/fa';
import {
  SiPython,
  SiC,
  SiTypescript,
  SiJavascript,
  SiSwift,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiTailwindcss,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiMysql,
  SiGit,
  SiFigma,
} from 'react-icons/si';
import { skills } from '@/data/skills';
import type { SkillCategory } from '@/types';
import { AnimateOnScroll } from '@/components/ui/animateOnScroll';

const ICONS: Record<string, IconType> = {
  FaJava,
  SiPython,
  SiC,
  SiTypescript,
  SiJavascript,
  SiSwift,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiTailwindcss,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiMysql,
  SiGit,
  SiFigma,
};

const PAGES: Array<{ label: string; categories: SkillCategory[] }> = [
  { label: 'Languages', categories: ['language'] },
  { label: 'Frameworks', categories: ['framework'] },
  { label: 'ML, data & tools', categories: ['ml-ai', 'database', 'tool'] },
];

export function Skills() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (next: number) => {
    setDirection(next > page ? 1 : -1);
    setPage(next);
  };

  const current = PAGES[page];
  const pageSkills = skills.filter((s) =>
    current.categories.includes(s.category),
  );

  return (
    <section id="skills" className="relative py-16 sm:py-24">
      <AnimateOnScroll>
        <div className="relative mx-auto w-full max-w-4xl px-2 sm:px-6">
          <div className="relative aspect-1200/839 w-full">
            <Image
              src="/images/plate.webp"
              alt=""
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-contain"
            />

            {/* Label tag */}
            <div className="absolute top-[24%] left-1/2 -translate-x-1/2">
              <div className="relative bg-[#540c0d]/70 px-4 py-1.5 sm:px-6 sm:py-2">
                <span
                  aria-hidden
                  className="absolute -top-1.5 -left-1.5 h-2.5 w-2.5 rounded-full bg-[#f2b8d2]"
                />
                <span
                  aria-hidden
                  className="absolute -right-1.5 -bottom-1.5 h-2.5 w-2.5 rounded-full bg-[#f2b8d2]"
                />
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-px bg-[#f2b8d2]"
                />
                <span
                  aria-hidden
                  className="absolute inset-y-0 right-0 w-px bg-[#f2b8d2]"
                />
                <h2 className="font-mono text-xs tracking-[0.3em] whitespace-nowrap text-white uppercase sm:text-base">
                  How I Work
                </h2>
              </div>
            </div>

            {/* Icon grid */}
            <div className="absolute inset-x-[25%] top-[38%] bottom-[24%]">
              <AnimatePresence mode="wait">
                <motion.ul
                  key={page}
                  custom={direction}
                  variants={{
                    enter: (d: number) => ({ opacity: 0, x: d * 30 }),
                    center: { opacity: 1, x: 0 },
                    exit: (d: number) => ({ opacity: 0, x: d * -30 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25 }}
                  aria-label={current.label}
                  className="grid grid-cols-4 content-start gap-[6%]"
                >
                  {pageSkills.map((skill) => {
                    const Icon = ICONS[skill.icon];
                    return (
                      <li
                        key={skill.name}
                        title={skill.name}
                        className="flex aspect-square items-center justify-center rounded-lg bg-white shadow-md sm:rounded-xl"
                      >
                        {Icon ? (
                          <Icon
                            className="h-3/5 w-3/5"
                            style={{ color: skill.color }}
                            aria-hidden
                          />
                        ) : (
                          <span className="text-xs text-neutral-500">
                            {skill.name.slice(0, 2)}
                          </span>
                        )}
                        <span className="sr-only">{skill.name}</span>
                      </li>
                    );
                  })}
                </motion.ul>
              </AnimatePresence>
            </div>

            {/* Left arrow — only on page 1 or 2 */}
            {page > 0 && (
              <button
                type="button"
                onClick={() => goTo(page - 1)}
                aria-label="Previous skills page"
                className="absolute top-1/2 left-[15%] -translate-y-1/2 rounded-full p-1 text-white transition-transform hover:-translate-x-1"
              >
                <ChevronLeft
                  className="h-6 w-6 sm:h-8 sm:w-8"
                  strokeWidth={3}
                />
              </button>
            )}

            {/* Right arrow — only on page 0 or 1 */}
            {page < PAGES.length - 1 && (
              <button
                type="button"
                onClick={() => goTo(page + 1)}
                aria-label="Next skills page"
                className="absolute top-1/2 right-[15%] -translate-y-1/2 rounded-full p-1 text-white transition-transform hover:translate-x-1"
              >
                <ChevronRight
                  className="h-6 w-6 sm:h-8 sm:w-8"
                  strokeWidth={3}
                />
              </button>
            )}

            {/* Page dots */}
            <div className="absolute bottom-[19%] left-1/2 flex -translate-x-1/2 gap-2">
              {PAGES.map((p, i) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show ${p.label}`}
                  aria-current={i === page}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i === page ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
