interface ReturnPolicyProps {
  onClose: () => void;
}

const ReturnPolicy: React.FC<ReturnPolicyProps> = ({ onClose }) => {
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
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Return Policy</h2>

        {/* Content */}
        <div className="text-gray-600 text-sm leading-relaxed max-h-[60vh] overflow-y-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            1. Eligibility for Returns
          </h3>
          <p className="mb-4">
            We accept returns within <strong>30 days</strong> of purchase for
            items that meet the following criteria:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Items must be unused and undamaged.</li>
            <li>All original packaging, tags, and accessories must be intact.</li>
            <li>Proof of purchase (receipt or order number) is required.</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            2. How to Initiate a Return
          </h3>
          <p className="mb-4">
            To initiate a return, please contact our support team at{" "}
            <a
              href="mailto:returns@rimberio.com"
              className="text-blue-600 hover:underline"
            >
              returns@rimberio.com
            </a>{" "}
            with your order details. Our team will guide you through the process
            and provide a return shipping label if applicable.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            3. Refund Process
          </h3>
          <p className="mb-4">
            Once we receive and inspect your returned item(s), refunds will be
            processed within <strong>7-10 business days</strong>. Refunds will be
            issued to the original payment method. Please note:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Shipping costs are non-refundable.</li>
            <li>Partial refunds may be issued for items that do not meet the eligibility criteria.</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            4. Non-Returnable Items
          </h3>
          <p>
            Certain items are non-returnable, including:
          </p>
          <ul className="list-disc list-inside">
            <li>Final sale items or clearance items.</li>
            <li>Personalized or custom-made products.</li>
            <li>Items damaged due to misuse or improper handling.</li>
          </ul>
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

export default ReturnPolicy;
