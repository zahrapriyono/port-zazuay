'use client';

import { Award, GraduationCap } from 'lucide-react';
import { education, certifications } from '@/data/education';
import { SectionHeading } from '@/components/ui/sectionHeading';
import { AnimateOnScroll } from '@/components/ui/animateOnScroll';
import { formatDate } from '@/lib/utils';

export function Education() {
  return (
    <section id="education" className="section-container">
      <SectionHeading
        tag="EDUCATION"
        title="Learning & credentials"
        highlight="credentials"
      />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <AnimateOnScroll>
          <h3 className="text-muted-foreground mb-4 flex items-center gap-2 text-sm font-medium">
            <GraduationCap size={16} /> Degrees
          </h3>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={`${edu.institution}-${edu.degree}`} className="card">
                <p className="text-muted-foreground mb-1 text-xs">
                  {formatDate(edu.startDate)} – {formatDate(edu.endDate)}
                </p>
                <h4 className="text-foreground text-base font-semibold">
                  {edu.degree}
                </h4>
                <p className="text-muted-foreground text-sm">{edu.field}</p>
                <p className="text-foreground/90 mt-1 text-sm">
                  {edu.institution}
                </p>
                {edu.gpa && (
                  <p className="text-muted-foreground mt-2 text-xs">
                    GPA: {edu.gpa}
                  </p>
                )}
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <h3 className="text-muted-foreground mb-4 flex items-center gap-2 text-sm font-medium">
            <Award size={16} /> Certifications
          </h3>
          {certifications.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => {
                const content = (
                  <>
                    <span className="font-medium">{cert.name}</span>
                    <span className="text-muted-foreground">
                      {' '}
                      · {cert.issuer}
                    </span>
                  </>
                );
                // Render a <span>, not an <a href={undefined}>, when there's no
                // credentialUrl — an anchor with no href isn't a real link and
                // is skipped by keyboard/screen-reader navigation inconsistently.
                return cert.credentialUrl ? (
                  <a
                    key={cert.name}
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:bg-secondary rounded-full border px-4 py-2 text-sm transition-colors"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    {content}
                  </a>
                ) : (
                  <span
                    key={cert.name}
                    className="text-foreground rounded-full border px-4 py-2 text-sm"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    {content}
                  </span>
                );
              })}
            </div>
          ) : (
            <p className="text-muted-foreground text-sm">More on the way.</p>
          )}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
