"use client";
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { WithAnimation } from "../hoc/withAnimation";
import Image from "next/image";

type Props = {
  reverse: boolean;
  image: string;
  title: string;
  text: string;
};

const SectionThreeComponent: React.FC<Props> = ({
  reverse,
  image,
  title,
  text,
}) => {
  const targetRef = useRef(null);

  return (
    <div
      ref={targetRef}
      className={`w-full flex flex-col relative ${
        reverse ? "sm:flex-row" : "sm:flex-row-reverse"
      } justify-start items-start`}
    >
      <div className='w-full  overflow-hidden sm:4 md:p-16 p-2'>
        <WithAnimation
          initialOpacity={0}
          visibleOpacity={1}
          initialX={0}
          visibleX={0}
          duration={0.3}
          delay={1}
          initialY={0}
          visibleY={0}
          initialScale={1}
          visibleScale={1}
          width={""}
        >
          <div className='overflow-hidden w-full h-full rounded relative flex flex-row justify-center'>
            <div className='z-20 absolute left-2 bottom-2 flex flex-col'>
              <WithAnimation
                initialOpacity={0}
                visibleOpacity={1}
                initialX={0}
                visibleX={0}
                duration={0.8}
                delay={0.3}
                initialY={-150}
                visibleY={0}
                initialScale={1}
                visibleScale={1}
                width={"100%"}
              >
                <motion.span className='text-yellowish sm:font-extralight font-normal text-sm sm:text-3xl w-full '>
                  {title}
                </motion.span>
              </WithAnimation>
              <WithAnimation
                initialOpacity={0}
                visibleOpacity={1}
                initialX={0}
                visibleX={0}
                duration={0.5}
                delay={0.3}
                initialY={"50vh"}
                visibleY={0}
                initialScale={1}
                visibleScale={1}
                width={"100%"}
              >
                <motion.span className='text-yellowish font-medium text-sm sm:text-xl w-full '>
                  {text}
                </motion.span>
              </WithAnimation>
            </div>
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className='relative w-full aspect-square flex flex-col items-center shadow-lg cursor-pointer'
            >
              <div className=' bg-gradient-to-bl absolute top-0 right-0 w-full h-full z-10 rounded from-gray-400 to-black opacity-30 text-white'></div>

              <Image
                className='rounded '
                objectFit='cover'
                fill
                alt=''
                src={image}
              />
            </motion.div>
          </div>
        </WithAnimation>
      </div>
    </div>
  );
};

export default SectionThreeComponent;
