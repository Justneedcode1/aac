import { motion } from "framer-motion";
import Image from "next/image";
import logoImage from "../../images/logo.png";

const MenuColumnOne = () => {
  return (
    <motion.div
    //   initial={{ x: "100vw" }}
    //   animate={{ x: 0 }}
    //   transition={{ delay: 0.3, duration: 0.8 }}
    //   exit={{ x: "-100vw", transition: { delay: 0.2, duration: 0.8 } }}
    //   className='w-full p-2 sm:p-4 flex flex-col sm:flex-row items-center justify-start sm:gap-4'
    >
      {/* <Image height={50} width={50} src={logoImage.src} alt={""} />
      <motion.span className=' text-xs sm:text-xl text-white font-medium'>
        AE Marketing
      </motion.span> */}
    </motion.div>
  );
};

export default MenuColumnOne;
