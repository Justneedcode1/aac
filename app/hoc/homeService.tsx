"use client";
import { motion } from "framer-motion";

type HomeServiceProps = {
  children: React.ReactNode;
  position: any;
};

const HomeService = ({ children, position }: HomeServiceProps) => {
  return (
    <motion.div
      style={{ position }}
      className={`${
        position === "relative" ? "hidden" : "flex"
      } w-full  flex-row justify-center items-center inset-0`}
    >
      <div className='w-full flex justify-start items-start'>{children}</div>
    </motion.div>
  );
};

export default HomeService;
