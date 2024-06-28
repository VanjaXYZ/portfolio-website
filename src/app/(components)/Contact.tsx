"use client";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <footer id="contact" className="flex space-x-12">
      <motion.span
        className="bg-white/5 p-2 rounded-md flex items-center justify-center"
        whileHover={{ x: "25%", scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href={"https://github.com/VanjaXYZ"} target="_blank">
          <Github size={40} />
        </Link>
      </motion.span>
      <motion.span
        className="bg-white/5 p-2 rounded-md flex items-center justify-center"
        whileHover={{ x: "-25%", scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href={"https://www.linkedin.com/in/vanja-sukurma-458905250/"}
          target="_blank"
        >
          <Linkedin size={40} />
        </Link>
      </motion.span>
    </footer>
  );
};

export default Contact;
