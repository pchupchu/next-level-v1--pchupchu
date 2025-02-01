import { HTMLAttributes } from 'react';

import { cva } from 'class-variance-authority';

const classes = cva('h-12 rounded-full border px-6 font-medium', {
  variants: {
    variant: {
      primary: 'border-lime-400 bg-lime-400 text-neutral-950',
      secondary: 'border-white bg-transparent text-white',
    },
  },
});

export default function Button(
  props: {
    variant: 'primary' | 'secondary';
  } & HTMLAttributes<HTMLButtonElement>
) {
  const { variant, className, ...rest } = props;
  return (
    <button
      className={classes({
        variant,
        className,
      })}
      {...rest}
    />
  );
}
