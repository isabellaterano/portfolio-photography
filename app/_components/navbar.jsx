"use client";
import { useState } from "react";
import Link from "next/link";
import { CgMenuGridR, CgCloseR } from "react-icons/cg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full border-b-4 border-zinc-900 px-4 py-3 z-50 bg-zinc-100">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold cursor-pointer">
          <Link href="/">JL</Link>
        </div>
        <button
          onClick={toggleMenu}
          className="focus:outline-none hover:text-zinc-500 transition duration-300 ease-in-out relative z-50"
        >
          {isOpen ? (
            <CgCloseR size={35} className="text-white hover:text-gray-400" />
          ) : (
            <CgMenuGridR size={35} />
          )}
        </button>
        <nav
          className={`fixed top-0 left-0 w-full h-screen bg-zinc-900 text-zinc-100 opacity-100 transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ zIndex: 40 }}
        >
          <ul className="flex flex-col items-center justify-center h-full gap-12 font-bold text-2xl uppercase">
            <li>
              <Link
                href="/"
                onClick={handleLinkClick}
                className="hover:text-zinc-500 transition duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={handleLinkClick}
                className="hover:text-zinc-500 transition duration-300 ease-in-out"
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                href="/#last-projects"
                onClick={handleLinkClick}
                className="hover:text-zinc-500 transition duration-300 ease-in-out"
              >
                Last Projects
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                onClick={handleLinkClick}
                className="hover:text-zinc-500 transition duration-300 ease-in-out"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
