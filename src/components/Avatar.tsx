import { HTMLAttributes } from 'react';

import { twMerge } from 'tailwind-merge';

export default function Avatar({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        'size-20 overflow-hidden rounded-full border-4 border-blue-500 bg-neutral-900 p-1',
        className
      )}
      {...props}>
      {children}
    </div>
  );
}

Avatar;
