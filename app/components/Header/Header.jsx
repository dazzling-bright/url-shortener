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
    <header className="font-bold py-4 my-2 lg:grid lg:grid-cols-6 text-gray-400">
      <figure className="flex justify-between items-center">
        {/* Logo */}
        <Image src="/logo.svg" alt="logo icon" width={80} height={80} />

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
              aria-label="Close menu" // Added aria-label for accessibility
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
              role="button"
              aria-label="Open menu" // Added aria-label for accessibility
            />
          )}
        </div>
      </figure>

      {/* NavBar and Login/Signup - Hidden on small screens initially */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        }  bg-dark-violet text-white py-4 px-4 mt-3 lg:mt-0 rounded-xl lg:text-grayish-violet lg:bg-white lg:flex lg:justify-between lg:items-center lg:col-start-2 lg:-col-end-1`}
      >
        <NavBar />

        <aside className="grid place-items-center items-center lg:grid-cols-2 gap-4 mt-4 lg:mt-0">
          <button className="bg-transparent font-bold capitalize hover:opacity-85  text-white py-3 px-4 rounded-3xl hover:text-very-dark-violet transition-all duration-300 w-full hover:bg-gray text-center">
            <Link href="/login">Login</Link>
          </button>
          <button className="bg-cyan font-bold capitalize w-full hover:opacity-85 transition-opacity duration-300 text-white py-3 px-4 rounded-3xl">
            sign up
          </button>
        </aside>
      </nav>
    </header>
  );
}

export default Header;
