import * as React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import { cn } from '~/shared/lib';

export interface SocialsProps extends React.HTMLAttributes<HTMLUListElement> {}

const Socials = React.forwardRef<HTMLUListElement, SocialsProps>(
  ({ className, ...props }, ref) => {
    return (
      <ul
        className={cn('flex justify-center space-x-4', className)}
        ref={ref}
        {...props}
      >
        <li>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebookF size={24} />
          </a>
        </li>
        <li>
          <a
            href='https://twitter.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter size={24} />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedinIn size={24} />
          </a>
        </li>
        <li>
          <a
            href='https://www.instagram.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <RiInstagramFill size={24} />
          </a>
        </li>
      </ul>
    );
  },
);
Socials.displayName = 'Socials';

export { Socials };
