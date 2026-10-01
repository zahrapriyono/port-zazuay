import { render, screen } from '@testing-library/react';
import { SectionHeading } from '@/components/ui/sectionHeading';

describe('SectionHeading', () => {
  it('renders title', () => {
    render(<SectionHeading title="My Projects" />);
    expect(screen.getByText('My Projects')).toBeInTheDocument();
  });

  it('renders tag when provided', () => {
    render(<SectionHeading tag="PROJECTS" title="My Projects" />);
    expect(screen.getByText('PROJECTS')).toBeInTheDocument();
  });

  it('highlights the specified word', () => {
    render(<SectionHeading title="Things I built" highlight="built" />);
    const highlight = screen.getByText('built');
    expect(highlight).toHaveClass('text-primary');
  });

  it('renders without tag', () => {
    const { container } = render(<SectionHeading title="Title" />);
    expect(container.querySelector('span.inline-block')).toBeNull();
  });
});
