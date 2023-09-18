"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  times: number;
};

const Looper: React.FC<Props> = ({ children, times }) => {
  const keys = [...Array(times)];
  return (
    <motion.div className='w-full flex flex-1 flex-row items-center h-full '>
      {keys.map((item, index) => (
        <motion.div
          initial={{ y: "-500vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 * index + 1 }}
          className='w-full h-full'
          key={index}
        >
          {React.cloneElement(children as React.ReactElement, { index })}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Looper;
