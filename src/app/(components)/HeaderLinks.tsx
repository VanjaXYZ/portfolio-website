import Link from "next/link";
import React from "react";

const HeaderLinks = () => {
  return (
    <nav className="flex space-x-8">
      <Link href={"#about"} className="font-bold tracking-widest">
        About
      </Link>
      <Link href={"#work"} className="font-bold tracking-widest">
        Work
      </Link>
      <Link href={"#contact"} className="font-bold tracking-widest">
        Contact
      </Link>
    </nav>
  );
};

export default HeaderLinks;
