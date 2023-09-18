"use client";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useEffect } from "react";
import { AnimatedWordsBox } from "../hoc/animatedWordsBox";
import useWindowDimensions from "../hooks/useWindowDimensionsHook";
import { useAppSelector } from "../kits/hooks";

const ServicesSection = () => {
  const menuStatus = useAppSelector((state) => state.menu.menu.status);
  const textRef = useRef(null);

  const { width } = useWindowDimensions();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const scaleX = useSpring(scrollYProgress);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [0.5, 1, 1, 1, 1, 1, 1, 1, 0.8, 0.5]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [-300, -150, -100, -100, -50, 0, 0, 0, 0, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [0, 100, 190, 280, 370, 460, 550, 640, 730, 820]
  );

  const y2 = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [150, 200, 260, 330, 410, 500, 600, 710, 830, 950]
  );

  const y1 = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [400, 450, 520, 600, 700, 820, 960, 1120, 1200, 1300]
  );
  return (
    <motion.div
      ref={targetRef}
      // style={{ opacity }}
      className={`w-full flex flex-row items-center justify-start h-[300vh] mt-[100vh] relative`}
    >
      <motion.div className='w-1/6 h-full'></motion.div>
      {width && width >= 800 && (
        <div className='w-4/6 flex flex-col h-full'>
          <motion.div className={`w-full  flex flex-row  `}>
            <motion.div style={{ y, opacity }} className={`w-2/4  `}>
              <motion.div
                style={{ scaleX, originX: 0 }}
                className='h-1 bg-yellowish w-full mb-4'
              ></motion.div>
              <AnimatedWordsBox
                arrOfWords={[
                  "YOUR HOME",
                  "IN THE WORLD",
                  "OF MARKETING",
                  "AND ADVERTISING",
                ]}
                initialX={"-100vh"}
                initialY={0}
                visibleX={0}
                visibleY={0}
                delay={0.1}
                duration={0.3}
                marginTop={""}
                title={""}
                fontSize={"text-3xl"}
              />
            </motion.div>

            <motion.div style={{ y: y3, opacity }} className='w-2/4   '>
              <motion.div
                style={{ scaleX, originX: 0 }}
                className='h-1 bg-yellowish w-full mb-4'
              ></motion.div>
              <AnimatedWordsBox
                arrOfWords={[
                  "NAVIGATE THE PATH",
                  "TO GROWTH,",
                  "INNOVATION,",
                  "AND UNPARALLELED",
                  "SUCCESS",
                ]}
                initialX={"-100vh"}
                initialY={0}
                visibleX={0}
                visibleY={0}
                delay={0.1}
                duration={0.3}
                marginTop={""}
                title={""}
                fontSize={"text-3xl"}
              />
            </motion.div>
          </motion.div>
          <motion.div className={`w-full  flex flex-row  `}>
            <motion.div style={{ y: y1, opacity }} className={`w-2/4  `}>
              <motion.div
                style={{ scaleX, originX: 0 }}
                className='h-1 bg-yellowish w-full mb-4'
              ></motion.div>
              <AnimatedWordsBox
                arrOfWords={[
                  "YOUR HOME",
                  "IN THE WORLD",
                  "OF MARKETING",
                  "AND ADVERTISING",
                ]}
                initialX={"-100vh"}
                initialY={0}
                visibleX={0}
                visibleY={0}
                delay={0.1}
                duration={0.3}
                marginTop={""}
                title={""}
                fontSize={"text-3xl"}
              />
            </motion.div>

            <motion.div style={{ y: y2, opacity }} className='w-2/4 h-full  '>
              <motion.div
                style={{ scaleX, originX: 0 }}
                className='h-1 bg-yellowish w-full mb-4'
              ></motion.div>
              <AnimatedWordsBox
                arrOfWords={[
                  "NAVIGATE THE PATH",
                  "TO GROWTH,",
                  "INNOVATION,",
                  "AND UNPARALLELED",
                  "SUCCESS",
                ]}
                initialX={"-100vh"}
                initialY={0}
                visibleX={0}
                visibleY={0}
                delay={0.1}
                duration={0.3}
                marginTop={""}
                title={""}
                fontSize={"text-3xl"}
              />
            </motion.div>
          </motion.div>
        </div>
      )}
      {width && width < 800 && (
        <motion.div className={` w-4/6 h-full flex flex-col gap-8`}>
          <motion.div style={{ y, opacity }} className='w-4/4 '>
            <motion.div
              style={{ scaleX: scaleX, originX: 0 }}
              className='h-1 bg-yellowish w-full mb-4'
            ></motion.div>
            <AnimatedWordsBox
              arrOfWords={[
                "DISCORVER",
                "THE POWER",
                "OF INNOVATION,",
                "CREATIVITY,",
                "AND PARTNERSHIP",
              ]}
              initialX={"-100vh"}
              initialY={0}
              visibleX={0}
              visibleY={0}
              delay={0.1}
              duration={0.3}
              marginTop={""}
              title={""}
              fontSize={"text-3xl"}
            />
          </motion.div>

          <motion.div style={{ y: y3, opacity }} className='w-4/4 '>
            <motion.div
              style={{ scaleX: scaleX, originX: 0 }}
              className='h-1 bg-yellowish w-full mb-4'
            ></motion.div>
            <AnimatedWordsBox
              arrOfWords={[
                "WE BELIEVE",
                "IN YOUR",
                "EXTRAORDINARY",
                "PROTENTIAL",
              ]}
              initialX={"-100vh"}
              initialY={0}
              visibleX={0}
              visibleY={0}
              delay={0.1}
              duration={0.3}
              marginTop={""}
              title={""}
              fontSize={"text-3xl"}
            />
          </motion.div>
        </motion.div>
      )}
      <motion.div className='w-1/6 h-full relative z-30'></motion.div>
    </motion.div>
  );
};

export default ServicesSection;
