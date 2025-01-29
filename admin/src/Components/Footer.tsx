import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-500 text-gray-300 py-10">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Logo Section */}
        <div className="text-center mb-8">
          <p className="text-5xl sm:text-4xl lg:text-6xl font-black tracking-wide text-white">
            Rimberio ONLINE SOLUTION
          </p>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Section 1: About */}
          <div className="text-center md:text-left">
            <p className="text-sm mt-4 text-gray-400 leading-relaxed">
              Simplify your fashion store management. Organize inventory, track
              sales, and stay ahead of the latest trends with Rimberio Admin.
            </p>
          </div>

          {/* Section 2: Social Media */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white">
              Our Social Community
            </h3>
            <div className="flex justify-center gap-6 mt-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition duration-300"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-black transition duration-300"
              >
                <FaTiktok size={28} />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition duration-300"
              >
                <FaYoutube size={28} />
              </a>
            </div>
          </div>

          {/* Section 3: Disclaimer */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">Disclaimer</h3>
            <p className="text-sm mt-4 text-gray-400 leading-relaxed">
              This admin panel is for authorized use only. All images and
              content are placeholders or royalty-free.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700">
          <div className="h-[1px] bg-gradient-to-r from-gray-400 via-gray-100 to-gray-500"></div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center">
          {/* Copyright */}
          <p className="text-sm">
            © {new Date().getFullYear()} Rimberio Online Solution. All Rights
            Reserved.
          </p>

          {/* Designer Info */}
          <p className="animate-pulse text-white font-semibold mt-4">
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
    </footer>
  );
};

export default Footer;
