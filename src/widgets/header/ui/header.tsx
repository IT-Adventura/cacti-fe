import { LogIn, ShoppingBasket } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '~/shared/ui/assets';
import { LogoBig } from '~/shared/ui/assets';
import { BurgerMenu } from './burger-menu';
import { Navbar } from './navbar';
import { SearchBar } from './search-bar';

export const Header = () => {
  return (
    <header className='absolute top-0 z-20 w-full bg-transparent'>
      <div className='container'>
        <div className='flex items-center justify-between py-9'>
          <div className='flex items-center gap-[3.625rem] md:gap-[5.25rem] lg:gap-[9.75rem] xl:gap-[13.1875rem] 2xl:gap-[14.6875rem]'>
            <Link href='/'>
              <Logo className='md:hidden' />
              <LogoBig className='hidden md:block' />
            </Link>
            <div className='xl:hidden'>
              <SearchBar />
            </div>
            <Navbar />
          </div>

          <div className='flex items-center xl:gap-7'>
            <BurgerMenu />

            <div className='hidden xl:block'>
              <SearchBar />
            </div>

            <div className='hidden xl:flex xl:items-center xl:gap-2'>
              <LogIn className='cursor-pointer transition-colors hover:text-black' />
              <ShoppingBasket className='cursor-pointer transition-colors hover:text-black' />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
