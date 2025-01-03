import { useState } from "react";
import menuIcon from "../assets/icons/menu.svg";
import closeIcon from "../assets/icons/close.svg";
const NAV_STYLES = {
  backgroundColor: "#0e0e0e",
  color: "whitesmoke",
};
const HamburgerMenu = ({ pages }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      {isOpen ? (
        <img
          className="hover:cursor-pointer w-10"
          src={closeIcon.src}
          onClick={toggleMenu}
          alt="Menú"
        />
      ) : (
        <img
          className="hover:cursor-pointer w-10"
          src={menuIcon.src}
          onClick={toggleMenu}
          alt="Menú"
        />
      )}
      <nav
        className={`fixed mt-20 z-10 top-0 right-0 w-full h-full transform transition-all duration-500 ease-in-out 
          ${
            isOpen
              ? "-translate-x-0 opacity-100 scale-100"
              : "translate-x-full opacity-0 scale-95"
          }`}
        style={NAV_STYLES}
        id="responsive-menu"
      >
        <div id="menu-items" className="flex flex-col items-center mt-4 gap-2">
          {pages.map((page) => (
            <div
              className="flex justify-center w-full py-4 hover:opacity-85 hover:cursor-pointer"
              id="menu-item"
            >
              <span className="text-xl">{page.name}</span>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default HamburgerMenu;
