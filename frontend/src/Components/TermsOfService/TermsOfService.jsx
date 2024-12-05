import PropTypes from "prop-types";

const TermsOfService = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Terms Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Terms of Service</h2>

        {/* Terms Content */}
        <div className="text-gray-600 text-sm leading-relaxed max-h-[60vh] overflow-y-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            1. Acceptance of Terms
          </h3>
          <p className="mb-4">
            By using Rimberio Online Solution, you acknowledge and agree to be
            bound by these Terms of Service. If you do not agree, please refrain
            from using our platform.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            2. Use of the Platform
          </h3>
          <p className="mb-4">
            Rimberio is designed for personal use to shop for men’s, women’s, and
            children’s clothing and accessories. Unauthorized use, including but
            not limited to fraudulent activities, commercial resale, or account
            impersonation, is strictly prohibited and may result in account
            suspension or legal action.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            3. Changes to Terms
          </h3>
          <p className="mb-4">
            Rimberio reserves the right to modify these Terms of Service at any
            time without prior notice. Continued use of the platform after
            changes signifies your acceptance of the updated terms.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            4. Privacy and Data Protection
          </h3>
          <p className="mb-4">
            We are committed to protecting your personal information. By using
            our platform, you agree to our Privacy Policy, which outlines how
            we collect, use, and secure your data.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            5. Disclaimer of Liability
          </h3>
          <p className="mb-4">
            Rimberio is not responsible for any indirect, incidental, or
            consequential damages arising from the use of our platform, including
            but not limited to loss of data, unauthorized access, or service
            interruptions.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            6. Governing Law
          </h3>
          <p>
            These Terms of Service are governed by and construed in accordance
            with the laws of the jurisdiction in which Rimberio operates.
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

TermsOfService.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default TermsOfService;
