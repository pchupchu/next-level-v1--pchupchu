import { HTMLAttributes } from 'react';

import { twMerge } from 'tailwind-merge';

export default function Key({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        'inline-flex size-14 items-center justify-center rounded-2xl bg-neutral-300 text-xl font-medium text-neutral-950',
        className
      )}
      {...props}>
      {children}
    </div>
  );
}
