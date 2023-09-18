"use client";
import { motion } from "framer-motion";

const AnimatedRoute = () => {
  return (
    <motion.div
      initial={{ width: "100%" }}
      animate={{ width: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      exit={{ width: "100%" }}
      className='fixed top-0 left-0 bg-primary w-full h-screen overflow-hidden flex flex-col items-center justify-center z-50'
    >
      {[...Array(15)].map((item: any, index: number) => (
        <motion.div
          key={index}
          initial={{
            width: "0",
          }}
          animate={{
            width: ["0%", "100%", "100%", "100%", "0%"],
          }}
          exit={{ width: 0 }}
          transition={{ duration: 1.5 }}
          className=' h-2 bg-yellowish m-auto flex flex-row  '
        ></motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedRoute;
