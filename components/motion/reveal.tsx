"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { fadeInUp, staggerContainer } from "@/components/motion/variants";

type RevealProps = {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
};

export function Reveal({ children, className, stagger = false }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger ? staggerContainer : fadeInUp}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={fadeInUp}>
      {children}
    </motion.div>
  );
}
