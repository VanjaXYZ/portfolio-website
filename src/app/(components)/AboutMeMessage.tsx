"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { splitString } from "../utils/splitString";

const AboutMeMessage = () => {
  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const introText = `Hello! I am Vanja Šukurma, a passionate frontend  developer with over 2 years of practical experience. I specialize in  React and Next.js environments, focusing on creating intuitive and  user-friendly web applications. In my work, I emphasize efficiency,  scalability, and aesthetics, and I enjoy the challenges that come with  the dynamic world of web technologies. 🚀`;

  const splitIntroText = splitString(introText);
  return (
    <motion.p
      ref={ref}
      className="xl:text-xl text-sm tracking-wider lg:text-lg bg-black text-white"
      initial="hidden"
      whileInView="reveal"
      transition={{ staggerChildren: isInView ? 0 : 0.01 }}
    >
      {splitIntroText.map((char: string, index: number) => (
        <motion.span
          key={char + index}
          transition={{ duration: 0.35 }}
          variants={charVariants}
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default AboutMeMessage;
