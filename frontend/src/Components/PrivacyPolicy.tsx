import React from "react";

interface PrivacyPolicyProps {
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onClose }) => {
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

        {/* Privacy Policy Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Privacy Policy</h2>

        {/* Privacy Policy Content */}
        <div className="text-gray-600 text-sm leading-relaxed max-h-[60vh] overflow-y-auto">
          <p className="mb-4">
            At Rimberio Online Solution, we are committed to protecting your privacy. 
            This Privacy Policy outlines how we collect, use, and safeguard your personal 
            information while providing you with a seamless and secure shopping experience.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">1. Information We Collect</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Email Address: For account creation, notifications, and updates.</li>
            <li>Username: To personalize your experience and maintain account identity.</li>
            <li>Order Details: For processing and fulfilling your purchases.</li>
            <li>Browsing Data: To enhance your shopping experience through recommendations.</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">2. How We Use Your Information</h3>
          <p className="mb-4">The information collected is used to:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Process your orders and manage your account.</li>
            <li>Improve our website, services, and user experience.</li>
            <li>Send promotional offers and updates (only with your consent).</li>
            <li>Ensure secure transactions and protect against fraud.</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">3. Data Protection</h3>
          <p className="mb-4">
            Your personal information is stored securely and will not be shared with third parties 
            without your explicit consent. We use advanced encryption protocols to ensure your 
            data is protected from unauthorized access.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">4. Your Consent</h3>
          <p className="mb-4">
            By using Rimberio Online Solution, you agree to the collection and use of your 
            personal information as described in this policy. If you do not agree, please 
            refrain from using our platform.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">5. Contact Us</h3>
          <p>
            If you have any questions or concerns regarding our Privacy Policy, 
            please contact us at:
          </p>
          <p className="mt-2 font-medium text-gray-800">
            Email:{" "}
            <a
              href="mailto:support@rimberio.com"
              className="text-blue-600 hover:underline"
            >
              support@rimberio.com
            </a>
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

export default PrivacyPolicy;
