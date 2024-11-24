import PropTypes from "prop-types";

const PrivacyPolicy = ({ onClose }) => {
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
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Privacy Policy</h2>
        <div className="text-gray-600 text-sm leading-relaxed max-h-[60vh] overflow-y-auto">
          <p className="mb-4">
            Your privacy is our priority. We collect essential information such
            as your email and username to offer a seamless shopping experience
            on Rimberio Online Solution.
          </p>
          <p className="mb-4">
            This information helps us process orders, personalize recommendations,
            and enhance your overall experience. Rest assured, your data will not
            be shared with third parties without your explicit consent.
          </p>
          <p>
            By using Rimberio, you consent to this privacy policy. If you have any
            questions, feel free to reach out to our support team at
            support@rimberio.com.
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

PrivacyPolicy.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PrivacyPolicy;
