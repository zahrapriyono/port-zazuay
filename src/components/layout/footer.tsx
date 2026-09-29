import { NAV_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Zaza
        </p>

        <nav className="flex gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs">
          Built with Next.js
        </span>
      </div>
    </footer>
  );
}
