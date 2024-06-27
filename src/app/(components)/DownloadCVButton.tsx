"use client";
import { motion } from "framer-motion";
const DownloadCVButton = () => {
  return (
    <motion.a
      href={"/vanja_sukurma_cv.pdf"}
      download={"vanja_sukurma_cv.pdf"}
      className="bg-white/5 rounded-md p-4 uppercase tracking-widest text-neutral-100 hover:bg-white/10 text-center"
      whileHover={{ scale: 1.05, width: "235px" }}
    >
      Download CV
    </motion.a>
  );
};

export default DownloadCVButton;
