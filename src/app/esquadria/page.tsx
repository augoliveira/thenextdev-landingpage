import { ExternalLink } from '@/components/ui/external-link';
import Link from 'next/link';
import { PageIntroduction } from './page-introduction';
import Projects from "./Projects";
import NextImage from "../../components/ui/NextImage"

import BgOverview from "../../../public/beach-house-interior-1.f151eb56.jpg"

const items = [
  {
    name: 'Active links',
    slug: 'active-links',
    description: 'Update the style of the current active link',
    source:
    "/bg-esquadria.jpg",
  },
  {
    name: 'Breadcrumbs',
    slug: 'breadcrumbs',
    description: 'Shared server-side Breadcrumb UI using Parallel Routes',
    source:
    "/bg-esquadria.jpg",
  },
  {
    name: 'Updating URL search params',
    slug: 'search-params',
    description: 'Update searchParams using `useRouter` and `<Link>`',
    source:
    "/bg-esquadria.jpg",
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
              <NextImage
                src={item?.source}
                alt="fileImage"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover group-hover:opacity-75"
                width={1000}
                height={500}
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="z-10 mt-3 text-3xl font-bold text-white">
                {item.name}
              </div>

              {item.description ? (
                <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
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
