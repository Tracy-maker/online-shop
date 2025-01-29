import React from "react";

interface Product {
  name: string;
  model: string;
  quantity: number;
  price: string;
}

interface Customer {
  name: string;
  address: string;
  phone: string;
  paymentMethod: string;
}

interface Order {
  id: string;
  customer: Customer;
  date: string;
  status: string;
  products: Product[];
  total: string;
}

interface OrderListProps {
  orders: Order[];
  onSelectOrder: (order: Order) => void;
  onUpdateStatus: (id: string, status: string) => void;
}

const OrderList: React.FC<OrderListProps> = ({
  orders,
  onSelectOrder,
  onUpdateStatus,
}) => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="space-y-8">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-xl shadow-md p-8 flex items-center justify-between hover:shadow-lg transform transition duration-150"
          >
            {/* Order Details */}
            <div className="flex items-center space-x-10">
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

            {/* Action Button */}
            <button
              onClick={() => onSelectOrder(order)}
              className="px-8 py-3 text-sm font-semibold bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
