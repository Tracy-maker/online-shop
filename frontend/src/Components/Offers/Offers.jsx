const Offers = () => {
  return (
    <div className="w-[90%] h-[90vh] flex mx-auto mb-12 rounded-[30px] bg-gradient-to-b from-[rgba(188,156,255,0.2)] to-[rgba(156,188,255,0.22)] lg:mb-[120px] md:h-[40vh] md:mb-[80px] sm:mb-[60px] xs:h-[28vh] xs:mb-[50px]">
      <div className="flex-1 px-[50px] flex flex-col justify-center">
        <h1 className="text-[#171717] text-[80px] font-semibold lg:text-[40px] md:text-[30px] sm:text-[22px] xs:text-[16px]">
          Exclusive
        </h1>
        <h1 className="text-[#171717] text-[80px] font-semibold lg:text-[40px] md:text-[30px] sm:text-[22px] xs:text-[16px]">
          Offers For You
        </h1>
        <p className="text-[#171717] text-[22px] font-semibold lg:text-[18px] md:text-[16px] sm:text-[13px] xs:text-[10px]">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="w-[282px] h-[70px] rounded-[35px] bg-[#ead5d5] text-white text-[22px] font-medium mt-8 cursor-pointer lg:w-[220px] lg:h-[50px] lg:text-[18px] md:w-[160px] md:h-[40px] md:text-[16px] sm:w-[140px] sm:h-[30px] sm:text-[12px] xs:w-[120px] xs:h-[25px] xs:text-[10px]">
          Check Now
        </button>
      </div>
      <div className="flex-1.5 flex items-center justify-end w-full h-auto overflow-hidden rounded-[30px] pt-[30px] md:pt-[10px]">
        <video
          src="https://player.vimeo.com/external/436029099.sd.mp4?s=b355c6440b90184699465959df38c350f1a3658b&profile_id=165&oauth2_token_id=57447761"
          autoPlay
          muted
          loop
          className="w-full h-auto object-contain"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Offers;
