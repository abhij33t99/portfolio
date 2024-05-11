"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
const FadeIn = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
