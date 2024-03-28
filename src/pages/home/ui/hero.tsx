import Image from 'next/image';
import { Button } from '~/shared/ui/button';

export const Hero = () => {
  return (
    <section>
      <div className='container px-0'>
        <div className='relative h-[816px] text-center md:h-[1024px] md:text-left lg:h-[768px] xl:h-[720px] 2xl:h-[900px]'>
          <Image
            src='/images/hero/hero-bg-376.jpg'
            alt='Hero image'
            fill={true}
            priority={true}
            sizes='(max-width: 376px) 376px, 100vw'
            className='object-cover object-center md:hidden'
          />
          <Image
            src='/images/hero/hero-bg-768.jpg'
            alt='Hero image'
            fill={true}
            priority={true}
            sizes='(min-width: 768px) 768px, 100vw'
            className='hidden object-cover object-center md:block lg:hidden'
          />
          <Image
            src='/images/hero/hero-bg-1024.jpg'
            alt='Hero image'
            fill={true}
            priority={true}
            sizes='(min-width: 1024px) 1024px, 100vw'
            className='hidden object-cover object-center lg:block xl:hidden'
          />
          <Image
            src='/images/hero/hero-bg-1280.jpg'
            alt='Hero image'
            fill={true}
            priority={true}
            sizes='(min-width: 1280px) 1280px, 100vw'
            className='hidden object-cover object-center xl:block 2xl:hidden'
          />
          <Image
            src='/images/hero/hero-bg-1440.jpg'
            alt='Hero image'
            fill={true}
            priority={true}
            sizes='(min-width: 1440px) 1440px, 100vw'
            className='hidden object-cover object-center 2xl:block'
          />

          <div className='absolute inset-x-0 top-[190px] px-4 md:top-[186px] md:pl-8 md:pr-[146px] lg:px-[100px] xl:pr-[358px] 2xl:pl-[156px] 2xl:pr-[462px]'>
            <h1 className='mb-[30px] font-serif text-[46px]/[58.88px] font-medium md:text-[80px]/[102.4px]'>
              Сacti for good mood and good atmosphere
            </h1>
            <p className='mb-[60px] text-xl/[23.44px]'>
              Welcome to our store, we are always glad to see you in our store!
            </p>
            <Button className='h-auto px-[29px] py-3 text-2xl/[28.13px]'>
              Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
