"use client";
import MenuButton from "./menuButton";
import useMenuHook from "../../hooks/useMenuHook";
import Looper from "@/app/hoc/looper";
import MenuColumn from "./menuColumn";
import useWindowDimensions from "@/app/hooks/useWindowDimensionsHook";
import { AnimatePresence, motion } from "framer-motion";
import { useAppSelector } from "@/app/kits/hooks";

const MenuScreen = () => {
  const { handleMenuStatus } = useMenuHook();
  const menuStatus = useAppSelector((state) => state.menu.menu.status);
  const { width } = useWindowDimensions();

  return (
    <div className='w-full h-full z-50'>
      <MenuButton handleMenuOpen={handleMenuStatus} />
      {width && width >= 800 && (
        <div className={`fixed top-0 w-full ${menuStatus ? "z-40" : ""} `}>
          <Looper times={6}>
            <MenuColumn menuStatus={menuStatus} index={0} />
          </Looper>
        </div>
      )}

      {width && width < 800 && (
        <div
          className={`fixed top-0 w-full flex flex-row ${
            menuStatus ? "z-40" : ""
          } `}
        >
          <motion.div
            className={`w-1/6 border-r-[1px] h-screen border-gray-300 overflow-hidden`}
          >
            <AnimatePresence>
              {menuStatus && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%", originX: 0 }}
                  exit={{ x: "30vw", transition: { delay: 1, duration: 0.8 } }}
                  transition={{ duration: 0.8 }}
                  className='h-screen bg-primary w-full'
                ></motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <div className='w-4/6'>
            <Looper times={2}>
              <MenuColumn menuStatus={menuStatus} index={0} />
            </Looper>
          </div>

          <motion.div
            className={`w-1/6 border-r-[1px] h-screen border-gray-300 `}
          >
            <AnimatePresence>
              {menuStatus && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%", originX: 0 }}
                  exit={{ x: "30vw", transition: { delay: 1, duration: 0.8 } }}
                  transition={{ duration: 0.8 }}
                  className='h-screen bg-primary w-full'
                ></motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
      <motion.div
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
          type: "spring",
          stiffness: 30,
          bounce: 0.3,
        }}
        exit={{ y: "100vh", opacity: 0, transition: { delay: 0.2 } }}
        className={`fixed flex ${
          width && width < 800 ? "flex-col" : "flex-row"
        }  items-end justify-end top-2 right-0 z-50 w-full `}
      >
        <div className=' flex flex-col w-4/6 sm:w-1/6 items-center '>
          <span
            className={`${
              menuStatus ? "text-white" : "text-primary"
            } text-xs font-normal`}
          >
            Services enquiries
          </span>
          <a
            href='mailto:info@aetelco.com'
            className='text-yellowish text-xs font-normal'
          >
            info@aetelco.com
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default MenuScreen;
