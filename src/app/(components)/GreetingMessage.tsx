"use client";
import React from "react";
import { Hand } from "lucide-react";
import { motion } from "framer-motion";

const GreetingMessage = () => {
  return (
    <section className="flex space-x-4 items-center">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Hand size={32} className="hover:cursor-grab" />
      </motion.div>
      <p className="text-xl">give me five !</p>
    </section>
  );
};

export default GreetingMessage;
