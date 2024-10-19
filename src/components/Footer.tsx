import { Newsletter } from "./NewsLetter";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
      }}
      className="py-8 md:py-[40px] px-[15px] md:px-[100px]"
    >
      <Newsletter />
      <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
        <nav className="flex gap-8 font-semibold">
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
        <nav className="flex gap-10 font-semibold text-xl">
          <a href="#" className="hover:underline">
            <FaFacebook />
          </a>
          <a href="#" className="hover:underline">
            <FaTwitter />
          </a>
          <a href="#" className="hover:underline">
            <FaInstagram />
          </a>
          <a href="#" className="hover:underline">
            <FaYoutube />
          </a>
        </nav>
      </div>
      <hr className="my-6 border border-gray-300" />
      <footer className="flex flex-col md:flex-row gap-6 items-center justify-between bg-transparent">
        <p className="order-3 md:order-none text-gray-500">© 2023 Monito, All rights reserved.</p>
        <img src={Logo} className="h-12 order-1 md:order-none" />
        <div className="flex gap-8 order-2 md:order-none text-gray-700">
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
};
