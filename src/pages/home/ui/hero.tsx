import Image from 'next/image';
import { Button } from '~/shared/ui/button';

export const Hero = () => {
  return (
    <section>
      <div className='container px-0'>
        <div className='relative h-[812px] md:h-[1024px] lg:h-[768px] xl:h-[720px] 2xl:h-[900px]'>
          <Image
            alt='Hero image'
            src='/images/hero/hero-bg-376.jpg'
            priority={true}
            fill
            className='object-contain md:hidden'
          />
          <Image
            alt='Hero image'
            src='/images/hero/hero-bg-768.jpg'
            priority={true}
            fill
            sizes='(min-width: 768px) 100vw'
            className='hidden object-contain md:block lg:hidden'
          />
          <Image
            alt='Hero image'
            src='/images/hero/hero-bg-1024.jpg'
            priority={true}
            fill
            sizes='(min-width: 1024px) 100vw'
            className='hidden object-contain lg:block xl:hidden'
          />
          <Image
            alt='Hero image'
            src='/images/hero/hero-bg-1280.jpg'
            priority={true}
            fill
            sizes='(min-width: 1280px) 100vw'
            className='hidden object-contain xl:block 2xl:hidden'
          />
          <Image
            alt='Hero image'
            src='/images/hero/hero-bg-1440.jpg'
            priority={true}
            fill
            sizes='(min-width: 1440px) 100vw'
            className='hidden object-contain 2xl:block'
          />

          <div className='absolute inset-x-0 top-[186px] text-center md:px-[31px] md:text-left lg:px-[100px] xl:pr-[358px] 2xl:pl-[156px] 2xl:pr-[462px]'>
            <h1 className='mx-auto mb-7 w-[262px] font-serif text-[46px]/[58.88px] font-medium md:mb-[30px] md:w-full md:text-left md:text-[80px]/[102.4px]'>
              Сacti for good mood and good atmosphere
            </h1>
            <p className='mx-auto mb-[62px] w-[344px] text-xl/[23.44px] md:mb-[60px] md:w-full'>
              Welcome to our store, we are always glad to see you in our store!
            </p>
            <Button className='h-auto px-[29px] py-3 text-2xl/[28.13px] md:mr-auto'>
              Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
