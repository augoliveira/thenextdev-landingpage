import { Tab } from '@/components/ui/tab';
import React from 'react';
import { RandomPostTab } from './random-post-tab';

const title = 'Espelho';

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex flex-wrap items-center gap-2">
        <Tab path="/espelho" item={{ text: 'Espelho oval' }} />
        <Tab path="/espelho" item={{ text: 'Espelho redondo', slug: '1' }} />
        <Tab path="/espelho" item={{ text: 'Espelhos para banheiro', slug: '2' }} />
        <RandomPostTab path="/espelho" />
      </div>

      <div>{children}</div>
    </div>
  );
}