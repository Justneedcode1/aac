"use client";

import { Logo } from "./components/homeAnimation/logos/logo";
import { useAppSelector } from "./kits/hooks";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";
import SectionThree from "./components/sectionThree";
import { useEffect, useRef, useState } from "react";
import useMenuHook from "./hooks/useMenuHook";
import Footer from "./components/footer/footer";
import AnimatedRoute from "./components/animatedRoute";

export default function Home() {
  const { menuStatus, handleMenuStatus } = useMenuHook();
  const [scrollValue, setScrollValue] = useState<number>(0);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    if (menuStatus) {
      handleMenuStatus();
    }
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrollValue(scrollYProgress.get());
      currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main ref={targetRef} className='relative min-h-screen w-full'>
      <AnimatedRoute />
      <AnimatePresence>{!menuStatus && <Logo />}</AnimatePresence>
      <SectionThree />
      <motion.div className='w-full flex flex-row justify-center items-center fixed bottom-8'>
        <AnimatePresence>
          {scrollValue < 0.99 && !menuStatus && (
            <motion.div
              initial={{ y: 0 }}
              animate={{
                y: [20, 0, 20],
              }}
              transition={{ duration: 1, delay: 1, repeat: Infinity }}
              exit={{
                opacity: 0,
                y: 100,
                transition: { duration: 0.5 },
              }}
            >
              <AiOutlineArrowDown className=' w-10 h-20 text-primary' />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <Footer />
    </main>
  );
}
