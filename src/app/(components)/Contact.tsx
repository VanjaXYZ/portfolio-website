import React from "react";
import GithubIcon from "../assets/github.png";
import LinkedinIcon from "../assets/linkedin.png";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <footer id="contact" className="flex">
      <Link href={"https://github.com/VanjaXYZ"} target="_blank">
        <Image src={GithubIcon} width={80} height={80} alt="Github" />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/vanja-sukurma-458905250/"}
        target="_blank"
      >
        <Image src={LinkedinIcon} width={80} height={80} alt="LinkedIn" />
      </Link>
    </footer>
  );
};

export default Contact;
