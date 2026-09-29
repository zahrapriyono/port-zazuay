import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

// 8 selection handles on the frame edge: [position classes, translateX, translateY]
const HANDLES: Array<[string, string, string]> = [
  ['left-0 top-0', '-50%', '-50%'],
  ['left-1/2 top-0', '-50%', '-50%'],
  ['right-0 top-0', '50%', '-50%'],
  ['left-0 top-1/2', '-50%', '-50%'],
  ['right-0 top-1/2', '50%', '-50%'],
  ['left-0 bottom-0', '-50%', '50%'],
  ['left-1/2 bottom-0', '-50%', '50%'],
  ['right-0 bottom-0', '50%', '50%'],
];

interface SelectionFrameProps {
  children: ReactNode;
  className?: string;
}

/** A "selected text box" frame with 8 resize handles, as used in the design. */
export function SelectionFrame({ children, className }: SelectionFrameProps) {
  return (
    <div className={cn('border-frame relative inline-block border', className)}>
      {HANDLES.map(([pos, tx, ty]) => (
        <span
          key={pos}
          aria-hidden
          className={`border-frame bg-handle absolute h-3 w-3 border ${pos}`}
          style={{ transform: `translate(${tx}, ${ty})` }}
        />
      ))}
      {children}
    </div>
  );
}
