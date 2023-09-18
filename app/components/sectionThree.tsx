"use client";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useAppSelector } from "../kits/hooks";
import useWindowDimensions from "../hooks/useWindowDimensionsHook";
import mediaImage from "../images/media_production.jpg";
import eventImage from "../images/event_planning.jpg";
import webImage from "../images/web-service.jpg";
import monitorImage from "../images/monitor-service.jpg";
import graphicImage from "../images/graphic-service.jpg";
import digitalImage from "../images/digital-service.jpg";

import { useRef } from "react";
import SectionThreeComponent from "./sectionThreeComponent";
import { AnimatedWordsBox } from "../hoc/animatedWordsBox";
import Link from "next/link";
import HomeService from "../hoc/homeService";

const SectionThree = () => {
  const menuStatus = useAppSelector((state) => state.menu.menu.status);
  const { width } = useWindowDimensions();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const scaleX = useSpring(scrollYProgress);

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4],
    [0, 0.51, 1, 1, 0]
  );

  const opacityTwo = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4, 0.5, 0.6, 0.7],
    [0, 0, 1, 1, 0, 0]
  );

  const opacityThree = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 0.7, 0.8],
    [0, 0, 1, 1, 0]
  );
  const opacityFour = useTransform(
    scrollYProgress,
    [0, 0.6, 0.7, 0.8, 0.9, 1],
    [0, 0, 0, 1, 1, 1]
  );

  const x1_text = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6],
    [0, 0, 0, 0, 100, 200, 0]
  );
  const x2_text = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
    [0, 0, 0, 0, 100, 200, 0]
  );
  const x3_text = useTransform(
    scrollYProgress,
    [0, 0.6, 0.7, 0.8, 0.9],
    [0, 0, 0, 100, 200]
  );
  const x4_text = useTransform(scrollYProgress, [0, 0.6, 0.9, 1], [0, 0, 0, 0]);

  const position = useTransform(scrollYProgress, (pos) => {
    return pos > 0.5 ? "relative" : "absolute";
  });

  const positionTwo = useTransform(scrollYProgress, (pos) => {
    return pos < 0.3 || pos > 0.7 ? "relative" : "absolute";
  });

  const positionThree = useTransform(scrollYProgress, (pos) => {
    return pos < 0.5 || pos > 0.9 ? "relative" : "absolute";
  });

  const positionFour = useTransform(scrollYProgress, (pos) => {
    return pos < 0.7 || pos == 1 ? "relative" : "absolute";
  });

  return (
    <div
      ref={targetRef}
      className='flex flex-col w-full items-center relative justify-start h-[800vh]  '
    >
      <AnimatePresence>
        {!menuStatus && (
          <div className='w-4/6 h-[100vh] sticky flex flex-col items-center justify-center top-0'>
            <HomeService position={position.get()}>
              <motion.div style={{ opacity }} className='w-1/2'>
                <Link href={"/marketing"}>
                  <SectionThreeComponent
                    reverse={true}
                    image={digitalImage.src}
                    title={"Digital"}
                    text={"Marketing"}
                  />
                </Link>
              </motion.div>
              <motion.div
                style={{ x: x1_text, opacity }}
                className='w-1/2 flex justify-start items-start pt-2 md:pt-16 sm:pt-4 '
              >
                <AnimatedWordsBox
                  arrOfWords={[
                    "We craft online campaigns ",
                    "that resonate, connect, and convert",
                    "driving your brand",
                    "to the forefront of the",
                    "digital landscape.",
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
            </HomeService>
            <HomeService position={positionTwo.get()}>
              <motion.div style={{ opacity: opacityTwo }} className='w-1/2'>
                <Link href={"/branding"}>
                  <SectionThreeComponent
                    reverse={true}
                    image={monitorImage.src}
                    title={"Branding"}
                    text={"& Identity"}
                  />
                </Link>
              </motion.div>
              <motion.div
                style={{ x: x2_text, opacity: opacityTwo }}
                className='w-1/2 flex items-start justify-start pt-2 md:pt-16 sm:pt-4'
              >
                <AnimatedWordsBox
                  arrOfWords={[
                    "We craft brand stories",
                    "that are not only",
                    "visually appealing,",
                    "but also",
                    "emotionally resonant",
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
            </HomeService>
            <HomeService position={positionThree.get()}>
              <motion.div style={{ opacity: opacityThree }} className='w-1/2'>
                <Link href={"/strategy"}>
                  <SectionThreeComponent
                    reverse={true}
                    image={eventImage.src}
                    title={"Strategy"}
                    text={"& Consultancy"}
                  />
                </Link>
              </motion.div>
              <motion.div
                style={{ x: x3_text, opacity: opacityThree }}
                className='w-1/2 flex items-start justify-start pt-2 md:pt-16 sm:pt-4'
              >
                <AnimatedWordsBox
                  arrOfWords={[
                    "From concept to ",
                    "execution we curate events ",
                    "thatare not ",
                    "just occasions",
                    "but unforgettable experiences",
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
            </HomeService>
            <HomeService position={positionFour.get()}>
              <motion.div style={{ opacity: opacityFour }} className='w-1/2'>
                <Link href={"/design"}>
                  <SectionThreeComponent
                    reverse={true}
                    image={webImage.src}
                    title={"Creative"}
                    text={"And Design"}
                  />
                </Link>
              </motion.div>
              <motion.div
                style={{ x: x4_text, opacity: opacityFour }}
                className='w-1/2 flex items-start justify-start pt-2 md:pt-16 sm:pt-4'
              >
                <AnimatedWordsBox
                  arrOfWords={[
                    "Our team of skilled ",
                    "designers and developers",
                    "work in harmony to craft ",
                    "websites that not only captivate",
                    "but also convert.",
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
            </HomeService>
            {/* 
            
          
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{ position: positionFour }}
              className={`w-4/6 flex flex-row items-start  top-[25%]`}
            >
             
            </motion.div>*/}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionThree;
