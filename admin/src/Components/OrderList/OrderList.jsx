import PropTypes from "prop-types";

const OrderList = ({ orders, onSelectOrder, onUpdateStatus }) => {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between hover:shadow-lg transform  transition duration-75"
          >
            <div className="flex items-center space-x-8">
              {/* Order ID */}
              <div>
                <h2 className="text-lg font-semibold text-gray-700">
                  <span className="text-gray-400">Order ID:</span> {order.id}
                </h2>
              </div>

              {/* Date */}
              <div>
                <p className="text-sm text-gray-500">
                  <span className="text-gray-400">Date:</span> {order.date}
                </p>
              </div>

              {/* Customer Name */}
              <div>
                <p className="text-sm text-gray-500">
                  <span className="text-gray-400">Customer:</span>{" "}
                  {order.customer.name}
                </p>
              </div>

              {/* Status */}
              <div className="flex items-center space-x-2">
                <p className="text-sm text-gray-500">
                  <span className="text-gray-400">Status:</span>
                </p>
                <select
                  value={order.status}
                  onChange={(e) => onUpdateStatus(order.id, e.target.value)}
                  className="p-2 rounded-md border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                >
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for Delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>

            {/* 操作按钮 */}
            <button
              onClick={() => onSelectOrder(order)}
              className="px-6 py-2 text-sm font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// PropTypes 验证
OrderList.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
  onSelectOrder: PropTypes.func.isRequired,
  onUpdateStatus: PropTypes.func.isRequired,
};

export default OrderList;
