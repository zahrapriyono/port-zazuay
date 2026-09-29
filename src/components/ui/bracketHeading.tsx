import { SelectionFrame } from '@/components/ui/selectionFrame';

interface BracketHeadingProps {
  title: string;
}

/** Section title in the design's "[TITLE]" style, inside a selection frame. */
export function BracketHeading({ title }: BracketHeadingProps) {
  return (
    <div className="mb-12 flex justify-center px-3">
      <SelectionFrame className="px-6 py-4 text-center sm:px-10">
        <h2 className="font-display text-primary text-3xl font-bold tracking-[-0.04em] uppercase sm:text-5xl">
          [{title}]
        </h2>
      </SelectionFrame>
    </div>
  );
}
