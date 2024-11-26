import { useState } from "react";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "../TermsOfService/TermsOfService";
import ReturnPolicy from "../ReturnPolicy/ReturnPolicy";
import { Link } from "react-router-dom";

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  return (
    <footer className="flex flex-col items-center gap-8 p-10 bg-gray-800 text-white">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        <img
          src="https://img.icons8.com/?size=60&id=AGeG6Wx3Id3W&format=png"
          alt="logo"
          className="w-14 animate-bounce"
        />
        <p className="text-3xl font-extrabold tracking-wide">
          Rimberio ONLINE SOLUTION
        </p>
      </div>

      {/* Links Section */}
      <ul className="flex flex-wrap justify-center gap-8 text-base font-medium">
        {[
          { label: "Home", path: "/home" },
          { label: "Men", path: "/men" },
          { label: "Women", path: "/women" },
          { label: "Kids", path: "/kids" },
          { label: "Accessories", path: "/accessories" },
          { label: "About", path: "/about" },
          { label: "Contact", path: "/contact" },
        ].map(({ label, path }, index) => (
          <li key={index} className="relative group">
            <Link
              to={path}
              className="cursor-pointer hover:text-yellow-200 transition duration-300"
            >
              {label}
            </Link>
            <span className="absolute bottom-0 left-1/2 w-0 h-[3px] bg-yellow-200 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </li>
        ))}
      </ul>

      {/* Social Icons Section */}
      <div className="flex gap-5">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white rounded-full hover:scale-125 transition transform"
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
          className="p-3 bg-white rounded-full hover:scale-125 transition transform"
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
          className="p-3 bg-white rounded-full hover:scale-125 transition transform"
          aria-label="TikTok"
        >
          <img
            src="https://img.icons8.com/?size=60&id=TDvCl4bDEGpX&format=png"
            alt="TikTok"
            className="w-6"
          />
        </a>
      </div>

      {/* Divider and Disclaimer Section */}
      <div className="w-full flex flex-col items-center gap-4">
        <hr className="w-3/4 border-white opacity-50" />
        <p className="text-sm text-white">
          © 2024 Rimberio Online Solution - All Rights Reserved.
        </p>
        <div className="flex gap-4 text-sm">
          <button
            onClick={() => setActiveModal("PrivacyPolicy")}
            className="hover:text-yellow-200 transition"
          >
            Privacy Policy
          </button>
          <span className="text-white">|</span>
          <button
            onClick={() => setActiveModal("TermsOfService")}
            className="hover:text-yellow-200 transition"
          >
            Terms of Service
          </button>
          <span className="text-white">|</span>
          <button
            onClick={() => setActiveModal("ReturnPolicy")}
            className="hover:text-yellow-200 transition"
          >
            Return Policy
          </button>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="text-center text-xs max-w-2xl leading-relaxed">
        <p>
          Disclaimer: All images used on this website are either AI-generated or
          free-to-use images. If you believe any content infringes on your
          rights, please contact us via the{" "}
          <Link to="/contact" className="underline hover:text-yellow-200">
            Contact page
          </Link>{" "}
          with details. This website is for educational purposes only and not
          for commercial use.
        </p>
        <p className="mt-2">
          All products listed are virtual items and cannot be delivered. Thank
          you for your support. Please like, share, and consider sending us your
          love with flowers, coins, or other gestures of appreciation!
        </p>
      </div>

      {/* Creator Credit */}
      <div className="text-center text-sm max-w-2xl">
        <p className="animate-pulse">
          Created with 💖 by{" "}
          <span className="font-bold text-yellow-200">Yix.z</span>
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
