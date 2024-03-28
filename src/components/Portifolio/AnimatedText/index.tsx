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

import { Container } from './styles';

export function AnimatedText({ text }: Props) {
  return (
    <Container>
      <div className='mx-auto flex w-full items-start justify-start overflow-hidden text-start lg:py-2'>
        <motion.h1
          className={
            '${}className} pl-4 flex text-4xl font-extrabold leading-7 text-[#085F20] border-b border-slate-600/30'
          }
          variants={quote}
          initial='initial'
          animate='animate'
        >
          {text.split(' ').map((word, index) => (
            <motion.span
              key={word + '_' + index}
              className='inline-block -mb-px py-2 border-b border-b-current'
              variants={singelword}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </Container>
  );
}
