interface FolderIconProps {
  className?: string;
}

export function FolderIcon({ className }: FolderIconProps) {
  return (
    <svg viewBox="0 0 120 92" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="folder-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a9c8ec" />
          <stop offset="1" stopColor="#7fa8d8" />
        </linearGradient>
        <linearGradient id="folder-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#b6dcfb" />
          <stop offset="1" stopColor="#6a9ad0" />
        </linearGradient>
      </defs>
      <path
        d="M4 10a6 6 0 0 1 6-6h30l10 10h60a6 6 0 0 1 6 6v58a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6Z"
        fill="url(#folder-back)"
      />
      <rect
        x="0"
        y="22"
        width="120"
        height="66"
        rx="6"
        fill="url(#folder-front)"
      />
    </svg>
  );
}
