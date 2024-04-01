'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '~/shared/lib';

const links = [
  { label: 'Store', path: '/store' },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
] as const;

export const Navbar = () => {
  const path = usePathname();

  return (
    <nav className='hidden xl:block'>
      <ul className='flex items-center overflow-hidden rounded-[0.5rem] bg-card/90'>
        {links.map((link) => {
          const isActive = path === link.path;

          return (
            <li
              key={link.label}
              className={cn(
                'px-6 py-2 text-[22px]/6 uppercase tracking-[1%] text-foreground/90 transition-colors duration-300 hover:bg-[#232B2D]',
                isActive && 'bg-[#232B2D] text-input/90',
              )}
            >
              <Link href={link.path}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
