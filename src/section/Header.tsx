"use client";
import '../assets/css/font.css'
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

const Brand: React.FC = () => {
  return (
    <div className="text-xl Manrope font-bold text-neutral-200 tracking-tighter">
      <a href="/">BaseHub</a>
    </div>
  );
};

const NavLinks: React.FC = () => {
  return (  
    <>
      <div className="text-sm flex gap-5 Roboto">
      <a href="/" className="text-neutral-200 hover:text-orange-500">
        Home
      </a>
      <a href="/about" className="text-neutral-200 hover:text-orange-500">
        About
      </a>
      <a href="/services" className="text-neutral-200 hover:text-orange-500">
        Services
      </a>
      <a href="/contact" className="text-neutral-200 hover:text-orange-500">
        Contact
      </a>
      </div>
    </>
  );
};

const HamburgerMenu: React.FC<{ isOpen: boolean; toggleMenu: () => void }> = ({
  isOpen,
  toggleMenu,
}) => {
  return (
    <button
      onClick={toggleMenu}
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-orange-500 focus:outline-none"
    >
      <svg
        className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
      <svg
        className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>
  );
};

const MobileMenu: React.FC = () => {
  return (
    <div className="md:hidden bg-white border-t text-sm border-gray-200">
      <div className="space-y-1 py-2">
        <a href="/" className="block text-neutral-200 hover:text-orange-500 px-4 py-2">
          Home
        </a>
        <a href="/about" className="block text-neutral-200 hover:text-orange-500 px-4 py-2">
          About
        </a>
        <a href="/services" className="block text-neutral-200 hover:text-orange-500 px-4 py-2">
          Services
        </a>
        <a href="/contact" className="block text-neutral-200 hover:text-orange-500 px-4 py-2">
          Contact
        </a>
      </div>
    </div>
  );
};

const LoginButton: React.FC = () => {
    return (
        <div className="flex items-center Roboto gap-1 text-sm">
            <button className="bg-neutral-900 hover:bg-orange-500 text-neutral-200 font-medium border border-neutral-800 hover:scale-95 duration-150 transition-all py-1 px-5 rounded-full">Login</button>
        </div>
    )
}

return (
    <nav className=" bg-[#0e0e0e] fixed w-full z-10 top-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center h-16">
          <Brand />
          <div className="hidden md:flex ">
            <NavLinks />
          </div>
          <div className="md:hidden flex items-center">
            <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
          <div className="hidden lg:block">
            <LoginButton/>
          </div>
        </div>
      </div>
      {isOpen && <MobileMenu />}
    </nav>
  );
};

export default Header;
