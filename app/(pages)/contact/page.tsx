"use client";
import React, { useEffect } from "react";
import Contact from "../../components/contact/contactScreen";
import AnimatedRoute from "@/app/components/animatedRoute";

import { AnimatePresence } from "framer-motion";
import useMenuHook from "@/app/hooks/useMenuHook";
import ContactForm from "@/app/components/contact/contactForm";

const ContactUs: React.FC = () => {
  const { menuStatus } = useMenuHook();

  return (
    <div className='flex flex-col justify-between mx-auto'>
      <AnimatePresence>
        <AnimatedRoute key={1} />
        {!menuStatus && <ContactForm />}
        <Contact key={2} />
      </AnimatePresence>
    </div>
  );
};

export default ContactUs;
