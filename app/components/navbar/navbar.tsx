"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import logoImg from "../../images/logo.png";
import MenuButton from "../menu/menuButton";
import useMenuHook from "@/app/hooks/useMenuHook";
import Link from "next/link";

const Navbar = () => {
  const { handleMenuStatus, menuStatus } = useMenuHook();

  return (
    <div className='w-full bg-primary h-20 flex flex-row justify-between items-center'>
      <div className='p-2  flex flex-row items-center justify-start h-full gap-3'>
        <Image width={50} height={50} className='' src={logoImg.src} alt={""} />
        <div className=' font-medium text-white text-xl'>AE MARKETING</div>
      </div>
      <div className='hidden sm:flex flex-row h-full items-center justify-end gap-8 px-4'>
        <div className='text-white hover:text-yellowish duration-150 cursor-pointer'>
          <Link href={"/home"}>Home</Link>
        </div>
        <div className='text-white hover:text-yellowish duration-150 cursor-pointer'>
          <Link href={"/marketing"}>Marketing</Link>
        </div>
        <div className='text-white hover:text-yellowish duration-150 cursor-pointer'>
          <Link href={"/design"}>Design</Link>
        </div>
        <div className='text-white hover:text-yellowish duration-150 cursor-pointer'>
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>
      <MenuButton handleMenuOpen={handleMenuStatus} />
      <AnimatePresence>
        {menuStatus && (
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "fade", duration: 0.3 }}
            exit={{ x: "-100vw" }}
            className='fixed w-full sm:hidden flex h-screen top-0 right-0 flex-col items-center justify-center gap-4 bg-primary'
          >
            <div className='text-white hover:text-yellowish duration-150 cursor-pointer'>
              <Link href={"/home"}>Home</Link>
            </div>
            <div className='text-white hover:text-yellowish duration-150 cursor-pointer'>
              <Link href={"/marketing"}>Marketing</Link>
            </div>
            <div className='text-white hover:text-yellowish duration-150 cursor-pointer'>
              <Link href={"/design"}>Design</Link>
            </div>
            <div className='text-white hover:text-yellowish duration-150 cursor-pointer'>
              <Link href={"/contact"}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
