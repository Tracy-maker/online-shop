import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-10 p-8 bg-gray-800 text-white">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img
          src="https://img.icons8.com/?size=60&id=AGeG6Wx3Id3W&format=png"
          alt="logo"
          className="w-12"
        />
        <p className="text-2xl font-bold">Rimberio ONLINE SOLUTION</p>
      </div>

      {/* Links Section */}
      <ul className="flex flex-wrap justify-center gap-8 text-base">
        <li className="cursor-pointer hover:text-gray-400 transition">Home</li>
        <li className="cursor-pointer hover:text-gray-400 transition">Men</li>
        <li className="cursor-pointer hover:text-gray-400 transition">Women</li>
        <li className="cursor-pointer hover:text-gray-400 transition">Kids</li>
        <li className="cursor-pointer hover:text-gray-400 transition">
          Accessories
        </li>
        <li className="cursor-pointer hover:text-gray-400 transition">About</li>
        <li className="cursor-pointer hover:text-gray-400 transition">
          Contact
        </li>
      </ul>

      {/* Social Icons Section */}
      <div className="flex gap-4">
        <div className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition">
          <img
            src="https://img.icons8.com/?size=60&id=Plswr633TJUP&format=png"
            alt="Instagram"
            className="w-8"
          />
        </div>
        <div className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition">
          <img
            src="https://img.icons8.com/?size=60&id=nd6SS1Eo5syT&format=png"
            alt="Facebook"
            className="w-8"
          />
        </div>
        <div className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition">
          <img
            src="https://img.icons8.com/?size=60&id=TDvCl4bDEGpX&format=png"
            alt="TikTok"
            className="w-8"
          />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="flex flex-col items-center gap-3 w-full text-center">
        <hr className="w-4/5 border-none h-1 bg-gray-600 rounded-full" />
        <p className="text-sm">
          © 2023 Rimberio Online Solution - All Rights Reserved.
        </p>
        <p className="text-sm">
          <a href="#" className="hover:text-gray-400 transition">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="hover:text-gray-400 transition">
            Terms of Service
          </a>{" "}
          |{" "}
          <a href="#" className="hover:text-gray-400 transition">
            Return Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
