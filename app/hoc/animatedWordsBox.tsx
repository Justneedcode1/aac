import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
type Props = {
  initialX: string | number;
  initialY: number;
  visibleX: number;
  visibleY: number;
  delay: number;
  duration: number;
  arrOfWords: string[];
  marginTop: string;
  title: string;
  fontSize: string;
};

export const AnimatedWordsBox: React.FC<Props> = ({
  arrOfWords,
  initialX,
  initialY,
  visibleX,
  visibleY,
  duration,
  delay,
  marginTop,
  fontSize,
  title,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }

    if (!isInView) {
      mainControls.start("hidden");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);
  return (
    <div
      className='w-full'
      style={{
        marginTop,
      }}
      ref={ref}
    >
      <motion.div className='flex flex-col items-start justify-start w-full overflow-hidden'>
        {title && <span>{title}</span>}

        {arrOfWords?.map((word: string, index: number) => (
          <motion.span
            variants={{
              hidden: {
                y: initialY,
                x: initialX,
                transition: { duration: 0.2, delay: 0 },
              },
              visible: { y: visibleY, x: visibleX },
            }}
            initial='hidden'
            animate={mainControls}
            transition={{
              duration: duration * index + 0.5,
              delay: delay * index + 0.2,
              type: "spring",
              stiffness: 30,
              bounce: 0.3,
            }}
            key={index}
            className={`font-medium  sm:font-normal sm:${fontSize} text-base text-primary tracking-tighter w-full`}
          >
            {word.toLocaleUpperCase()}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
