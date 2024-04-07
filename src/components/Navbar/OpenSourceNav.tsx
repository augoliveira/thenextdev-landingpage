/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Link from "next/link";
import React, { useState, useEffect } from 'react'

import Navlist from './NavUtils/Navlist'
import Navlist2 from './NavUtils/Navlist2'

type Props = object

const OpenSourceNav = (props: Props) => {
    const [show,setShow] = useState(false)
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
        <div id='myLi'  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <button onClick={handleOnclick} type='button' className={`flex items-center p-1 transition ease-in duration-150 max-lg:justify-between max-lg:font-semibold max-lg:w-full ${show ? "lg:text-neutral-300": ""}`}>
            <Link
              href="/quem-somos"
            >
                Quem Somos
            </Link>
            </button>
        </div>
  )
}

export default OpenSourceNav