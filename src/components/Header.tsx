import { useState } from "react";
import Logo from "../assets/images/logo.png";
import { CiSearch } from "react-icons/ci";
import { MdStars } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedCurrency, setSelectedCurrency] = useState("VND");

  const currencies = ["VND", "USD", "EUR", "GBP", "JPY"];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectCurrency = (currency: string) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
  };

  return (
    <>
      <header className="bg-transparent flex justify-between items-center px-[15px] md:px-[100px] py-8">
        {/* <h1 className="text-3xl font-bold">Monito</h1> */}
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
          <div className="flex items-center gap-4">
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
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
