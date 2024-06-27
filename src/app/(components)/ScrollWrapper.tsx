"use client";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import React from "react";

const ScrollWrapper = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(20, 20, 20)", "rgb(255, 255, 255)"]
  );
  return (
    <>
      <motion.div
        className={`sticky top-10 w-full h-2 origin-left z-10`}
        style={{ scaleX, background }}
      />
      {children}
    </>
  );
};

export default ScrollWrapper;
