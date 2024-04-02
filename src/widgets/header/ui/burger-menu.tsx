'use client';
import Link from 'next/link';
import { LuAlignJustify, LuX } from 'react-icons/lu';
import { Contacts } from '~/features/contacts';
import { LogoBig } from '~/shared/ui/assets';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '~/shared/ui/sheet';

const links = [
  { label: 'Store', path: '/store' },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
] as const;

export const BurgerMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className='xl:hidden'>
        <LuAlignJustify className='size-6 stroke-1 transition-colors hover:text-black' />
      </SheetTrigger>

      <SheetContent
        side='right'
        className='w-full border-0 bg-card p-0 md:w-[23.5rem]'
      >
        <div className='flex items-center justify-between px-4 py-9'>
          <LogoBig />
          <SheetClose>
            <LuX className='size-5 stroke-2 text-foreground transition-colors hover:text-black' />
          </SheetClose>
        </div>

        <div className='space-y-[6.5rem] py-[4.5rem] text-center text-lg/5 font-bold md:py-[11rem] lg:py-12'>
          <div>
            <Link href='/auth/login' className='underline'>
              log in to your account
            </Link>
            <p className='text-[#D5D8D8]'>for additional features</p>
          </div>

          <ul className='flex flex-col gap-5'>
            {links.map((link) => {
              return (
                <li
                  key={link.label}
                  className='text-2xl/none font-medium uppercase tracking-[1%]'
                >
                  <Link href={link.path}>{link.label}</Link>
                </li>
              );
            })}
          </ul>

          <div>
            <Link href='/store' className='underline'>
              View and buy
            </Link>
            <p className='text-[#D5D8D8]'>selected cacti</p>
          </div>
        </div>

        <Contacts />
      </SheetContent>
    </Sheet>
  );
};
