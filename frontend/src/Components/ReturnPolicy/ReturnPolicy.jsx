import PropTypes from "prop-types";

const ReturnPolicy = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Return Policy</h2>
        <div className="text-gray-600 text-sm leading-relaxed max-h-[60vh] overflow-y-auto">
          <p className="mb-4">
            We accept returns within 30 days of purchase for unused and
            undamaged items in their original packaging. To initiate a return,
            please contact us at returns@rimberio.com.
          </p>
          <p>
            Refunds will be processed to the original payment method within 7-10
            business days after receiving the returned item.
          </p>
        </div>
      </div>
    </div>
  );
};

ReturnPolicy.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ReturnPolicy;
