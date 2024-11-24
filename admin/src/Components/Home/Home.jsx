const Home = () => {
    return (
      <div className="min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 flex flex-col items-center justify-center text-center p-8">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Rimberio Online Solution
          </h1>
          <p className="text-gray-700 mt-4 text-lg max-w-3xl">
            Welcome to the admin panel of Rimberio Online Solution. Manage your
            fashion store effortlessly—add trendy styles, update inventory, and
            keep your collections fresh and exciting for men, women, and kids.
          </p>
        </header>
  
        {/* Features Section */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          {/* Add Product Feature */}
          <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-pink-100 text-pink-600 p-3 rounded-full mr-4">
                👗
              </div>
              <h2 className="text-2xl font-semibold">Add New Products</h2>
            </div>
            <p>
              Add trendy fashion products for men, women, and kids. Easily update
              product details such as name, price, and category.
            </p>
          </div>
  
          {/* Manage Inventory Feature */}
          <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                🛍️
              </div>
              <h2 className="text-2xl font-semibold">Manage Inventory</h2>
            </div>
            <p>
              Keep track of your inventory levels for all categories and make sure
              your bestsellers are always in stock.
            </p>
          </div>
        </main>
  
        {/* Footer */}
        <footer className="mt-16 text-gray-600 text-sm">
          <p>&copy; 2024 Rimberio Online Solution. All Rights Reserved.</p>
        </footer>
      </div>
    );
  };
  
  export default Home;
  