import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  // Slider settings for carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="h-[85vh] bg-gradient-to-b from-gray-200 to-gray-400 flex mx-auto mb-10">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center gap-5 pl-32 lg:pl-20 md:pl-10 sm:pl-5">
        <h2 className="text-2xl font-semibold text-gray-900 md:text-xl sm:text-lg">
          NEW ARRIVALS ONLY
        </h2>
        <div>
          <div className="flex items-center gap-5">
            <p className="text-5xl font-bold text-gray-800">new</p>
            <img
              src="https://img.icons8.com/?size=80&id=7wGVZVr6WbIO&format=png"
              alt="hand-icon"
              className="w-24 lg:w-20 md:w-16 sm:w-12"
            />
          </div>
          <p className="text-5xl font-bold text-gray-800 lg:text-4xl md:text-3xl sm:text-2xl">
            collections
          </p>
          <p className="text-5xl font-bold text-gray-800 lg:text-4xl md:text-3xl sm:text-2xl">
            for everyone
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 w-80 h-16 mt-8 bg-gray-500 text-white text-lg font-medium rounded-full lg:w-72 lg:h-14 lg:gap-3 lg:text-base md:w-60 md:h-12 md:text-sm sm:w-56 sm:h-10 sm:text-xs">
          <div>Latest Collection</div>
          <img
            src="https://img.icons8.com/?size=60&id=pmL4uEZdVEpg&format=png"
            alt="arrow"
            className="w-8"
          />
        </div>
      </div>

      {/* Right Section with Carousel */}
      <div className="flex-3 flex items-center justify-center w-full h-auto overflow-hidden rounded-lg sm:hidden">
        <Slider {...settings} className="w-full h-full">
          <div>
            <image
              src="https://player.vimeo.com/external/428946388.hd.mp4?s=93f3b8d625dd7d222135ef298ae2695136f8ec0e&profile_id=174&oauth2_token_id=57447761s"
              className="w-full h-auto object-contain rounded-lg"
            >
              Your browser does not support the video tag.
            </image>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1231231/pexels-photo-1231231.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="fashion-carousel-1"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/2345156/pexels-photo-2345156.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="fashion-carousel-2"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
