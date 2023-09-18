import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DigitalService from "../../images/digital-service.jpg"
import DigitalMarketing from "../../images/monitor-service.jpg"

function HomeScreen() {
  return (
    <motion.div className="">
      <motion.div className="flex  items-center justify-center font-extrabold">
        <Image className="rounded " objectFit="cover" fill alt="" src={DigitalService} />
      </motion.div>
      <motion.div className="flex items-center justify-center font-extrabold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ullam quibusdam nihil nemo facilis est ducimus repellendus perferendis eius aspernatur deleniti, nisi in vero, numquam ab? Reiciendis neque blanditiis doloremque?
      </motion.div>

      <motion.div className="items-center justify-center font-extrabold">
        <Image className="rounded " objectFit="cover" fill alt="" src={DigitalMarketing} />
      </motion.div>
      <motion.div className="items-center justify-center font-extrabold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ullam quibusdam nihil nemo facilis est ducimus repellendus perferendis eius aspernatur deleniti, nisi in vero, numquam ab? Reiciendis neque blanditiis doloremque?
      </motion.div>
    </motion.div>
    
  );
}
export default HomeScreen;