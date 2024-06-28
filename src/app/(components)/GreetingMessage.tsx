"use client";
import React from "react";
import { Hand } from "lucide-react";
import { motion } from "framer-motion";

const GreetingMessage = () => {
  return (
    <section className="flex flex-col xl:flex-row justify-center space-x-2 items-center select-none w-56 absolute left-[70%]">
      <motion.div
        initial={{ rotate: "-20deg" }}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 1.15, rotate: "0deg" }}
        transition={{ duration: 0.25 }}
      >
        <Hand size={40} className="hover:cursor-grab" />
      </motion.div>
      <p className="text-xl">Give me five!</p>
    </section>
  );
};

export default GreetingMessage;
