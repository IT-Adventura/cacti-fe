import { APP_ROUTES } from './routes.config';

export const NAV_LINKS = [
  { label: 'Store', path: APP_ROUTES.STORE },
  { label: 'News', path: APP_ROUTES.NEWS },
  { label: 'Contact', path: APP_ROUTES.CONTACTS },
] as const;
