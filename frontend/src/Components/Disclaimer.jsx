import PropTypes from "prop-types";

const Disclaimer = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Disclaimer</h2>

        {/* Content */}
        <div className="text-gray-600 text-sm leading-relaxed max-h-[60vh] overflow-y-auto">
          <p className="mb-4">
            All images on this website are either AI-generated or free to use.
            If you believe any content infringes on your rights, please contact
            me at{" "}
            <a
              href="mailto:ydlvns@gmail.com"
              className="text-blue-600 hover:underline"
            >
              ydlvns@gmail.com
            </a>
            .
          </p>
          <p className="mb-4">
            This website is for educational purposes only. Products listed are
            virtual and not for sale or delivery. Thank you for visiting!
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-6 w-full bg-gray-800 text-gray-200 py-3 rounded-md hover:bg-gray-700 hover:text-white transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

Disclaimer.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Disclaimer;
