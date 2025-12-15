import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300 pt-12 rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-[#FF6B35] cursor-pointer">Home</li>
            <li className="hover:text-[#FF6B35] cursor-pointer">All Books</li>
            <li className="hover:text-[#FF6B35] cursor-pointer">Dashboard</li>
            <li className="hover:text-[#FF6B35] cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Details
          </h3>
          <p>Dhaka, Bangladesh</p>
          <p className="mt-2">
            Email:{" "}
            <span className="hover:text-[#FF6B35] cursor-pointer">
              support@bookcourier.com
            </span>
          </p>
          <p className="mt-2">Phone: +880 1XXXXXXXXX</p>
          <p className="mt-2 text-sm">Support: 9:00 AM – 9:00 PM (Sun – Thu)</p>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a className="p-2 rounded-full bg-gray-700 hover:bg-[#FF6B35] transition">
              <FaFacebookF />
            </a>
            <a className="p-2 rounded-full bg-gray-700 hover:bg-[#FF6B35] transition">
              <FaInstagram />
            </a>
            <a className="p-2 rounded-full bg-gray-700 hover:bg-[#FF6B35] transition">
              <FaLinkedinIn />
            </a>
            <a className="p-2 rounded-full bg-gray-700 hover:bg-[#FF6B35] transition">
              <FaXTwitter /> {/* new X logo */}
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} BookCourier. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;