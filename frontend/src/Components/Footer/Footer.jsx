import { useState } from "react";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "../TermsOfService/TermsOfService";
import ReturnPolicy from "../ReturnPolicy/ReturnPolicy";
import { Link } from "react-router-dom";

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  return (
    <footer className="flex flex-col items-center gap-8 p-10 bg-gray-900 text-gray-300">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        <img
          src="https://img.icons8.com/?size=60&id=AGeG6Wx3Id3W&format=png"
          alt="logo"
          className="w-14"
        />
        <p className="text-2xl font-semibold text-white tracking-wide">
          Rimberio ONLINE SOLUTION
        </p>
      </div>

      {/* Links Section */}
      <ul className="flex flex-wrap justify-center gap-8 text-sm md:text-base">
        {[
          { label: "Home", path: "/home" },
          { label: "Men", path: "/men" },
          { label: "Women", path: "/women" },
          { label: "Kids", path: "/kids" },
          { label: "Accessories", path: "/accessories" },
          { label: "About", path: "/about" },
          { label: "Contact", path: "/contact" },
        ].map(({ label, path }, index) => (
          <li key={index} className="relative">
            <Link
              to={path}
              className="cursor-pointer hover:text-gray-500 font-medium transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Icons Section */}
      <div className="flex gap-5">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition"
          aria-label="Instagram"
        >
          <img
            src="https://img.icons8.com/?size=60&id=Plswr633TJUP&format=png"
            alt="Instagram"
            className="w-6"
          />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition"
          aria-label="Facebook"
        >
          <img
            src="https://img.icons8.com/?size=60&id=nd6SS1Eo5syT&format=png"
            alt="Facebook"
            className="w-6"
          />
        </a>
        <a
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition"
          aria-label="TikTok"
        >
          <img
            src="https://img.icons8.com/?size=60&id=TDvCl4bDEGpX&format=png"
            alt="TikTok"
            className="w-6"
          />
        </a>
      </div>

      {/* Divider and Links Section */}
      <div className="w-full flex flex-col items-center gap-4">
        <hr className="w-3/4 border-gray-700" />
        <p className="text-xs md:text-sm text-gray-400">
          © 2023 Rimberio Online Solution - All Rights Reserved.
        </p>
        <div className="flex gap-4 text-xs md:text-sm">
          <button
            onClick={() => setActiveModal("PrivacyPolicy")}
            className="hover:text-gray-400 transition underline-offset-4"
          >
            Privacy Policy
          </button>
          <span className="text-gray-500">|</span>
          <button
            onClick={() => setActiveModal("TermsOfService")}
            className="hover:text-gray-400 transition underline-offset-4"
          >
            Terms of Service
          </button>
          <span className="text-gray-500">|</span>
          <button
            onClick={() => setActiveModal("ReturnPolicy")}
            className="hover:text-gray-400 transition underline-offset-4"
          >
            Return Policy
          </button>
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
    </footer>
  );
};

export default Footer;
