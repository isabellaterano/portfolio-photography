import { FaBehance, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-50 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Jasper Everett Photography</h3>
          <p className="text-sm mt-1">Capturing moments, creating memories.</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaBehance className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} Jasper Everett Photography. All rights
        reserved.
      </div>
    </footer>
  );
}
