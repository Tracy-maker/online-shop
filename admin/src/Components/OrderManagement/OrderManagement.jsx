import { useState } from "react";
import OrderList from "../OrderList/OrderList";
import OrderDetails from "../OrderDetails/OrderDetails";

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    {
      id: "ORD001",
      customer: {
        name: "John Doe",
        address: "123 Main Street, Melbourne, VIC 3000",
        phone: "0412345678",
        paymentMethod: "Credit Card",
      },
      date: "2024-11-01",
      status: "Shipped",
      products: [
        { name: "Men's Jacket", model: "M123", quantity: 1, price: "$150.00" },
        { name: "Cotton T-Shirt", model: "T456", quantity: 2, price: "$40.00" },
        { name: "Denim Jeans", model: "D789", quantity: 1, price: "$70.00" },
      ],
      total: "$300.00",
    },
    {
      id: "ORD002",
      customer: {
        name: "Jane Smith",
        address: "456 Oak Avenue, Sydney, NSW 2000",
        phone: "0423456789",
        paymentMethod: "PayPal",
      },
      date: "2024-11-02",
      status: "Packing",
      products: [
        { name: "Women's Blouse", model: "W001", quantity: 1, price: "$60.00" },
        { name: "Skinny Jeans", model: "J002", quantity: 1, price: "$90.00" },
      ],
      total: "$150.00",
    },
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleUpdateStatus = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Order Management
      </h1>

      {!selectedOrder ? (
        <OrderList
          orders={orders}
          onSelectOrder={setSelectedOrder}
          onUpdateStatus={handleUpdateStatus}
        />
      ) : (
        <OrderDetails
          order={selectedOrder}
          onBack={() => setSelectedOrder(null)}
        />
      )}
    </div>
  );
};

export default OrderManagement;
