"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { WithAnimation } from "@/app/hoc/withAnimation";

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formRef.current) {
      setIsLoading(false);
      return;
    }

    emailjs
      .sendForm(
        "service_9a9keej",
        "template_aov2dca",
        formRef.current,
        "ZdQaAZZty500Sro7i"
      )
      .then(
        (result) => {
          if (formRef.current) {
            formRef.current.reset();
          }
          setSuccess(true);
        },
        (error) => {}
      )
      .finally(() => setIsLoading(false));
  };
  return (
    //     Tailwind Play: https://play.tailwindcss.com/qIqvl7e7Ww
    <motion.div
      className='bg-transparent text-black flex flex-col w-4/6 min-h-screen items-start justify-center z-50 mx-auto'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      exit={{ opacity: 0, transition: { delay: 0 } }}
    >
      <div className='flex'>
        <div className=' w-full'>
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
              {"Contact Us"}
            </h1>
          </WithAnimation>
          <p className='mt-4 text-primary'>We would love to hear from you:</p>
          <form ref={formRef} onSubmit={sendEmail} className='mt-4'>
            <div className='flex flex-col w-full gap-6'>
              <div className='relative '>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
                  placeholder=' '
                  required
                />
                <label className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500'>
                  Name
                </label>
              </div>
              <div className='relative '>
                <input
                  type='text'
                  name='email'
                  id='email'
                  className='peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
                  placeholder=' '
                  required
                />
                <label className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500'>
                  Email
                </label>
              </div>
              <div className='relative  col-span-2'>
                <textarea
                  name='message'
                  id='message'
                  className='peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
                  placeholder=' '
                  required
                  cols={30}
                  rows={5}
                />
                <label className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500'>
                  Message
                </label>
              </div>
            </div>
            <button
              disabled={isLoading}
              type='submit'
              className='mt-5 items-center justify-center rounded-md bg-primary px-10 py-2 text-yellowish hover:bg-yellowish transition-colors duration-200 hover:text-primary'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
export default ContactForm;
