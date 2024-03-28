import * as React from 'react';
import { Socials } from './socials';

export interface ContactsProps extends React.HTMLAttributes<HTMLDivElement> {}

const Contacts = React.forwardRef<HTMLDivElement, ContactsProps>(
  (props, ref) => {
    return (
      <div ref={ref} {...props}>
        <p className='mb-4 text-lg/5 text-foreground/80'>
          phone: <a href='tel:+110001111111'>+11 (000) 111-11-11</a>
        </p>
        <p className='mb-5 text-lg/5 text-foreground/80'>
          mail: <a href='mailto:likecactus@gmail.com'>likecactus@gmail.com</a>
        </p>
        <Socials />
      </div>
    );
  },
);
Contacts.displayName = 'Contacts';

export { Contacts };
