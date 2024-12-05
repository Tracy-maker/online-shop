const NewsLetter = () => {
  return (
    <div
      className="w-4/5 h-[40vh] flex flex-col items-center justify-center mx-auto p-8 gap-6 mb-36 bg-cover bg-center rounded-lg shadow-lg"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1200')",
      }}
    >
      {/* Heading */}
      <h1 className="text-white text-4xl font-bold tracking-wide text-center lg:text-3xl md:text-2xl sm:text-xl">
        Join Our Exclusive Club
      </h1>

      {/* Subheading */}
      <p className="text-white text-lg text-center font-light tracking-wide lg:text-base md:text-sm sm:text-xs">
        Be the first to know about new arrivals, exclusive offers, and trends.
      </p>

      {/* Email Input */}
      <div className="flex items-center w-full max-w-2xl gap-4">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-grow py-3 px-6 bg-gray-100 rounded-full border border-gray-300 outline-none text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-gray-400 lg:py-2 lg:px-4 sm:text-sm"
        />
        <button className="px-6 py-3 bg-black text-white rounded-full text-lg font-medium shadow-md hover:bg-gray-800 transition-all lg:px-5 lg:py-2 lg:text-base sm:text-sm">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
