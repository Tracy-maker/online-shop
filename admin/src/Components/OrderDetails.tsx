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

interface OrderDetailsProps {
  order: Order;
  onBack: () => void; // Callback for navigating back
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order, onBack }) => {
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

      {/* Back Button */}
      <button
        onClick={onBack}
        className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
      >
        Back
      </button>
    </div>
  );
};

export default OrderDetails;
