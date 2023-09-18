import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuColumnOne from "./menuColumnOne";
import MenuColumnTwo from "./menuColumnTwo";
import MenuColumnThree from "./menuColumnThree";
import MenuColumnFour from "./menuColumnFour";
import MenuColumnFive from "./menuColumnFive";

const MenuColumn: React.FC<{
  index: number;
  menuStatus: boolean;
}> = ({ menuStatus, index }) => {
  const renderColumn = () => {
    switch (index) {
      case 0:
        return <MenuColumnOne />;
      case 1:
        return <MenuColumnTwo />;
      case 2:
        return <MenuColumnThree />;
      case 3:
        return <MenuColumnFour />;
      case 4:
        return <MenuColumnFive />;
      default:
        return <MenuColumnThree />;
    }
  };
  return (
    <motion.div
      className={`w-full border-r-[1px] h-screen border-gray-300 overflow-hidden z-40`}
    >
      <AnimatePresence>
        {menuStatus && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%", originX: 0 }}
            exit={{ x: "30vw", transition: { delay: 1, duration: 0.8 } }}
            transition={{ duration: 0.8 }}
            className='h-screen bg-primary w-full'
          >
            {renderColumn()}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MenuColumn;
