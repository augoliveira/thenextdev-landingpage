/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React, { useState } from 'react'

import clsx from 'clsx';

import { demos, type Item } from '@/lib/demos';

import Navlist from './NavUtils/Navlist'
import Navlist2 from './NavUtils/Navlist2'


// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
}

const ProductNav = (props: Props) => {
    const [show,setShow] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);
    
    const handleOnclick = () => {
        if (window.innerWidth < 1024 ) {
                setShow(!show)
        }
    }

    const handleMouseEnter = () => {
        if(window.innerWidth > 1024){
            setShow(true)
        }
    }

    const handleMouseLeave = () => {
        if(window.innerWidth > 1024){
            setShow(false)
        }
    }
   return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <button onClick={() => setShow(!show)}  type='button' className={`flex items-center p-1 max-lg:font-semibold  transition ease-in duration-150 max-lg:justify-between max-lg:w-full ${show ? "lg:text-neutral-300 ": ""}`}>
                Produto
                <svg opacity="0.5" aria-hidden="true" height="16" fill='currentColor' viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={` ml-1 transition-all ease-in duration-200  max-lg:scale-x-125 ${show ? "lg:mt-2 opacity-40 max-lg:0": "mt-0 max-lg:-rotate-90"}`}>
                    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                </svg>
            </button>
            <div className={`relative lg:absolute lg:flex -ml-5 bg-slate-100 rounded-md lg:py-4 py-2 transition ease-in duration-150 ${show ? "opacity-100 " : "opacity-0 invisible max-lg:hidden"}`}>
                <div className='lg:px-4 lg:border-r-[1px] mb-4 lg:mb-0 lg:pr-10  '>
                <nav className="space-y-6 px-2 pb-24 pt-5">
          {demos.map((section) => {
            return (
              <div key={section.name}>
                <div className="mb-2 px-3 text-base leading-7 font-semibold uppercase tracking-wider text-neutral-800">
                  <div>{section.name}</div>
                </div>

                <div className="space-y-1">
                  {section.items.map((item) => (
                    <GlobalNavItem key={item.slug} item={item} close={close} />
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
                </div>
                <div className='lg:px-8 lg:pr-20 py-2 max-lg:pl-6'>
                    <span className='my-1 text-neutral-800 font-semibold'>Explore</span>
                    <ul className='text-sm'>
                        <li className='text-neutral-500 hover:text-blue-500 py-2'>
                            <a href="#">All Features</a>
                        </li>
                        <li className='py-2'>
                            <Navlist2 main='Documentaion' path='M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z'/>
                        </li>
                        <li className='py-2'>
                            <Navlist2 main='GitHub skills' path='M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z'/>
                        </li>
                        <li className='py-2'>
                            <Navlist2 main='Blog' path='M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z'/>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
  )
}

export default ProductNav

function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        'block rounded-md px-3 py-2 text-base leading-7 font-medium hover:text-gray-300',
        {
          'text-gray-400 hover:bg-gray-800': !isActive,
          'text-gray-300 hover:bg-gray-700 hover:text-white': isActive,
        },
      )}
    >
      {item.name}
    </Link>
  );
}
