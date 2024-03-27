import Link from 'next/link';
import { LogoBig } from '~/shared/ui/assets';
import { Contact } from './contact';
import { Links } from './links';

export const Footer = () => {
  return (
    <footer className="mt-auto bg-card py-20">
      <div className="container">
        <section className="mb-20 flex flex-col items-center space-y-6">
          <Link href="/">
            <LogoBig />
          </Link>
          <p className="text-center text-lg/5">
            Welcome to our store, we are always glad to see you in our store!
          </p>
        </section>

        <Links />
        <Contact />
      </div>
    </footer>
  );
};
