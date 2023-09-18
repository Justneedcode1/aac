"use client";
import React, { useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";

type Props = {
  children: any;
  initialScale: number;
  visibleScale: number;
  initialX: number | string;
  initialY: number | string;
  visibleX: number | string;
  visibleY: number | string;
  duration: number;
  delay: number;
  width: number | string;
  initialOpacity: number;
  visibleOpacity: number;
};

export const WithAnimation: React.FC<Props> = ({
  children,
  initialScale,
  visibleScale,
  initialX,
  initialY,
  visibleX,
  visibleY,
  duration,
  initialOpacity,
  visibleOpacity,
  delay,
  width,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // if (!isInView) {
    //   mainControls.start("hidden");
    // }
  }, [isInView]);
  return (
    <div
      ref={ref}
      style={{
        width,
      }}
    >
      <motion.div
        variants={{
          hidden: { y: initialY, x: initialX, scale: initialScale },
          visible: { y: visibleY, x: visibleX, scale: visibleScale },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{
          duration,
          delay,
          type: "spring",
          stiffness: 30,
          bounce: 0.3,
        }}
        style={{ width }}
      >
        {children}
      </motion.div>
    </div>
  );
};
