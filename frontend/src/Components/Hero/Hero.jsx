import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  // Slider settings for carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // Arrows removed for minimal design
  };

  return (
    <div className="h-[85vh] bg-white flex flex-col md:flex-row mx-auto mb-10">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center gap-6 px-12 md:pl-16 sm:pl-8">
        <h2 className="text-xl font-light uppercase text-gray-700 tracking-wide">
          New Collection
        </h2>
        <h1 className="text-6xl font-bold text-gray-900 md:text-5xl sm:text-4xl leading-tight">
          Elegance <br />
          Redefined
        </h1>
        <p className="text-lg text-gray-600 font-light tracking-wide md:text-base sm:text-sm">
          Discover our exclusive high-end fashion line. Minimalist design meets
          modern luxury, crafted for timeless sophistication.
        </p>

        <button className="mt-4 px-6 py-3 bg-gray-900 text-white font-medium text-lg rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300">
          Explore Collection
        </button>
      </div>

      {/* Right Section with Carousel */}
      <div className="flex-1 flex items-center justify-center w-full h-auto overflow-hidden">
        <Slider {...settings} className="w-full h-full">
          <div>
            <img
              src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="fashion-carousel-1"
              className="w-full h-[85vh] object-cover"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1200
"
              alt="fashion-carousel-2"
              className="w-full h-[85vh] object-cover"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="fashion-carousel-3"
              className="w-full h-[85vh] object-cover"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
