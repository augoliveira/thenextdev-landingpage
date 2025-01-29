'use client'

import * as ScrollArea from '@radix-ui/react-scroll-area';
import { cn } from '@/lib/utils'
import { useState, type Dispatch } from 'react'
import { Button } from '../button/index';
import { HiHome, HiSearch } from 'react-icons/hi';
import Box from '../ui/Box';
import { Label } from '@radix-ui/react-label';
import { Input, type InputProps } from './input';
import type { SetStateAction } from 'jotai';

const STAPE = ['Unit', 'address', 'Members', 'Terget']

export const Unitereg = () => {
  const [stape, setStape] = useState(0)
  return (
    <section className="container">
      <div className="h-screen flex justify-center items-center mx-4 flex-col">
        <h1 className="mb-6 uppercase font-bold">Resistration</h1>
        <div className="w-full flex flex-col md:flex-row md:bg-black md:bg-opacity-10 md:p-5 md:max-w-[650px] md:rounded-md">
            <Box>
              {STAPE.map((item, index) => (
              <StapeButton
              stape={index}
              key={index}
              title={item}
              setStape={setStape}
              currentStape={stape}
              />
            ))}
            </Box>
          <div>
          <ScrollArea.Root className="h-96 ml-0 md:ml-8 w-full bg-slate-900 bg-opacity-10 mt-5 p-5 dark:bg-opacity-20 rounded-md mdl:bg-transparent">
          <ScrollArea.Viewport className="sm:col-span-2">
              {stape === 0 && <Stape0 setStape={function (value: SetStateAction<number>): void {
                  throw new Error('Function not implemented.');
                } } />}
              {stape === 1 && <Stape1 />}
              {stape === 2 && <Stape2 />}
              {stape === 3 && <Stape3 />}
              </ScrollArea.Viewport>
              </ScrollArea.Root>
          </div>
        </div>
      </div>
    </section>
  )
}

const StapeButton = ({
  title,
  stape,
  setStape,
  currentStape,
  }: {
    title: string
    stape: number
    setStape: (n: number) => void
    currentStape: number
  }) => {
    return (
      <div>
        <p className="hidden md:block uppercase opacity-30 text-xs text-slate-400">{`Step ${stape + 1}`}</p>
        <button className={cn(
        `text-md flex h-auto w-full cursor-pointer flex-row items-center gap-x-4 py-1 font-medium text-neutral-400 transition hover:text-white`,
        stape === currentStape && 'underline decoration-wavy text-green-600'
        )}
          onClick={() => setStape(stape)}
          >
            <HiHome size={26} />
            {title}
        </button>
      </div>
    )
  }

  const Stape0 = ({ setStape }: { setStape: Dispatch<SetStateAction<number>> }) => {
    return (
    <div className="w-full md:pr-3 pb-4">
      <h1 className="text-lg">Glazing Design</h1>
      <div className="mt-3 space-y-3">
        
      </div>
      <div className="flex justify-between mt-3">
        <Button disabled className="w-[w-100px]" size="sm" variant="outline">
          Back
        </Button>
        <Button
        onClick={() => setStape(( r:number ) => r + 1)}
        className="w-[100px]"
        size="sm"
        variant="outline"
        >
          Next
        </Button>
      </div>
    </div>
    )
  }

    const Stape1 = () => {
    return <div>Stape 1</div>
      
  }
  const Stape2 = () => {
    return <div>Stepe 2</div>
  }
  const Stape3 = () => {
    return <div>Stepe 3</div>
  }

  interface INPUTLABEL extends InputProps {
    title: string
  }

  const InputWithLabel = ({ title, placeholder, ...props }: INPUTLABEL) => {
    return (
      <div className="w-full px-3 space-y-1">
        <Label htmlFor="name">{title}</Label>
        <Input
          className="w-full"
          placeholder={placeholder ? placeholder : title} {...props} />
      </div>
    );
  }