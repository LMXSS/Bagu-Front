"use client";

import { motion } from "framer-motion"; // Certifique-se de que está importando de "framer-motion", não "motion/react"

type Props = {
  color: string;
  size: number;
  initialX: number;
  initialY: number;
  finalX: number;
  finalY: number;
};

function AnimatedDot({
  color,
  size,
  initialX,
  initialY,
  finalX,
  finalY,
}: Props) {
  return (
    <motion.div
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        borderRadius: "50%",
        position: "absolute",
        opacity: 0.1,
      }}
      initial={{
        x: initialX,
        y: initialY,
      }}
      animate={{
        x: finalX,
        y: finalY,
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse", // Vai e volta
        ease: "easeInOut",
      }}
    />
  );
}

export default AnimatedDot;
