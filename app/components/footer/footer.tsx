"use client";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import Email from "../email/email";
import useMenuHook from "@/app/hooks/useMenuHook";

const Footer = () => {
  const targetRef = useRef(null);
  const { menuStatus } = useMenuHook();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.7, 0.8, 0.9],
    [-50, -40, -30, -20, -10, 0, 15]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.7, 0.8, 0.9],
    [-100, -80, -60, -40, -20, 0, 30]
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, transition: { delay: 0.5 } }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        ref={targetRef}
        className='flex flex-col items-center justify-center space-y-10 h-[100vh] relative w-full'
      >
        <motion.div
          className='flex flex-col min-w-full h-full items-center justify-center'
          transition={{ type: "spring", damping: 10, stiffness: 100 }}
        >
          {!menuStatus && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className='text-6xl sm:text-9xl font-bold h-full  z-30 flex flex-col w-full items-center '
            >
              <a 
              href="mailto:info@aetelco.com" 
              className="w-full items-center justify-center flex">
              <motion.div
                className=' text-primary leading-[4rem] sm:leading-[6.5rem] border-black hover:text-yellowish transition duration-300 top-[35%] cursor-pointer absolute'
                style={{ y: y2 }}
                transition={{ type: "spring", damping: 10, stiffness: 100 }}
              >
                S T A R T{" "}
              </motion.div>
              <motion.div
                className=' text-primary bg-white leading-[4rem] sm:leading-[6.5rem] border-black hover:text-yellowish transition duration-300 top-[35%] cursor-pointer absolute'
                style={{ y }}
                transition={{ type: "spring", damping: 10, stiffness: 100 }}
              >
                S T A R T{" "}
              </motion.div>
              <motion.div
                style={{ paddingTop: -10 }}
                className=' text-primary bg-white border-black leading-[4rem] sm:leading-[6.5rem] hover:text-yellowish transition top-[35%] duration-300 cursor-pointer absolute'
                transition={{ type: "spring", damping: 10, stiffness: 100 }}
              >
                S T A R T{" "}
              </motion.div>
              </a>
            </motion.div>
          )}
        </motion.div>
        {!menuStatus && <Email />}
      </motion.div>
    </AnimatePresence>
  );
};

export default Footer;
