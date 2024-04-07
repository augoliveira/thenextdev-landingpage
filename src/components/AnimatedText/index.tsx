/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React from 'react';

interface Props {
  text: string;
}

import { motion } from 'framer-motion';

const quote = {
  initial: {
    opacity: 1
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerchildren: 0.08
    }
  }
};
const singelword = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    }
  }
};



export function AnimatedText({ text }: Props) {
  return (
    <div>
      <div className='mx-auto flex w-full items-center justify-center overflow-hidden text-center lg:py-8'>
      <div className="h-[2px] w-[100px] mr-8 bg-green-600"></div>
        <motion.h1
          className={
            '${}className} mt-4 mb-4 text-4xl font-extrabold tracking-tight text-slate-700'
          }
          variants={quote}
          initial='initial'
          animate='animate'
        >
          {text.split(' ').map((word, index) => (
            <motion.span
              key={word + '_' + index}
              className='inline-block'
              variants={singelword}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>
        <div className="h-[2px] w-[100px] ml-2 bg-green-600"></div>
      </div>
    </div>
  );
}