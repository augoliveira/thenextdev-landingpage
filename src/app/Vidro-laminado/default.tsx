import { CurrentRoute } from '@/app/Vidro-laminado/_ui/current-route';
import { Boundary } from '@/components/ui/boundary';
import Link from 'next/link';

export default function Default() {
  return (
    <Boundary labels={['@children/default.tsx']} color="blue" size="small">
      <div className="prose prose-sm prose-invert max-w-none">
        <h2 className="text-lg font-bold">Default UI</h2>

        <p>
          Default UI is rendered because the implicit <code>@children</code>{' '}
          slot <strong>does not</strong> contain a route segment that matches
          the current{' '}
          <code>
            /<CurrentRoute slice={1} />
          </code>{' '}
          route.
        </p>

        <ul className="text-xs">
          <li>
            <code>
              Vidro-laminado/
              <CurrentRoute />
              /page.js
            </code>{' '}
            OR{' '}
            <code>
            Vidro-laminado/@children/
              <CurrentRoute />
              /page.js
            </code>{' '}
            do not exist.
          </li>

          <li>
            <code>Vidro-laminado/default.js</code> OR{' '}
            <code>Vidro-laminado/@children/default.js</code> exists.
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
