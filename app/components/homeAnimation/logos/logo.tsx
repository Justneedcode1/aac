"use client";
import useWindowDimensions from "@/app/hooks/useWindowDimensionsHook";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const arcMotion = {
  rest_disappear: {
    opacity: 0,
    transition: {
      duration: 1,
      type: "tween",
      ease: "easeIn",
    },
  },
  rest: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1,
      type: "tween",
      ease: "easeIn",
    },
  },

  hover: {
    rotateY: "180deg",
    transition: {
      duration: 1,
      type: "tween",
      ease: "easeOut",
    },
  },

  hoverEnd: {
    rotateY: "0deg",
    transition: {
      duration: 1,
      type: "tween",
      ease: "easeOut",
    },
  },
};
const arcMotionTwo = {
  rest_disappear: {
    opacity: 0,
    transition: {
      duration: 1,
      type: "tween",
      ease: "easeIn",
    },
  },
  rest: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1,
      type: "tween",
      ease: "easeIn",
    },
  },

  hover: {
    rotateY: "180deg",
    transition: {
      duration: 1.5,
      type: "tween",
      ease: "easeOut",
    },
  },
  hoverEnd: {
    rotateY: "0deg",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeOut",
    },
  },
};
export function Logo() {
  const { width } = useWindowDimensions();
  const controls = useAnimation();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1]);

  const handleHoverEnd = (e: any) => {
    controls.start("hoverEnd");
  };

  useEffect(() => {
    controls.start("rest");
    return () => {
      return;
    };
  }, []);
  return (
    <motion.div
      ref={targetRef}
      style={{ opacity, scale }}
      className=' w-full h-screen flex flex-col items-center justify-center'
    >
      <motion.div
        initial={"rest_disappear"}
        whileHover={"hover"}
        animate={controls}
        onHoverEnd={handleHoverEnd}
        className='cursor-pointer z-30 w-full flex flex-col items-center justify-center'
      >
        <motion.svg
          version='1.0'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 500.000000 500.000000'
          preserveAspectRatio='xMidYMid meet'
          className={`${
            width && width > 800
              ? "w-[25rem] h-[25rem] fixed top-100"
              : "w-[15rem] h-[15rem] fixed top-100"
          } `}
        >
          {/* Define the linear gradient */}
          <defs>
            <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#ffb703' />
              <stop offset='100%' stopColor='#050550' />
            </linearGradient>
          </defs>

          {/* Add your SVG logo motion.paths here */}
          <motion.g
            transform='translate(0.000000,500.000000) scale(0.100000,-0.100000)'
            fill='url(#gradient)'
            stroke='none'
          >
            <motion.path
              variants={arcMotionTwo}
              d='M2360 4749 c-315 -26 -696 -152 -965 -319 -407 -254 -732 -649 -900
          -1095 -34 -89 -85 -257 -85 -278 0 -4 43 -6 96 -5 l97 3 39 120 c166 515 546
          950 1033 1185 292 141 553 201 875 201 272 0 506 -44 732 -136 286 -117 478
          -244 689 -454 230 -229 389 -488 490 -796 l41 -125 98 0 98 0 -24 87 c-76 278
          -221 564 -399 788 -74 93 -252 272 -345 348 -333 269 -776 444 -1210 477 -151
          11 -208 11 -360 -1z'
              fill='url(#gradient)'
            />
            <motion.path
              variants={arcMotion}
              d='M2345 3886 c-176 -30 -305 -73 -451 -150 -285 -151 -508 -392 -633
          -683 -21 -49 -41 -100 -45 -115 l-6 -28 83 0 83 0 28 68 c151 369 496 652 901
          737 108 23 303 31 406 16 349 -51 689 -261 872 -539 51 -77 137 -246 137 -269
          0 -10 21 -13 85 -13 47 0 85 4 85 8 0 21 -41 124 -80 202 -71 143 -148 248
          -265 365 -202 202 -430 327 -705 385 -132 28 -376 36 -495 16z'
              fill='url(#gradient)'
            />
            <motion.path
              variants={arcMotion}
              d='M1210 2497 c0 -15 45 -128 78 -198 231 -480 725 -789 1262 -789 211
          0 389 40 615 139 246 108 498 354 634 620 47 91 91 199 91 223 0 4 -36 8 -79
          8 l-80 0 -45 -97 c-216 -455 -646 -733 -1136 -733 -419 0 -808 211 -1041 565
          -39 59 -129 237 -129 255 0 6 -38 10 -85 10 -47 0 -85 -2 -85 -3z'
              fill='url(#gradient)'
            />
            <motion.path
              variants={arcMotionTwo}
              d='M410 2353 c0 -21 45 -169 82 -273 110 -304 291 -577 539 -815 174
          -167 341 -283 562 -391 723 -352 1588 -277 2246 194 402 288 703 721 835 1205
          l24 87 -98 0 -98 0 -42 -127 c-207 -630 -716 -1126 -1341 -1306 -305 -89 -673
          -104 -969 -41 -715 152 -1287 663 -1508 1349 l-39 120 -97 3 c-53 1 -96 -1
          -96 -5z'
              fill='url(#gradient)'
            />
          </motion.g>
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}
