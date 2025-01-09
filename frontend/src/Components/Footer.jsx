import { useState } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";
import ReturnPolicy from "./ReturnPolicy";
import { Link } from "react-router-dom";
import Disclaimer from "./Disclaimer";

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  return (
    <footer className="flex flex-col items-center gap-8 p-6 sm:p-10 bg-gray-800 text-white ">
      {/* Links Section */}
      <ul className="grid grid-cols-2 gap-4 text-base font-semibold sm:flex sm:justify-center sm:gap-14 mt-8">
        {[
          { label: "Home", path: "/home" },
          { label: "Women", path: "/women" },
          { label: "Men", path: "/men" },
          { label: "Kids", path: "/kids" },
          { label: "About", path: "/about" },
          { label: "Contact", path: "/contact" },
        ].map(({ label, path }, index) => (
          <li key={index} className="relative group text-center">
            <Link
              to={path}
              className="cursor-pointer hover:text-blue-400 transition duration-300"
            >
              {label}
            </Link>
            <span className="absolute bottom-0 left-1/2 w-0 h-[3px] bg-blue-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </li>
        ))}
      </ul>

      {/* Social Icons Section */}
      <div className="flex justify-center gap-10 mt-4">
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
            className="p-2 bg-gray-700 rounded-full hover:bg-blue-300 hover:scale-105 transition"
            aria-label={alt}
          >
            <img src={src} alt={alt} className="w-6" />
          </a>
        ))}
      </div>

     {/* Logo Section */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <p className="text-5xl sm:text-7xl font-black tracking-wide text-center sm:text-left">
          Rimberio ONLINE SOLUTION
        </p>
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
          <span className="text-white">|</span>
          <button
            onClick={() => setActiveModal("Disclaimer")}
            className="hover:text-blue-200 transition"
          >
            Disclaimer
          </button>
        </div>
        {/* Creator Credit */}
        <div className="text-center text-sm max-w-3xl bg-gray-800 rounded-md shadow-lg">
          <p className="animate-pulse text-white font-semibold">
            Created and designed with 💖 by{" "}
            <a
              href="https://www.linkedin.com/in/yingxin-zhang-ba1028212/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-300 hover:underline"
            >
              Yingxin.Zhang
            </a>
            .
          </p>
        </div>
      </div>

      {/* Modals */}
      {activeModal === "PrivacyPolicy" && (
        <PrivacyPolicy onClose={closeModal} />
      )}
      {activeModal === "TermsOfService" && (
        <TermsOfService onClose={closeModal} />
      )}
      {activeModal === "ReturnPolicy" && <ReturnPolicy onClose={closeModal} />}

      {activeModal === "Disclaimer" && <Disclaimer onClose={closeModal} />}
    </footer>
  );
};

export default Footer;
