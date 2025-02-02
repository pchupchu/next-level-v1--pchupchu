import Image from 'next/image';

import logoImage from '@/assets/images/logo.svg';

const footerLinks = [
  { href: '#', label: 'Contact' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms & Conditions' },
];

export default function Footer() {
  return (
    <footer className='py-16'>
      <div className='container'>
        <div className='flex flex-col items-center gap-6 md:flex-row md:justify-between'>
          <div>
            <Image
              src={logoImage}
              alt='Logo'
              className='h-9 w-auto md:h-auto'
            />
          </div>
          <div>
            <nav className='flex gap-6'>
              {footerLinks.map((link) => (
                <a
                  className='text-sm text-white/50'
                  key={link.label}
                  href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
