import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <footer id="contact" className="flex space-x-12">
      <Link href={"https://github.com/VanjaXYZ"} target="_blank">
        <Github />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/vanja-sukurma-458905250/"}
        target="_blank"
      >
        <Linkedin />
      </Link>
    </footer>
  );
};

export default Contact;
