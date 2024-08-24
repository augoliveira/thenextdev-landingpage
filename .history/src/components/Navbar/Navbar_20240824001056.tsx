/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Image from 'next/image';
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { usePathname } from "next/navigation";
import { HiArrowNarrowRight } from 'react-icons/hi'

import { motion } from 'framer-motion'
import { Phone, X } from "lucide-react";


import Logo from '../../../public/logo-campanha.png'
import { ModeToggle } from '../../app/_components/mode-toggle';
import { Button } from '../../components/button'
import Container from '../Container'
import Navlist2 from './NavUtils/Navlist2'
import OpenSourceNav from './OpenSourceNav'
import ProductNav from './ProductNav'
import SolutionNav from './SolutionNav'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = object

const Navbar = (props: Props) => {
    const [loading, setLoading] = useState(true);
    const [showNav, setShowNav] = useState(false)
    const close = () => setIsOpen(false);
    const handleContact = () => {
      const contactSection = document.querySelector('#contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
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

    const [toggleNav, setToggleNav] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);

  const pathname = usePathname();

  const [navSize, setNavSize] = useState("90px");
  const [navColor, setNavColor] = useState("#010e02");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavColor("#063b14") : setNavColor("#16161");
    window.scrollY > 10 ? setNavSize("90px") : setNavSize("90px");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
    
  return (
    <Container>
    <div 
    style={{
      backgroundColor: navColor,
      height: navSize,
      transition: "all 1s",
    }}
    className="w-full h-[90px] bg-transparent fixed top-0 z-50 px-4 nav"
    >
        <button className='hidden'></button>
        <div className='flex items-center max-lg:justify-between max-lg:flex-row-reverse'>
            <div className='flex justify-between items-center max-lg:w-full'>
                <div className='lg:hidden'>
                <div
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
            >
              <Phone color="#2dd4bf" /> (61) 98669-2775
            </div>
                </div>
                <Link
                  href="/"
                  onClick={close}
                >
                  <Image
              src={Logo}
              alt="Logo"
              width={100}
              height={30}
              loading="eager"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`w-full h-full object-cover group-hover:scale-110 duration-500 transition-all ${
                loading
                  ? 'scale-110 blur-2xl grayscale'
                  : 'scale-100 blur-0 grayscale-0'
              }}`}
              onLoad={() => setLoading(false)}
            />
                </Link>
                <button type='button' onClick={() => setShowNav(!showNav)} className='lg:hidden cursor-pointer'>
                    <div className={`w-[23px] h-[2px] transition ease-in duration-150  bg-white ${showNav ? "rotate-45 mb-0  translate-y-[1px]" : "rotate-0 mb-1"} `}></div>
                    <div className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white ${showNav ? "hidden mb-0" : "mb-1"} `}></div>
                    <div className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white  ${showNav ? "-rotate-45 mb-0" : "rotate-0"}`}></div>
                </button>
            </div>
            <div className={` flex w-full max-lg:absolute transition ease-in duration-200 top-20 z-40  ${showNav ? "max-lg:translate-x-0 max-lg:scale-100":" max-lg:max-h-0 max-lg:scale-y-50 max-lg:-translate-y-1/4"}`}>
                <div className='flex max-lg:flex-col lg:items-center lg:justify-between max-lg:justify-between max-sm:w-10/12 max-sm:mx-auto sm:ml-auto max-lg:w-[320px] lg:w-full max-lg:max-h-[500px]  overflow-y-auto lg:mb-0 max-lg:bg-white max-lg:rounded-lg'>
                    <nav className='mt-0 px-3 lg:px-6 text-[15.5px] mb-0 max-lg:py-10 max-lg:px-5'>
                        <ul className='flex lg:items-center lg:space-x-2 max-lg:flex-col max-lg:text-neutral-700 max-lg:text-xl max-lg:font-medium max-lg:space-y-6 max-lg:h-auto  overflow-y-auto'>
                            <OpenSourceNav/>
                            <ProductNav/>
                            <SolutionNav/>
                            
                            <li id='myLi'  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <button onClick={handleOnclick} type='button' className={`flex items-center p-1 transition ease-in duration-150 max-lg:justify-between max-lg:font-semibold max-lg:w-full ${show ? "lg:text-neutral-300": ""}`}>
            <Link
              href="/contato"
            >
                Contato
            </Link>
            </button>
        </li>
                            <li><ModeToggle /></li>
                        </ul>
                    </nav>
                    <div className='lg:flex items-center max-lg:flex-col lg:px-0 px-3 mb-3 lg:mb-0 text-left lg:space-x-4'>
                        <div className='lg:flex mb-2 lg:mb-0 relative max-lg:mr-4'>
                        <Link href="https://github.com/noorjsdivs" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          (61) 9 8669-2775
        </motion.button>
      </Link>
                        </div>
                        <Button className="w-max shadow-button" onClick= {handleContact}>
                            Orçamento
                          <HiArrowNarrowRight size={18} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Container>
  )
}

export default Navbar

function setIsOpen(arg0: boolean) {
  throw new Error('Function not implemented.')
}
