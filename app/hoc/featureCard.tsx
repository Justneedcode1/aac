"use client";

import { AnimatePresence } from "framer-motion";
import useCardHook from "../hooks/useCardHook";
import useMenuHook from "../hooks/useMenuHook";
import { motion } from "framer-motion";

type FeatureCardProps = {
  children: React.ReactNode;
  gradient: string | undefined;
  id: any;
};

const FeatureCard = ({ children, gradient, id }: FeatureCardProps) => {
  const { cardId } = useCardHook();
  const { menuStatus } = useMenuHook();
  const incomingCardId = id?.id;
  return (
    <motion.div
      className={`bg-gradient-to-br ${gradient} h-2/2 w-2/2 rounded absolute inset-0 transition-opacity z-50 ${
        incomingCardId === cardId ? "opacity-100" : "opacity-0"
      } `}
    >
      {children}
    </motion.div>
  );
};

export default FeatureCard;
