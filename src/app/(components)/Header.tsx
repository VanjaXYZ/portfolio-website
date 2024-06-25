import { FolderKanban, House, Info } from "lucide-react";
import HeaderLinks from "./HeaderLinks";
import Link from "next/link";

const Header = () => {
  return (
    <header className="justify-between px-12 py-2 sticky top-0 bg-black/90 sm:flex hidden z-10">
      <p className="font-bold uppercase">Vanja Šukurma</p>
      <HeaderLinks />
    </header>
  );
};

export const MobileHeader = () => {
  return (
    <header className="flex sm:hidden sticky bottom-0 justify-between px-12 py-2 bg-black/90 w-full">
      <Link href={"#about"} className="font-bold tracking-widest">
        <House />
      </Link>
      <Link href={"#work"} className="font-bold tracking-widest">
        <FolderKanban />
      </Link>
      <Link href={"#contact"} className="font-bold tracking-widest">
        <Info />
      </Link>
    </header>
  );
};

export default Header;
