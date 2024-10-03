'use client'
import ActiveLink from './../ui/ActiveLink'
import { useActivePath } from './helper'
import { HiHome, HiOutlineUsers, HiFolder, HiCalendar } from 'react-icons/hi';

type NavigationItem = {
  href: string
  icon: React.ComponentType
  name: string
}

const navigation: NavigationItem[] = [
  { href: '/cobertura', icon: HiHome, name: 'Dashboard' },
  { href: '/feedback', icon: HiOutlineUsers, name: 'Feedback' },
  { href: '/roadmap', icon: HiFolder, name: 'Roadmap' },
  { href: '/comments', icon: HiCalendar, name: 'Comments' },
]

export function Navigation() {
  const checkActivePath = useActivePath()

  return (
    <nav>
      <ul className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
        {navigation.map(({ href, icon: Icon, name }) => (
          <li className="text-md flex h-auto w-full cursor-pointer flex-row items-center gap-x-4 py-1 font-medium text-neutral-400 transition hover:text-white" key={href}>
            <ActiveLink href={href} className={checkActivePath(href) ? 'active' : ''}>
            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <Icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                </div>
              <span className="inline-flex items-center">{name}</span>
            </ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}