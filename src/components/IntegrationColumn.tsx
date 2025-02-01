import Image from 'next/image';

import { twMerge } from 'tailwind-merge';

import { type IntegrationsType } from '@/sections/Integrations';

interface IntegrationColumnProps {
  integrations: IntegrationsType;
  className?: string;
}

export default function IntegrationColumn({
  integrations,
  className,
}: IntegrationColumnProps) {
  return (
    <div className={twMerge('flex flex-col gap-4 pb-4', className)}>
      {integrations.map((integration) => (
        <div
          key={integration.name}
          className='rounded-3xl border border-white/10 bg-neutral-900 p-6'>
          <div className='flex justify-center'>
            <Image
              className='size-24'
              src={integration.icon}
              alt={`${integration.name} icon`}
            />
          </div>
          <h3 className='mt-6 text-center text-3xl'>{integration.name}</h3>
          <p className='mt-2 text-center text-white/50'>
            {integration.description}
          </p>
        </div>
      ))}
    </div>
  );
}
