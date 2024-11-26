const Offers = () => {
  return (
    <div className="w-[90%] h-[80vh] flex mx-auto mb-12 rounded-[20px] bg-gradient-to-br from-gray-50 via-gray-200 to-gray-300 shadow-lg lg:mb-[100px] md:h-[50vh] md:mb-[80px] sm:mb-[60px] xs:h-[40vh] xs:mb-[50px]">
      {/* Left Section */}
      <div className="flex-1 px-12 flex flex-col justify-center gap-4">
        <h1 className="text-gray-800 text-6xl font-bold leading-tight tracking-wide lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl">
          Exclusive <br /> Offers for You
        </h1>
        <p className="text-gray-600 text-lg font-light tracking-wide lg:text-base md:text-sm sm:text-xs">
          Discover handpicked bestsellers with unbeatable deals.
        </p>
        <button className="px-6 py-3 rounded-full bg-gray-900 text-white text-lg font-medium shadow-md hover:bg-gray-700 transition-all duration-300 lg:px-5 lg:py-2 lg:text-base md:px-4 md:py-2 md:text-sm sm:px-3 sm:py-1 sm:text-xs">
          Explore Now
        </button>
      </div>

      {/* Right Section */}
      <div className="flex-1.5 flex items-center justify-center rounded-r-[20px] overflow-hidden">
        <video
          src="https://player.vimeo.com/external/436029099.sd.mp4?s=b355c6440b90184699465959df38c350f1a3658b&profile_id=165&oauth2_token_id=57447761"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Offers;
