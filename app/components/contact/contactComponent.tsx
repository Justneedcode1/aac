"use client";
import { WithAnimation } from "@/app/hoc/withAnimation";
import { useAppSelector } from "@/app/kits/hooks";
import { AnimatePresence, motion } from "framer-motion";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

type Props = {
  title: string;
  email: string;
  reverse: boolean;
  icons: boolean;
  inquiry: string;
};
const ContactComponent: React.FC<Props> = ({
  title,
  email,
  icons,
  reverse,
  inquiry,
}) => {
  const menuStatus = useAppSelector((state) => state.menu.menu.status);
  return (
    <div className='w-full '>
      <AnimatePresence>
        {!menuStatus && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.2 }}
            exit={{ opacity: 0 }}
            className={`w-full z-20 flex flex-col ${
              reverse ? " sm:flex-row-reverse" : "sm:flex-row"
            }`}
          >
            <div className='w-full sm:w-1/2 z-20 overflow-hidden'>
              <motion.div className='w-full flex flex-row overflow-hidden'>
                <WithAnimation
                  initialOpacity={0}
                  visibleOpacity={1}
                  initialX={0}
                  visibleX={0}
                  duration={0.5}
                  delay={0.3}
                  initialY={"-50vw"}
                  visibleY={0}
                  initialScale={1}
                  visibleScale={1}
                  width={"100%"}
                >
                  <div className='w-full mb-20'>
                    <span className=' text-xs text-primary font-medium'>
                      Dept.
                    </span>
                  </div>
                </WithAnimation>
                <WithAnimation
                  initialOpacity={0}
                  visibleOpacity={0.5}
                  initialX={0}
                  visibleX={0}
                  duration={0.5}
                  delay={0.3}
                  initialY={"-50vw"}
                  visibleY={0}
                  initialScale={1}
                  visibleScale={1}
                  width={"100%"}
                >
                  <div className='w-full'>
                    <span className=' text-xs text-primary font-medium'>
                      {inquiry} inquiries
                    </span>
                  </div>
                </WithAnimation>
              </motion.div>
              <div className='w-full flex flex-col gap-8 items-start  z-20'>
                <WithAnimation
                  initialOpacity={0}
                  visibleOpacity={1}
                  initialX={"-50vw"}
                  visibleX={0}
                  duration={0.7}
                  delay={0.3}
                  initialY={0}
                  visibleY={0}
                  initialScale={1}
                  visibleScale={1}
                  width={"100%"}
                >
                  <h1 className='font-semibold underline text-yellowish text-4xl sm:text-7xl'>
                    {title}
                  </h1>
                </WithAnimation>
                <WithAnimation
                  initialOpacity={0}
                  visibleOpacity={1}
                  initialX={"-50vw"}
                  visibleX={0}
                  duration={0.7}
                  delay={0.3}
                  initialY={0}
                  visibleY={0}
                  initialScale={1}
                  visibleScale={1}
                  width={"100%"}
                >
                  <a
                    className='text-primary  font-normal text-base sm:text-2xl cursor-pointer duration-300 sm:hover:text-yellowish z-20'
                    href={`mailto:${email}`}
                  >
                    {email}
                  </a>
                </WithAnimation>

                {icons && (
                  <div className='w-full flex flex-col items-center justify-start z-20 gap-8 mt-4'>
                    <motion.a>
                      <AiOutlineTwitter
                        className={
                          "rounded-full text-5xl text-primary hover:text-yellowish duration-300 hover:cursor-pointer"
                        }
                      />
                    </motion.a>
                    <motion.a href=''>
                      <AiFillFacebook
                        className={
                          " rounded-2xl text-5xl text-primary hover:text-yellowish duration-300 hover:cursor-pointer"
                        }
                      />
                    </motion.a>
                    <motion.a href=''>
                      <AiFillInstagram
                        className={
                          " rounded-2xl text-5xl text-primary hover:text-yellowish duration-300 hover:cursor-pointer"
                        }
                      />
                    </motion.a>
                  </div>
                )}
              </div>
            </div>

            <div className='w-1/2'></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactComponent;
