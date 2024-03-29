import { hero } from '~/shared/ui/assets';
import { Button } from '~/shared/ui/button';
import { Picture } from '~/shared/ui/picture';

export const Hero = () => {
  return (
    <section>
      <div className='container px-0'>
        <div className='relative text-center md:text-left'>
          <Picture
            className='h-auto w-full'
            src={hero.w376}
            alt='Hero Image'
            sizes='100vw'
            sources={{
              '(min-width: 1440px)': hero.w1440,
              '(min-width: 1280px)': hero.w1280,
              '(min-width: 1024px)': hero.w1024,
              '(min-width: 768px)': hero.w768,
            }}
          />

          <div className='absolute inset-x-0 top-[11.875rem] px-14 md:top-[11.625rem] md:pl-8 md:pr-[9.125rem] lg:px-[6.25rem] xl:pr-[22.375rem] 2xl:pl-[9.75rem] 2xl:pr-[28.875rem]'>
            <h1 className='mb-[1.625rem] font-serif text-[2.875rem]/[3.75rem] font-medium md:text-[5rem]/[6.4rem]'>
              Сacti for good mood and good atmosphere
            </h1>
            <p className='mb-[3.75rem] text-xl/[1.465rem]'>
              Welcome to our store, we are always glad to see you in our store!
            </p>
            <Button className='h-auto px-8 py-3 text-2xl/[1.7581rem]'>
              Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
