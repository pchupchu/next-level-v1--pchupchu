import { HTMLAttributes } from 'react';

import { twMerge } from 'tailwind-merge';

export default function Tag({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        'inline-flex items-center gap-2 rounded-full border border-lime-500 px-3 py-1 uppercase text-lime-400',
        className
      )}
      {...rest}>
      <span>&#10038;</span>
      <span className='text-sm'>{children}</span>
    </div>
  );
}
