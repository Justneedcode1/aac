"use client";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { motion } from "framer-motion";
import useWindowDimensions from "@/app/hooks/useWindowDimensionsHook";
import { useAppSelector } from "@/app/kits/hooks";

type Props = {
  handleMenuOpen: () => void;
};

const MenuButton: React.FC<Props> = ({ handleMenuOpen }) => {
  const { width } = useWindowDimensions();
  const menuOpen = useAppSelector((state) => state.menu.menu.status);
  return (
    <div className='min-h-screen  fixed flex flex-col items-start z-50 justify-center top-0 left-0'>
      <motion.div className='fixed  w-full p-2 sm:p-4 flex flex-col sm:flex-row items-center justify-start sm:gap-4 top-0 left-0'>
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1, duration: 0.8 }}
          className={`text-xs sm:text-xl  w-full font-medium overflow-hidden z-50 ${
            menuOpen ? "text-white" : "text-primary"
          }`}
        >
          AEMarketing
        </motion.span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={handleMenuOpen}
        className={menuOpen ? "burger-bar" : "burger-bar"}
      >
        <span
          className={
            menuOpen
              ? "bg-white h-6 w-[2px] clicked"
              : "bg-primary h-6 w-[2px] unclicked"
          }
        ></span>
        <span
          className={
            menuOpen
              ? "bg-white h-6 w-[2px] clicked"
              : "bg-primary h-6 w-[2px] unclicked"
          }
        ></span>
        <span
          className={
            menuOpen
              ? "bg-white h-6 w-[2px] clicked"
              : "bg-primary h-6 w-[2px] unclicked"
          }
        ></span>
        <motion.span
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: menuOpen ? 3 : 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className={`font-medium text-xs ml-2 ${
            menuOpen ? "text-white" : "text-primary"
          }`}
        >
          {width && width > 800 ? (menuOpen ? "Close" : "Menu") : ""}
        </motion.span>
      </motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 1, duration: 0.8 }}
        className='flex flex-col items-start justify-start overflow-hidden gap-10 absolute w-full bottom-10 left-0 '
      >
        <span className='px-4'>
          <AiOutlineTwitter
            className={`${
              menuOpen ? "text-white" : "text-primary"
            } text-lg hover:text-secondary hover:cursor-pointer`}
          />
        </span>
        <span className='px-4'>
          <AiFillFacebook
            className={`${
              menuOpen ? "text-white" : "text-primary"
            } text-lg hover:text-secondary hover:cursor-pointer`}
          />
        </span>
        <span className='px-4'>
          <AiFillInstagram
            className={`${
              menuOpen ? "text-white" : "text-primary"
            } text-lg hover:text-secondary hover:cursor-pointer`}
          />
        </span>
      </motion.div>
    </div>
  );
};

export default MenuButton;
