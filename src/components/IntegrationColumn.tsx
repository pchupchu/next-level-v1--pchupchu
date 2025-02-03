'use client';

import Image from 'next/image';
import { Fragment } from 'react';

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

import { type IntegrationsType } from '@/sections/Integrations';

interface IntegrationColumnProps {
  integrations: IntegrationsType;
  className?: string;
  reverse?: boolean;
}

export default function IntegrationColumn({
  integrations,
  className,
  reverse,
}: IntegrationColumnProps) {
  return (
    <motion.div
      className={twMerge('flex flex-col gap-4 pb-4', className)}
      initial={{
        y: reverse ? '-50%' : 0,
      }}
      animate={{ y: reverse ? 0 : '-50%' }}
      transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}>
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
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
        </Fragment>
      ))}
    </motion.div>
  );
}
