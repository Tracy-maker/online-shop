import PropTypes from "prop-types";

const TermsOfService = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Terms of Service</h2>
        <div className="text-gray-600 text-sm leading-relaxed max-h-[60vh] overflow-y-auto">
          <p className="mb-4">
            By using Rimberio Online Solution, you agree to our policies for
            shopping men’s, women’s, and children’s clothing and accessories.
            Unauthorized or fraudulent activities may result in account
            suspension or legal action.
          </p>
          <p className="mb-4">
            Our platform is designed for personal use only. Commercial resale or
            unauthorized use is strictly prohibited. Misuse of the platform may
            result in termination of access.
          </p>
          <p>
            Rimberio reserves the right to modify these terms without prior
            notice. Continued use of the platform signifies acceptance of any
            changes to the terms.
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

TermsOfService.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default TermsOfService;
