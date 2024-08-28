import { Breadcrumbs } from '@/app/esquadria/breadcrumbs/_components/breadcrumbs';

// Note: Next.js doesn't currently support optional catchAll segments in parallel routes.
// In the mean time, this file will match the "/breadcrumb" route.
export default function Page() {
  const items = [
    {
      text: 'Home',
      href: '/esquadria/breadcrumbs',
    },
  ];
  return <Breadcrumbs items={items} />;
}
