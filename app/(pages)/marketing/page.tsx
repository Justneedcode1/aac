"use client";
import AnimatedRoute from "@/app/components/animatedRoute";
import Footer from "@/app/components/footer/footer";
import Hero from "@/app/components/hero/hero";
import HeroBranding from "@/app/components/hero/hero";
import ListITemtext from "@/app/hoc/listITemtext";
import useMenuHook from "@/app/hooks/useMenuHook";
import { digitalTexts } from "@/app/kits/constants";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const OurServices: React.FC = () => {
  const { menuStatus } = useMenuHook();

  return (
    <div className='min-h-screen relative'>
      <AnimatedRoute />
      <Hero title={"Digital Marketing Services"} />
      <div className='w-full flex sm:flex-row flex-col'>
        <div className='w-1/6'></div>
        <div className='sm:w-4/6 w-full flex sm:flex-row flex-col-reverse sm:items-start items-center relative'>
          <div className='sm:w-1/2 w-3/4 sm:py-[50vh]'>
            <AnimatePresence>
              {!menuStatus && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.3 }}
                  className='w-full'
                >
                  {digitalTexts.map((item, index) => (
                    <ListITemtext key={index} id={item.id}>
                      {item.text}
                    </ListITemtext>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <div className='w-1/2  sm:sticky fixed bottom-0 sm:top-0 h-screen flex items-end sm:items-center sm:p-8 '>
            <AnimatePresence>
              {!menuStatus && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.3 }}
                  className='w-full aspect-square rounded relative z-50'
                >
                  {digitalTexts.map((item: any, index: number) => {
                    return <item.card id={item?.id} key={index} />;
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className='w-1/6'></div>
      </div>
      <Footer />
    </div>
  );
};

export default OurServices;
