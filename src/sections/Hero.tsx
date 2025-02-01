import Image from 'next/image';

import desighExampleImage1 from '@/assets/images/design-example-1.png';
import desighExampleImage2 from '@/assets/images/design-example-2.png';
import Button from '@/components/Button';
import Pointer from '@/components/Pointer';

export default function Hero() {
  return (
    <section className='overflow-clip py-24'>
      <div className='container relative'>
        <div className='absolute -left-32 top-16 hidden lg:block'>
          <Image
            src={desighExampleImage1}
            alt='Design Example 1'
            width={310}
            height={500}
          />
        </div>
        <div className='absolute -right-64 -top-16 hidden lg:block'>
          <Image
            src={desighExampleImage2}
            alt='Design Example 2'
            width={432}
            height={500}
          />
        </div>
        <div className='absolute left-56 top-96 hidden lg:block'>
          <Pointer name='Andrea' />
        </div>
        <div className='absolute -top-4 right-80 hidden lg:block'>
          <Pointer name='Bryan' color='red' />
        </div>
        <div className='flex justify-center'>
          <div className='inline-flex rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 font-semibold text-neutral-950'>
            ✨ $7.5M seed round raised
          </div>
        </div>
        <h1 className='mt-6 text-center text-6xl font-medium md:text-7xl lg:text-8xl'>
          Impactful design, created effortlessly
        </h1>
        <p className='mx-auto mt-8 max-w-2xl text-center text-xl text-white/50'>
          Design tools shouldn&apos;t slow you down. Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow.
        </p>
        <form
          action='post'
          className='mx-auto mt-8 flex max-w-lg rounded-full border border-white/15 p-2'>
          <input
            className='w-full bg-transparent px-4 md:flex-1'
            type='email'
            name='email'
            placeholder='Enter your email'
          />
          <Button
            className='whitespace-nowrap'
            variant='primary'
            size='sm'
            type='submit'>
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
