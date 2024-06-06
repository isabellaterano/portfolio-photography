import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">Email</h3>
            <p className="text-blue-500">
              <a href="mailto:example@example.com">jonathanlocker@jl.com</a>
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">Phone</h3>
            <p className="text-blue-500">
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="h-6 w-6 text-stone-950" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="h-6 w-6 text-stone-950" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="h-6 w-6 text-stone-950" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
