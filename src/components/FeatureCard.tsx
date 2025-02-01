import { twMerge } from 'tailwind-merge';

interface FeatureCardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

export default function FeatureCard({
  title,
  description,
  children,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={twMerge(
        'rounded-3xl border border-white/10 bg-neutral-900 p-6',
        className
      )}>
      <div className='aspect-video'>{children}</div>
      <div>
        <h3 className='mt-6 text-3xl font-medium'>{title}</h3>
        <p className='mt-2 text-white/50'>{description}</p>
      </div>
    </div>
  );
}
