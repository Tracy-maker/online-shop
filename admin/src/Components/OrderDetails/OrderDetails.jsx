import PropTypes from "prop-types";

const OrderDetails = ({ order }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      {/* Order Header */}
      <h2 className="text-xl font-bold text-gray-800">Order Details</h2>
      <p className="text-gray-600 text-sm">
        Order ID: <span className="text-blue-600 font-medium">{order.id}</span>
      </p>
      <p className="text-gray-600 text-sm">
        Order Date: <span className="text-gray-800">{order.date}</span>
      </p>
      <p className="text-gray-600 text-sm">
        Status:{" "}
        <span className="text-green-600 font-semibold">{order.status}</span>
      </p>

      {/* Customer Details */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-700">
          Customer Information:
        </h3>
        <p className="text-gray-600">
          <strong>Name:</strong> {order.customer.name}
        </p>
        <p className="text-gray-600">
          <strong>Address:</strong> {order.customer.address}
        </p>
        <p className="text-gray-600">
          <strong>Phone:</strong> {order.customer.phone}
        </p>
        <p className="text-gray-600">
          <strong>Payment Method:</strong> {order.customer.paymentMethod}
        </p>
      </div>

      {/* Product Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Products:</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left text-sm font-medium text-gray-600">
                Product Name
              </th>
              <th className="border border-gray-300 p-2 text-left text-sm font-medium text-gray-600">
                Model
              </th>
              <th className="border border-gray-300 p-2 text-left text-sm font-medium text-gray-600">
                Quantity
              </th>
              <th className="border border-gray-300 p-2 text-left text-sm font-medium text-gray-600">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {order.products.map((product, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <td className="border border-gray-300 p-2 text-sm text-gray-800">
                  {product.name}
                </td>
                <td className="border border-gray-300 p-2 text-sm text-gray-800">
                  {product.model}
                </td>
                <td className="border border-gray-300 p-2 text-sm text-gray-800">
                  {product.quantity}
                </td>
                <td className="border border-gray-300 p-2 text-sm text-gray-800">
                  {product.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total Price */}
      <p className="text-lg font-bold text-gray-800">
        Total: <span className="text-blue-600">{order.total}</span>
      </p>
    </div>
  );
};

// PropTypes Validation
OrderDetails.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    customer: PropTypes.shape({
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      paymentMethod: PropTypes.string.isRequired,
    }).isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.string.isRequired,
      })
    ).isRequired,
    total: PropTypes.string.isRequired,
  }).isRequired,
  onBack: PropTypes.func.isRequired,
};

export default OrderDetails;
