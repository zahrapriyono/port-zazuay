'use client';

import { projects, PROJECTS_PER_PAGE } from '@/data/projects';
import { BracketHeading } from '@/components/ui/bracketHeading';
import { ProjectCard } from '@/components/ui/projectCard';
import { ShowMoreButton } from '@/components/ui/showMoreButton';
import { AnimateOnScroll } from '@/components/ui/animateOnScroll';
import { useShowMore } from '@/hooks/useShowMore';

export function Projects() {
  const { visibleItems, hasMore, showMore, showLess, isExpanded } = useShowMore(
    projects,
    PROJECTS_PER_PAGE,
  );

  return (
    <section id="projects" className="section-container">
      <BracketHeading title="Projects" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {visibleItems.map((project, index) => (
          <AnimateOnScroll
            key={project.id}
            delay={(index % 2) * 0.1}
            className="h-full"
          >
            <ProjectCard project={project} />
          </AnimateOnScroll>
        ))}
      </div>

      <ShowMoreButton
        hasMore={hasMore}
        isExpanded={isExpanded}
        onShowMore={showMore}
        onShowLess={showLess}
      />
    </section>
  );
}
