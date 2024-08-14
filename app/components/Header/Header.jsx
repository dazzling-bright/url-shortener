"use client";

import { useState } from "react";
import Image from "next/image";
import NavBar from "./NavBar";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="font-bold py-4 my-2 lg:grid lg:grid-cols-6">
      <figure className="flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/logo.svg"
          alt="logo icon"
          className="mr-4"
          width={80}
          height={80}
        />

        {/* Skip to main content link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only bg-dark-violet text-white p-4 rounded-md absolute top-0 left-0 m-4 z-50"
        >
          Skip to main content
        </a>

        {/* Menu Icon - Only visible on small screens */}
        <div className="lg:hidden">
          {isMenuOpen ? (
            <LiaTimesSolid
              className="text-4xl cursor-pointer focus:outline-none focus:ring-2 hover:opacity-70 focus:ring-cyan transition-opacity duration-300"
              onClick={toggleMenu}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  toggleMenu();
                }
              }}
              role="button"
              aria-label="Close menu"
            />
          ) : (
            <IoMdMenu
              className="text-4xl cursor-pointer focus:outline-none focus:ring-2  hover:opacity-70 focus:ring-cyan transition-opacity duration-300"
              onClick={toggleMenu}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  toggleMenu();
                }
              }}
              aria-label="Open menu"
            />
          )}
        </div>
      </figure>

      {/* NavBar and Login/Signup - Hidden on small screens initially */}
      <nav
        className={` ${
          isMenuOpen ? " block " : " hidden"
        } transition-all duration-300  bg-dark-violet text-white py-4 px-4 mt-3 lg:mt-0 rounded-xl lg:text-grayish-violet lg:bg-white lg:flex lg:justify-between lg:items-center lg:col-start-2 lg:-col-end-1`}
      >
        <NavBar />

        <aside className="grid place-items-center items-center lg:grid-cols-2 gap-4 mt-4 lg:mt-0">
          <button className="bg-transparent font-bold capitalize text-white lg:text-grayish-violet py-3 px-4 rounded-3xl transition-all duration-300 w-full text-center hover:bg-gray hover:text-very-dark-violet hover:shadow-lg">
            <Link href="/login">Login</Link>
          </button>
          <div className="relative group w-full">
            <button className="bg-cyan font-bold text-nowrap capitalize w-full transition-all duration-300 text-white py-3 px-4 rounded-3xl hover:bg-white border border-cyan hover:text-cyan hover:shadow-lg">
              sign up
            </button>
            <div className="absolute mt-5 lg:mt-4 left-0 transform top-full lg:w-max  lg:-left-full text-center lg:text-left text-white mb-2 px-2 py-2 text-sm   rounded-2xl bg-red font-normal shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              This button is not functional yet
            </div>
          </div>
        </aside>
      </nav>
    </header>
  );
}

export default Header;
