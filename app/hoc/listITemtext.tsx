"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import useCardHook from "../hooks/useCardHook";
import { useAppSelector } from "../kits/hooks";

type ListProps = {
  id: number;
  children: React.ReactNode;
};

const ListITemtext = ({ id, children }: ListProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const cardId = useAppSelector((state) => state.card.cardId);
  const { handleCardId } = useCardHook();

  useEffect(() => {
    if (isInView) {
      handleCardId(id);
    }
    if (!isInView && cardId === id) {
      handleCardId(null);
    }
  }, [isInView, id, handleCardId]);

  return (
    <p
      ref={ref}
      className={`sm:text-3xl text-xl sm:py-16 py-14 transition-colors duration-200 font-semibold ${
        isInView ? "text-primary" : "text-gray-300"
      }`}
    >
      {children}
    </p>
  );
};

export default ListITemtext;
