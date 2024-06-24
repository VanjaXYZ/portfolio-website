"use client";
import Image from "next/image";
import React from "react";
import AvatarImg from "../assets/avatar_no_background.png";
import { motion } from "framer-motion";

const AvatarImage = () => {
  return (
    <motion.section
      className="h-fit justify-center w-full items-center hidden lg:flex"
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Image
        src={AvatarImg}
        width={650}
        height={800}
        alt="Avatar image"
        className="rounded-full overflow-hidden drop-shadow-[0_35px_35px_rgba(255,255,255,0.1)]"
      />
    </motion.section>
  );
};

export default AvatarImage;
