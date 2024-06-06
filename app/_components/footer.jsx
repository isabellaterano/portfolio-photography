import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t-4 border-stone-100 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-bold">My Photography Portfolio</h1>
          <p className="text-gray-400">© 2024 All rights reserved.</p>
        </div>
        <nav className="flex space-x-4">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/portfolio" className="hover:underline">
            Portfolio
          </Link>
        </nav>
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook alt="Facebook" className="h-6 w-6" />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="h-6 w-6" />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter alt="Twitter" className="h-6 w-6" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
