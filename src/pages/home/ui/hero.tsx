import { getImageProps } from 'next/image';
import { Button } from '~/shared/ui/button';

export const Hero = () => {
  const common = { alt: 'Hero image', sizes: '100vw' };

  const {
    props: { srcSet: screen2XL },
  } = getImageProps({
    ...common,
    width: 1440,
    height: 900,
    quality: 80,
    src: '/images/hero/hero-bg-1440.jpg',
  });

  const {
    props: { srcSet: screenXL },
  } = getImageProps({
    ...common,
    width: 1280,
    height: 720,
    quality: 80,
    src: '/images/hero/hero-bg-1280.jpg',
  });

  const {
    props: { srcSet: screenLG },
  } = getImageProps({
    ...common,
    width: 1024,
    height: 768,
    quality: 80,
    src: '/images/hero/hero-bg-1024.jpg',
  });

  const {
    props: { srcSet: screenMD },
  } = getImageProps({
    ...common,
    width: 768,
    height: 1024,
    quality: 80,
    src: '/images/hero/hero-bg-768.jpg',
  });

  const {
    props: { srcSet: screenSM, ...rest },
  } = getImageProps({
    ...common,
    width: 376,
    height: 816,
    quality: 70,
    src: '/images/hero/hero-bg-376.jpg',
  });

  return (
    <section>
      <div className='container px-0'>
        <div className='relative text-center md:text-left'>
          <picture>
            <source media='(min-width: 1440px)' srcSet={screen2XL} />
            <source media='(min-width: 1280px)' srcSet={screenXL} />
            <source media='(min-width: 1024px)' srcSet={screenLG} />
            <source media='(min-width: 768px)' srcSet={screenMD} />
            <img {...rest} style={{ width: '100%', height: 'auto' }} />
          </picture>

          <div className='absolute inset-x-0 top-[11.875rem] px-4 md:top-[11.625rem] md:pl-8 md:pr-[9.125rem] lg:px-[6.25rem] xl:pr-[22.375rem] 2xl:pl-[9.75rem] 2xl:pr-[28.875rem]'>
            <h1 className='mb-[1.875rem] font-serif text-[2.875rem]/[3.68rem] font-medium md:text-[5rem]/[6.4rem]'>
              Сacti for good mood and good atmosphere
            </h1>
            <p className='mb-[3.75rem] text-xl/[1.465rem]'>
              Welcome to our store, we are always glad to see you in our store!
            </p>
            <Button className='h-auto px-[1.8125rem] py-3 text-2xl/[1.7581rem]'>
              Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
