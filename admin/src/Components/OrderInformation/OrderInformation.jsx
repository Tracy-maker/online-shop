const OrderInformation = () => {
  const orders = [
    {
      id: "ORD001",
      customer: "John Doe",
      date: "2024-11-01",
      status: "Shipped",
      total: "$250.00",
    },
    {
      id: "ORD002",
      customer: "Jane Smith",
      date: "2024-11-02",
      status: "Processing",
      total: "$150.00",
    },
    {
      id: "ORD003",
      customer: "Alice Johnson",
      date: "2024-11-03",
      status: "Delivered",
      total: "$300.00",
    },
  ];

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Order Information</h1>
      <p className="text-lg text-gray-600 mb-8">
        Below is a summary of recent customer orders. Click on an order for more details or to update its status.
      </p>

      {/* Order Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <tr>
              <th className="text-left px-6 py-3 font-semibold">Order ID</th>
              <th className="text-left px-6 py-3 font-semibold">Customer</th>
              <th className="text-left px-6 py-3 font-semibold">Date</th>
              <th className="text-left px-6 py-3 font-semibold">Status</th>
              <th className="text-left px-6 py-3 font-semibold">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                } hover:bg-gray-200 transition-all`}
              >
                <td className="px-6 py-4 text-gray-700">{order.id}</td>
                <td className="px-6 py-4 text-gray-700">{order.customer}</td>
                <td className="px-6 py-4 text-gray-700">{order.date}</td>
                <td
                  className={`px-6 py-4 font-medium ${
                    order.status === "Shipped"
                      ? "text-blue-500"
                      : order.status === "Processing"
                      ? "text-yellow-500"
                      : "text-green-500"
                  }`}
                >
                  {order.status}
                </td>
                <td className="px-6 py-4 text-gray-700">{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderInformation;
