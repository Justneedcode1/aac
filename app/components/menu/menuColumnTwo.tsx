import useMenuHook from "@/app/hooks/useMenuHook";
import useWindowDimensions from "@/app/hooks/useWindowDimensionsHook";
import { navElements } from "@/app/kits/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const MenuColumnTwo = () => {
  const { width } = useWindowDimensions();

  return (
    <motion.div
      className={` ${
        width && width <= 800 ? "absolute left-[-100%]" : "relative"
      } w-full flex flex-col items-start justify-center h-full z-40`}
    >
      {navElements?.map((navElement, index) => (
        <motion.span
          initial={{ x: "100vw" }}
          animate={{
            x: 0,
            transition: { duration: 0.8, delay: 0.2 * index },
          }}
          whileHover={{ scale: 0.9, originX: 0 }}
          transition={{ duration: 0.2 }}
          exit={{
            x: "100vw",
            transition: { delay: 0.2 * index, duration: 0.8 },
          }}
          className={`font-hover tracking-tight font-semibold text-white text-2xl sm:text-4xl cursor-pointer w-full hover:text-yellowish z-50`}
          key={index} 
        >
          <Link href={`/${navElement.value}`}>
            {navElement?.title?.toLocaleUpperCase()}
          </Link>
        </motion.span>
      ))}
    </motion.div>
  );
};

export default MenuColumnTwo;
