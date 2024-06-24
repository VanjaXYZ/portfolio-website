import HeaderLinks from "./HeaderLinks";

const Header = () => {
  return (
    <header className="flex justify-between px-12 py-2 sticky top-0 bg-black/90">
      <p>Vanja Šukurma</p>
      <HeaderLinks />
    </header>
  );
};

export default Header;
