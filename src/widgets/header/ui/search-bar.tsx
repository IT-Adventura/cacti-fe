'use client';
import { Search } from 'lucide-react';

export const SearchBar = () => {
  return (
    <div className='relative w-[10.25rem] md:w-[14rem] xl:w-[10.25rem]'>
      <input
        type='text'
        placeholder='Search...'
        className='w-full rounded-[0.5rem] bg-[#D9D9D9]/50 py-1 pl-3 pr-10 text-base/5 tracking-[1%] placeholder:text-muted-foreground/90 focus:border focus:outline-none focus:ring-0'
      />
      <Search className='absolute right-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground/90' />
    </div>
  );
};
