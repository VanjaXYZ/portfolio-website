"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderLinks = () => {
  const pathname = usePathname();
  return (
    <nav className="flex space-x-8">
      <Link
        href={"#about"}
        className={clsx("font-bold tracking-widest", {
          "text-white/10 line-through pointer-events-none": pathname !== "/",
        })}
      >
        About
      </Link>
      <Link
        href={"#work"}
        className={clsx("font-bold tracking-widest", {
          "text-white/10 line-through pointer-events-none": pathname !== "/",
        })}
      >
        Projects
      </Link>
      <Link
        href={"#contact"}
        className={clsx("font-bold tracking-widest", {
          "text-white/10 line-through pointer-events-none": pathname !== "/",
        })}
      >
        Contact
      </Link>
    </nav>
  );
};

export default HeaderLinks;
