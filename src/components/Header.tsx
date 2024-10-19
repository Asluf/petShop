import { useState } from "react";
import Logo from "../assets/images/logo.png";
import { CiSearch } from "react-icons/ci";
import { MdClose, MdMenu, MdStars } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const [selectedCurrency, setSelectedCurrency] = useState("VND");

  const currencies = ["VND", "USD", "EUR", "GBP", "JPY"];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectCurrency = (currency: string) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
  };

  return (
    <>
      {/* for larger screen */}
      <header className="bg-transparent hidden md:flex justify-between items-center px-[15px] md:px-[100px] py-8">
        <div className="flex items-center gap-16">
          <img src={Logo} className="h-12" />
          <nav className="space-x-16 font-semibold">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/category" className="hover:underline">
              Category
            </Link>
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </nav>
          <nav className="flex items-center gap-4">
            <div className="relative">
              <CiSearch className="absolute top-[15px] left-[15px] font-bold text-lg" />
              <input
                type="text"
                className="w-[100%] pl-12 py-3 rounded-full bg-white text-gray-800"
                placeholder="Search something here!"
              />
            </div>
            <button className="flex justify-center items-center bg-[#003459] hover:bg-transparent text-white hover:text-black border-2 border-gray-800 px-6 py-3 rounded-full text-sm transition duration-[400ms]">
              Join the community
            </button>
            <div className="relative inline-block text-left">
              {/* Dropdown button */}
              <button
                className="flex items-center gap-2 ml-2 px-4 py-2"
                onClick={toggleDropdown}
              >
                <MdStars className="text-red-700 text-[25px]" />
                <span>{selectedCurrency}</span>
                {isOpen ? (
                  <IoIosArrowUp className="text-[15px]" />
                ) : (
                  <IoIosArrowDown className="text-[15px]" />
                )}
              </button>

              {/* Dropdown menu */}
              {isOpen && (
                <div className="z-[6] absolute left-0 mt-2 w-32 bg-white shadow-lg rounded-md border border-gray-200">
                  <ul className="py-1">
                    {currencies.map((currency) => (
                      <li
                        key={currency}
                        className="cursor-pointer hover:bg-gray-100 px-4 py-2 text-gray-700"
                        onClick={() => selectCurrency(currency)}
                      >
                        {currency}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
      {/* for mobile screen */}
      <header className="bg-transparent flex md:hidden justify-between items-center px-4 md:px-[100px] py-8">
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          {showMenu ? <MdClose /> : <MdMenu />}
        </button>

        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <img src={Logo} className="h-12" alt="Logo" />
        </div>

        <div className="md:flex items-center hidden">
          <CiSearch className="text-2xl" />
        </div>

        {showMenu && (
          <nav
            className={`bg-[#003459] fixed top-0 left-0 w-[250px] h-full shadow-lg z-[50] p-6 text-gray-100 transition-left duration-500 ease-in-out ${
              showMenu ? "left-0" : "-left-[250px]"
            }`}
          >
            <button
              onClick={() => setShowMenu(false)}
              className="text-2xl mb-8"
            >
              <MdClose />
            </button>
            <ul className="space-y-4">
              <hr />
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <hr />
              <li>
                <Link to="/category" onClick={toggleMenu}>
                  Category
                </Link>
              </li>
              <hr />
              <li>
                <a href="#" onClick={toggleMenu}>
                  About
                </a>
              </li>
              <hr />
              <li>
                <a href="#" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
              <hr />
            </ul>
          </nav>
         )}
      </header>
    </>
  );
};

export default Header;
