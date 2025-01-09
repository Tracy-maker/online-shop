import PropTypes from "prop-types";

const TermsOfService = ({ onClose }) => {
  const policies = [
    {
      id: 1,
      icon: "https://img.icons8.com/color/48/swap.png",
      title: "Easy Exchange",
      description: "Hassle-free exchanges on all items.",
    },
    {
      id: 2,
      icon: "https://img.icons8.com/color/48/return.png",
      title: "30-Day Returns",
      description: "Full refunds within 30 days.",
    },
    {
      id: 3,
      icon: "https://img.icons8.com/color/48/customer-support.png",
      title: "24/7 Support",
      description: "Dedicated support anytime.",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Terms Header */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Terms of Service
        </h2>

        {/* Policies Section */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-800 mb-3">Policies</h3>
          <div className="flex justify-around items-center gap-4">
            {policies.map((policy) => (
              <div
                key={policy.id}
                className="flex items-center gap-3 px-2 text-gray-800"
              >
                <img
                  src={policy.icon}
                  alt={policy.title}
                  className="w-5 h-5 object-contain"
                />
                <div>
                  <h3 className="text-xs font-semibold">{policy.title}</h3>
                  <p className="text-xs font-light">{policy.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terms Content */}
        <div className="text-gray-600 text-xs leading-relaxed max-h-[60vh] overflow-y-auto">
          <h3 className="text-sm font-semibold text-gray-800 mb-1">
            1. Acceptance of Terms
          </h3>
          <p className="mb-3">
            By using Rimberio Online Solution, you acknowledge and agree to be
            bound by these Terms of Service. If you do not agree, please refrain
            from using our platform.
          </p>

          <h3 className="text-sm font-semibold text-gray-800 mb-1">
            2. Use of the Platform
          </h3>
          <p className="mb-3">
            Rimberio is designed for personal use to shop for men’s, women’s,
            and children’s clothing and accessories. Unauthorized use, including
            but not limited to fraudulent activities, commercial resale, or
            account impersonation, is strictly prohibited and may result in
            account suspension or legal action.
          </p>

          <h3 className="text-sm font-semibold text-gray-800 mb-1">
            3. Changes to Terms
          </h3>
          <p className="mb-3">
            Rimberio reserves the right to modify these Terms of Service at any
            time without prior notice. Continued use of the platform after
            changes signifies your acceptance of the updated terms.
          </p>

          <h3 className="text-sm font-semibold text-gray-800 mb-1">
            4. Privacy and Data Protection
          </h3>
          <p className="mb-3">
            We are committed to protecting your personal information. By using
            our platform, you agree to our Privacy Policy, which outlines how we
            collect, use, and secure your data.
          </p>

          <h3 className="text-sm font-semibold text-gray-800 mb-1">
            5. Disclaimer of Liability
          </h3>
          <p className="mb-3">
            Rimberio is not responsible for any indirect, incidental, or
            consequential damages arising from the use of our platform,
            including but not limited to loss of data, unauthorized access, or
            service interruptions.
          </p>

          <h3 className="text-sm font-semibold text-gray-800 mb-1">
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
          className="mt-4 w-full bg-gray-800 text-gray-200 py-2 rounded-md hover:bg-gray-700 hover:text-white transition"
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
