"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { AnimatedWordsBox } from "@/app/hoc/animatedWordsBox";

type Props = {
  marginTop: string;
  arrOfWords: string[];
};

const ColFour: React.FC<Props> = ({ marginTop, arrOfWords }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start", "end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  return (
    <motion.div className='h-screen w-full'>
      <motion.div className=' overflow-hidden w-full'>
        <AnimatedWordsBox
          arrOfWords={arrOfWords}
          initialX={"-100vh"}
          initialY={0}
          visibleX={0}
          visibleY={0}
          delay={0.2}
          duration={0.2}
          marginTop={marginTop}
          title=''
          fontSize={"text-base"}
        />
      </motion.div>
    </motion.div>
  );
};

export default ColFour;
