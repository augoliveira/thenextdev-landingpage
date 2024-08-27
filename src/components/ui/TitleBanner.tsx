import { twMerge } from "tailwind-merge";

interface Props {
  title?: string;
  subtitle?: string;
  className?: string;
}

import { motion, AnimatePresence } from 'framer-motion';

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

const TitleBanner = ({ subtitle, title, className }: Props) => {
  return (
    <div className="mx-auto flex w-full items-start justify-start overflow-hidden text-center lg:py-2">
    <motion.div
      className={twMerge(
        "w-full mx-auto bg-reactBd-titleBg mt-20 bg-fill bg-center mdl:py-20 border-b border-slate-600/30 pl-8 text-4xl font-extrabold leading-7 text-slate-400",
        className,
      )}
      variants={quote}
      initial="initial"
      animate="animate"
    >
      
       <motion.h4 
        animate={{ x: 100 }}
        onAnimationComplete={definition => {
          console.log('Completed animating', definition)
        }}
       className="text-secondaryColor uppercase text-xs mdl:text-sm tracking-[4px] mb-2">
          {subtitle}
        </motion.h4>
      {title.split(' ').map((word, index) => (
            <motion.span
              key={word + '_' + index}
              className="-mb-px inline-block border-b border-b-current py-2"
              variants={singelword}
            >
              {word}&nbsp;
            </motion.span>
          ))}
    </motion.div>
    </div>
  );
};

export default TitleBanner;
