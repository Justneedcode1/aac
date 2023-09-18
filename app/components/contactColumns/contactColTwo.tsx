"use client";
import { motion } from "framer-motion";
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
// import colTwo from "../../components/screenColumns/colTwo"
// import Footer from '../footers/app'

interface Props {
  title: string;
  email: string;
}

const InfosContact: React.FC<Props> = ({ title, email }) => {
  return (
    <motion.div className="h-screen items-center justify-center">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 1, duration: 0.8 }}
        className='flex flex-col items-start justify-start overflow-hidden gap-8 absolute w-full'
      >
        Dept:
        <h1 className="font-extrabold underline text-4xl">{title}</h1>
        <a 
        className="text-primary font-bold text-2xl underline sm:hover:text-yellowish" 
        href="mailto:info@aetelco.com">{email}</a>
        <a className='px-4' href="mailto:info@aetelco.com">
          <AiOutlineTwitter
          className={'bg-slate-200 rounded-full text-5xl hover:text-blue-600 hover:cursor-pointer'}
          />
        </a>
        <a className='px-4' href="">
          <AiFillFacebook
            className={'bg-slate-100 rounded-2xl text-5xl hover:text-blue-600 hover:cursor-pointer'}
          />
        </a>
        <a className='px-4' href="">
          <AiFillInstagram
            className={'bg-slate-100 rounded-2xl text-5xl hover:text-secondary hover:cursor-pointer'}
          />
        </a>
        <motion.div>
        </motion.div>
      </motion.div>
      {/* <Footer /> */}
    </motion.div>
  );
};
export default InfosContact;

