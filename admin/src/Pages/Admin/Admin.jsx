import { Link } from "react-router-dom";

const Admin = () => {
  const features = [
    {
      id: 1,
      title: "Add Product",
      description:
        "Add new products effortlessly. Include details like name, category, pricing, and stock levels to keep your inventory updated.",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/add-property.png",
      bg: "bg-blue-500",
      link: "/addproduct",
    },
    {
      id: 2,
      title: "Product List",
      description:
        "View, edit, and organize all your products in one place. Keep your inventory accurate and easy to manage.",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/view-file.png",
      bg: "bg-green-500",
      link: "/listproduct",
    },
    {
      id: 3,
      title: "Order Management",
      description:
        "Track customer orders, monitor payments, and ensure timely delivery to maintain customer satisfaction.",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/order-history.png",
      bg: "bg-red-500",
      link: "/ordermanagement",
    },
    {
      id: 4,
      title: "Customer Feedback",
      description:
        "Review and respond to customer messages to enhance satisfaction and build trust.",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/comments.png",
      bg: "bg-yellow-500",
      link: "/customerfeedback",
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <div className="flex-grow p-10">
        <div className="bg-white bg-opacity-95 p-10 rounded-2xl shadow-2xl border border-gray-300">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 tracking-wide">
            Admin Dashboard
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Welcome to the Admin Dashboard! This is your central platform to
            efficiently manage your store. From adding products to tracking
            orders, every tool is designed to save time and boost productivity.
          </p>

          {/* Feature Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Link
                to={feature.link}
                key={feature.id}
                className="flex flex-col items-center text-center p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 ${feature.bg} text-white rounded-lg shadow-md mb-4`}
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-6 h-6"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-gray-600">
            Use the links above to navigate these features and manage your store
            efficiently. Each tool is intuitive, helping you focus on growing
            your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
