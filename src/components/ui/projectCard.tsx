import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
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
  return (
    <article className="border-primary/30 bg-card flex h-full flex-col rounded-2xl border p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8">
      {/* Optional screenshot: only rendered when a thumbnail is provided */}
      {project.thumbnail && (
        <div className="bg-muted relative mb-5 aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
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
