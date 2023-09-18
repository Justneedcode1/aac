"use client";
import useMenuHook from "@/app/hooks/useMenuHook";
import { AnimatePresence, motion } from "framer-motion";

type HeroProps = {
  title: string;
};

const Hero = ({ title }: HeroProps) => {
  const { menuStatus } = useMenuHook();
  return (
    <AnimatePresence>
      {!menuStatus && (
        <motion.div className='w-full flex flex-col items-center justify-center pt-[30vh] z-40 relative'>
          <motion.div className='w-4/6 h-1 mb-16'>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.6, duration: 1 }}
              className='h-1  bg-yellowish '
            ></motion.div>
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className='sm:text-5xl font-medium text-primary text-4xl w-4/6'
          >
            {title}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Hero;
