import { useState } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";
import ReturnPolicy from "./ReturnPolicy";
import { Link } from "react-router-dom";

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  return (
    <footer className="flex flex-col items-center gap-8 p-6 sm:p-10 bg-gray-800 text-white">
      {/* Logo Section */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <img
          src="https://i.ibb.co/m6kzc7W/Wechat-IMG10365.png"
          alt="logo"
          className="w-14 animate-bounce"
        />
        <p className="text-2xl sm:text-3xl font-extrabold tracking-wide text-center sm:text-left">
          Rimberio ONLINE SOLUTION
        </p>
      </div>

      {/* Links Section */}
      <ul className="grid grid-cols-2 gap-4 text-base font-medium sm:flex sm:justify-center sm:gap-8">
        {[
          { label: "Home", path: "/home" },
          { label: "Men", path: "/men" },
          { label: "Women", path: "/women" },
          { label: "Kids", path: "/kids" },
          { label: "Accessories", path: "/accessories" },
          { label: "About", path: "/about" },
          { label: "Contact", path: "/contact" },
        ].map(({ label, path }, index) => (
          <li key={index} className="relative group text-center">
            <Link
              to={path}
              className="cursor-pointer hover:text-blue-200 transition duration-300"
            >
              {label}
            </Link>
            <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-200 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </li>
        ))}
      </ul>

      {/* Social Icons Section */}
      <div className="flex justify-center gap-5 mt-4">
        {[
          {
            href: "https://www.instagram.com/",
            src: "https://img.icons8.com/?size=60&id=Plswr633TJUP&format=png",
            alt: "Instagram",
          },
          {
            href: "https://www.facebook.com/",
            src: "https://img.icons8.com/?size=60&id=nd6SS1Eo5syT&format=png",
            alt: "Facebook",
          },
          {
            href: "https://www.tiktok.com/",
            src: "https://img.icons8.com/?size=60&id=TDvCl4bDEGpX&format=png",
            alt: "TikTok",
          },
          {
            href: "https://www.youtube.com/",
            src: "https://img.icons8.com/color/48/youtube-play.png",
            alt: "YouTube",
          },
        ].map(({ href, src, alt }) => (
          <a
            key={alt}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-700 rounded-full hover:bg-blue-300 hover:scale-105 transition"
            aria-label={alt}
          >
            <img src={src} alt={alt} className="w-6" />
          </a>
        ))}
      </div>

      {/* Divider and Disclaimer Section */}
      <div className="w-full flex flex-col items-center gap-4 mt-6">
        <hr className="w-full sm:w-3/4 border-white opacity-50" />
        <p className="text-xs sm:text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Rimberio Online Solution. All Rights
          Reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
          <button
            onClick={() => setActiveModal("PrivacyPolicy")}
            className="hover:text-blue-200 transition"
          >
            Privacy Policy
          </button>
          <span className="text-white">|</span>
          <button
            onClick={() => setActiveModal("TermsOfService")}
            className="hover:text-blue-200 transition"
          >
            Terms of Service
          </button>
          <span className="text-white">|</span>
          <button
            onClick={() => setActiveModal("ReturnPolicy")}
            className="hover:text-blue-200 transition"
          >
            Return Policy
          </button>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="text-center text-xs leading-relaxed bg-gray-700 p-4 rounded-md shadow-lg">
        <p className="text-gray-300">
          Disclaimer: All images on this website are either AI-generated or free
          to use. If you believe any content infringes on your rights, please
          contact me via the{" "}
          <Link
            to="/contact"
            className="underline text-blue-300 hover:text-blue-400"
          >
            Contact page
          </Link>
          .
        </p>
        <p className="mt-2 text-gray-300">
          This website is for educational purposes only. Products listed are
          virtual and not for sale or delivery. Thank you for visiting!
        </p>
      </div>

      {/* Creator Credit */}
      <div className="text-center text-sm max-w-3xl bg-gray-800 rounded-md shadow-lg mt-6">
        <p className="animate-pulse text-white font-semibold">
          Created and designed with 💖 by{" "}
          <span className="font-bold text-blue-300">Yix.z</span>.
        </p>
        <p className="text-xs mt-2 text-gray-400">
          This website is a portfolio project showcasing design and development
          skills. Questions? Contact me via the{" "}
          <Link
            to="/contact"
            className="underline text-blue-300 hover:text-blue-400"
          >
            Contact page
          </Link>
          .
        </p>
      </div>

      {/* Modals */}
      {activeModal === "PrivacyPolicy" && (
        <PrivacyPolicy onClose={closeModal} />
      )}
      {activeModal === "TermsOfService" && (
        <TermsOfService onClose={closeModal} />
      )}
      {activeModal === "ReturnPolicy" && <ReturnPolicy onClose={closeModal} />}
    </footer>
  );
};

export default Footer;
