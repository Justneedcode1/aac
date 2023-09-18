"use client";
import { motion } from "framer-motion";
import ContactComponent from "./contactComponent";
import AnimatedRoute from "../animatedRoute";

const InfosContact: React.FC = () => {
  return (
    <motion.div className=' min-h-screen w-full flex flex-row items-start justify-start overflow-hidden'>
      <AnimatedRoute />
      <motion.div className='w-1/6'></motion.div>
      <motion.div className='overflow-hidden flex flex-col gap-[30vh] w-4/6'>
        <ContactComponent
          key={1}
          title='PRICING'
          email='info@aetelco.com'
          reverse={true}
          icons={false}
          inquiry={"Pricing"}
        />
        <ContactComponent
          key={2}
          title='SERVICES'
          email='info@aetelco.com'
          reverse={false}
          icons={false}
          inquiry={"Services"}
        />
        <ContactComponent
          key={3}
          title='INFOS'
          email='info@aetelco.com'
          reverse={true}
          icons={true}
          inquiry={"General"}
        />
      </motion.div>
      <motion.div className='w-1/6'></motion.div>
    </motion.div>
  );
};
export default InfosContact;
