
const NewsLetter = () => {
  return (
    <div
      className="w-4/5 h-[40vh] flex flex-col items-center justify-center mx-auto p-0 lg:px-20 gap-5 mb-36 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=600')",
      }}
    >
      <h1 className="text-white text-5xl font-semibold lg:text-3xl md:text-2xl sm:text-lg">
        Get Exclusive Offers on your Email
      </h1>
      <p className="text-white text-xl lg:text-lg md:text-sm sm:text-xs">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex items-center justify-between bg-white w-[730px] h-[70px] rounded-full border border-gray-300 lg:w-[600px] lg:h-[60px] md:w-[500px] md:h-[50px] sm:w-[400px] sm:h-[40px]">
        <input
          type="email"
          placeholder="Your Email id"
          className="w-[500px] ml-6 border-none outline-none text-gray-600 text-base font-sans lg:w-[400px] md:w-[300px] sm:w-[200px] sm:text-sm"
        />
        <button className="w-[210px] h-[70px] rounded-full bg-black text-white text-base cursor-pointer lg:w-[160px] lg:h-[60px] md:w-[120px] md:h-[50px] sm:w-[100px] sm:h-[40px]">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
