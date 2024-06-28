"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";

const HeaderLinks = () => {
  const pathname = usePathname();
  const [hovered, setHovered] = useState("about");
  const nav_links = ["about", "work", "contact"];
  return (
    <nav className="flex space-x-8">
      {nav_links.map((link: string, index: number) => (
        <motion.button
          onHoverStart={() => setHovered(link)}
          key={`link-item-${index + 1}`}
        >
          <Link
            href={`#${link}`}
            className={clsx(
              "relative font-bold tracking-widest px-5 py-1 uppercase",
              {
                "text-white/10 line-through pointer-events-none":
                  pathname !== "/",
              }
            )}
          >
            {link}
            {hovered === link && (
              <motion.span
                layoutId="nav-item"
                className="absolute bg-gray-100 bg-opacity-10 inset-0 rounded-md"
              ></motion.span>
            )}
          </Link>
        </motion.button>
      ))}
    </nav>
  );
};

export default HeaderLinks;
