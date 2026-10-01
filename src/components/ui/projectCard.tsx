'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { formatDate } from '@/lib/utils';
import type { Project, ProjectCategory } from '@/types';

const CATEGORY_LABEL: Record<ProjectCategory, string> = {
  ml: 'Machine Learning',
  backend: 'Backend',
  frontend: 'Frontend',
  fullstack: 'Full-stack',
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const images = project.images ?? [];
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <article className="group border-primary/30 bg-card flex h-full flex-col rounded-2xl border p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8">
      {/* Image carousel — same pattern as PolaroidCard */}
      {images.length > 0 && (
        <div className="bg-muted relative mb-5 aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={images[imgIndex]}
            alt={`${project.title} screenshot ${imgIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Next arrow — only shown when there are multiple images */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={() => setImgIndex((i) => (i + 1) % images.length)}
              aria-label="Next screenshot"
              className="bg-card/80 text-foreground absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-1 transition-opacity hover:opacity-80"
            >
              <ChevronRight size={18} strokeWidth={3} />
            </button>
          )}

          {/* Dot indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setImgIndex(i)}
                  aria-label={`Screenshot ${i + 1}`}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    i === imgIndex ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      <p className="text-muted-foreground mb-3 font-mono text-xs tracking-[0.2em] uppercase">
        {CATEGORY_LABEL[project.category]} · {formatDate(project.date)}
      </p>

      <h3 className="font-display text-primary mb-3 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
        {project.title}
      </h3>

      <p className="text-foreground/80 mb-5 font-mono text-sm leading-relaxed">
        {project.description}
      </p>

      <ul className="mb-6 flex flex-wrap gap-2" aria-label="Tech stack">
        {project.techStack.map((tech) => (
          <li
            key={tech}
            className="border-primary/60 text-primary rounded-xl border border-dashed px-3 py-1 text-xs"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex gap-5 pt-2">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase hover:underline"
          >
            <FaGithub size={14} /> Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase hover:underline"
          >
            <ExternalLink size={14} /> Live
          </a>
        )}
      </div>
    </article>
  );
}
