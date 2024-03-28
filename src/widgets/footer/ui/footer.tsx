import Link from 'next/link';
import { LogoBig } from '~/shared/ui/assets';
import { Contact } from './contact';
import { Links } from './links';

export const Footer = () => {
  return (
    <footer className='mt-auto bg-card py-20'>
      <div className='container lg:flex lg:justify-between'>
        <section className='mb-20 flex flex-col items-center gap-6 md:items-start md:justify-between md:max-lg:flex-row'>
          <Link href='/'>
            <LogoBig />
          </Link>
          <p className='text-center text-lg/5 md:max-w-[14.0625rem] md:text-left lg:max-w-[13.25rem] xl:max-w-[19.625rem]'>
            Welcome to our store, we are always glad to see you in our store!
          </p>
        </section>

        <div className='justify-between md:flex lg:gap-14 xl:gap-24 2xl:gap-28'>
          <Links />
          <Contact />
        </div>
      </div>
    </footer>
  );
};
