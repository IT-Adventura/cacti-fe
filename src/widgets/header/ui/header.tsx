import Link from 'next/link';
import { LuLogIn, LuShoppingBasket } from 'react-icons/lu';
import { Search } from '~/features/search';
import { Logo, LogoBig } from '~/shared/ui/assets';
import { BurgerMenu } from './burger-menu';
import { Navbar } from './navbar';

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
              <Search />
            </div>
            <Navbar />
          </div>

          <div className='flex items-center xl:gap-7'>
            <BurgerMenu />

            <div className='hidden xl:block'>
              <Search />
            </div>

            <div className='hidden xl:flex xl:items-center xl:gap-2'>
              <LuLogIn className='size-6 cursor-pointer transition-colors hover:text-black' />
              <LuShoppingBasket className='size-6 cursor-pointer transition-colors hover:text-black' />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
