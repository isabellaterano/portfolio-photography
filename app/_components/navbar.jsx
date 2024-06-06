"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="border-b-4 border-stone-100 px-4 mx-4 my-2 py-2">
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="text-2xl font-bold">
          <Link href="/">JL</Link>
        </div>
        <div>
          <button
            onClick={toggleMenu}
            className="focus:outline-none hover:text-gray-400 transition duration-300 ease-in-out relative z-50"
          >
            {isOpen ? (
              <AiOutlineCloseCircle
                size={30}
                className="text-stone-800 hover:text-stone-400"
              />
            ) : (
              <AiOutlineMenu size={30} />
            )}
          </button>
        </div>
        <nav
          className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-stone-200 text-stone-950 opacity-100 transition duration-300 ease-in-out transform ${
            !isOpen ? "translate-x-full" : "translate-x-0"
          }`}
          style={{ zIndex: 40 }}
        >
          <ul className="flex flex-col gap-10 font-bold">
            <li>
              <Link
                href="/"
                className="block hover:text-gray-400 transition duration-300 ease-in-out text-center text-xl"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block hover:text-gray-400 transition duration-300 ease-in-out text-center text-xl"
                onClick={handleLinkClick}
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                href="/#last-projects"
                className="block hover:text-gray-400 transition duration-300 ease-in-out text-center text-xl"
                onClick={handleLinkClick}
              >
                Last Projects
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="block hover:text-gray-400 transition duration-300 ease-in-out text-center text-xl"
                onClick={handleLinkClick}
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
