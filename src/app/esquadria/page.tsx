import { ExternalLink } from '@/components/ui/external-link';
import Link from 'next/link';
import { PageIntroduction } from './page-introduction';
import Projects from "./Projects";

import BgOverview from "../../../public/beach-house-interior-1.f151eb56.jpg"

const items = [
  {
    name: 'Active links',
    slug: 'active-links',
    description: 'Update the style of the current active link',
  },
  {
    name: 'Breadcrumbs',
    slug: 'breadcrumbs',
    description: 'Shared server-side Breadcrumb UI using Parallel Routes',
  },
  {
    name: 'Updating URL search params',
    slug: 'search-params',
    description: 'Update searchParams using `useRouter` and `<Link>`',
  },
];


export default function Page() {
  return (
    <>
    <PageIntroduction />
    <div className="space-y-6">
      <Projects />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 py-28 px-28">
        {items.map((item) => {
          return (
            <Link
              href={`/esquadria/${item.slug}`}
              key={item.name}
              className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
            >
              <div className="font-medium text-gray-200 group-hover:text-gray-50">
                {item.name}
              </div>

              {item.description ? (
                <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                  {item.description}
                </div>
              ) : null}
            </Link>
          );
        })}
      </div>

      <div className="flex gap-2">
        <ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/patterns">
          Code
        </ExternalLink>
      </div>
    </div>
    </>
  );
}
