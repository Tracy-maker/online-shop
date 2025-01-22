const NewsLetter = () => {
  return (
    <div className="container mx-auto p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-lg mb-12">
      {/* Section Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">
          Join Our Exclusive Community
        </h2>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto mt-2">
          Be part of a fashion movement that celebrates individuality and inclusivity. Stay updated on the latest trends, exclusive discounts, and more!
        </p>
      </div>

      {/* Input Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-grow py-3 px-4 rounded-md border border-gray-300 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-500 focus:outline-none shadow-sm"
        />
        <button className="px-6 py-3 bg-gray-600 text-white font-medium rounded-md shadow-md transition">
          Subscribe
        </button>
      </div>

      {/* Social Media Section */}
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.instagram.com/"
          className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow on Instagram
        </a>
        <a
          href="https://www.facebook.com/"
          className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Like on Facebook
        </a>
      </div>
    </div>
  );
};

export default NewsLetter;
