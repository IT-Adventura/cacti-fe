import Link from 'next/link';

export const Links = () => {
  return (
    <section className='mx-auto mb-24 flex max-w-[18.25rem] justify-between md:mx-0 md:mb-0 md:min-w-[18.625rem] xl:min-w-[18.9375rem]'>
      <div>
        <h3 className='mb-8 text-2xl/7 font-medium'>Navigation</h3>
        <ul className='space-y-5 text-lg/5 text-foreground/80'>
          <li>
            <Link href='#'>Consultation</Link>
          </li>
          <li>
            <Link href='#'>Store</Link>
          </li>
          <li>
            <Link href='#'>News</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className='mb-8 text-2xl/7 font-medium'>Resources</h3>
        <ul className='space-y-5 text-lg/5 text-foreground/80'>
          <li>
            <Link href='#'>Reviews</Link>
          </li>
          <li>
            <Link href='#'>Blog</Link>
          </li>
          <li>
            <Link href='#'>Service</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
