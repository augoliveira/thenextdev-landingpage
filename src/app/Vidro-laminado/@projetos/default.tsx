import { CurrentRoute } from '@/app/Vidro-laminado/_ui/current-route';
import { Boundary } from '@/components/ui/boundary';
import Link from 'next/link';
import { AnimatedText } from '@/components/AnimatedText-page';

export default function Default() {
  return (
    <Boundary labels={['@projetos/default.tsx']} color="blue" size="small">
      <div className="prose prose-sm prose-invert max-w-none">
      <AnimatedText text='Vidros Especias' />

        <p>
          Default UI is rendered because the <code>@audience</code> slot{' '}
          <strong>does not</strong> contain a route segment that matches the
          current{' '}
          <code>
            /<CurrentRoute slice={1} />
          </code>{' '}
          route.
        </p>

        <ul className="text-xs">
          <li>
            <code>
              @projetos/
              <CurrentRoute />
              /page.js
            </code>{' '}
            does not exist.
          </li>

          <li>
            <code>@projetos/default.js</code> exists.
          </li>
        </ul>

        <div className="not-prose flex">
          <Link
            href="/Vidro-laminado"
            className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium text-gray-100 hover:bg-gray-500 hover:text-white"
          >
            Home
          </Link>
        </div>
      </div>
    </Boundary>
  );
}
