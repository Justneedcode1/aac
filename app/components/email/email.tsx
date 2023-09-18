"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Email = () => {
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
    <motion.div
      className='bg-transparent text-black py-6 flex flex-col w-full absolute bottom-6'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <form ref={formRef} onSubmit={sendEmail}>
        <div className='container mx-auto flex flex-col items-end justify-end'>
          <div className='flex flex-col sm:flex-row w-full gap-2 items-center justify-end z-30'>
            <input
              placeholder='Subscribe to our newsletter'
              id='email'
              type='email'
              required
              name='email'
              className=' bg-primary px-2 py-2 text-sm sm:w-72 w-3/4 text-white font-medium  rounded  outline-none border border-gray-300'
            />
            <button
              disabled={isLoading}
              type='submit'
              className=' text-primary border border-gray-300 hover:text-yellowish mx-2 px-4 py-1 rounded hover:bg-primary transition duration-300'
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default Email;
