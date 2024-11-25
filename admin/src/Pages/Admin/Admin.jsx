import Sidebar from "../../Components/Sidebar/Sidebar";

const Admin = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 pt-36 text-gray-200 fixed top-0 left-4">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow ml-64 p-10">
        <div className="bg-white bg-opacity-95 p-10 rounded-2xl shadow-2xl border border-gray-300">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 tracking-wide">
            Admin Dashboard
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Welcome to the Admin Dashboard! This is your central platform to efficiently manage your store. From adding products to tracking orders, every tool is designed to save time and boost productivity.
          </p>

          {/* Feature Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add Product */}
            <div className="flex flex-col items-center text-center p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/000000/add.png"
                alt="Add Product"
                className="w-12 h-12 mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Add Product
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Add new products effortlessly. Include details like name, category, pricing, and stock levels to keep your inventory updated.
              </p>
            </div>

            {/* List Product */}
            <div className="flex flex-col items-center text-center p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/000000/list.png"
                alt="List Product"
                className="w-12 h-12 mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                List Product
              </h2>
              <p className="text-gray-600 leading-relaxed">
                View, edit, and organize all your products in one place. Keep your inventory accurate and easy to manage.
              </p>
            </div>

            {/* Order Information */}
            <div className="flex flex-col items-center text-center p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/000000/order-history.png"
                alt="Order Information"
                className="w-12 h-12 mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Order Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Track customer orders, monitor payments, and ensure timely delivery to maintain customer satisfaction.
              </p>
            </div>
          </div>

          <p className="mt-8 text-gray-600">
            Use the sidebar navigation to explore these features and manage your store efficiently. Each tool is intuitive, helping you focus on growing your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
