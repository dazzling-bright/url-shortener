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
    <header className="px-8 py-4 my-2 md:grid md:grid-cols-6 text-gray-400">
      <figure className="flex justify-between items-center">
        {/* Logo */}
        <Image src="/logo.svg" alt="logo icon" width={80} height={80} />

        {/* Menu Icon - Only visible on small screens */}
        <div className="md:hidden">
          {isMenuOpen ? (
            <LiaTimesSolid
              className="text-4xl cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <IoMdMenu
              className="text-4xl cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
      </figure>

      {/* NavBar and Login/Signup - Hidden on small screens initially */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:justify-between md:items-center md:col-start-2 md:-col-end-1`}
      >
        <NavBar />

        <aside className="grid items-center grid-cols-2 gap-4 mt-4">
          <Link href="/login"> Login </Link>
          <button className="bg-green-500 capitalize text-white py-3 px-4 rounded-3xl">
            sign up
          </button>
        </aside>
      </nav>
    </header>
  );
}

export default Header;
