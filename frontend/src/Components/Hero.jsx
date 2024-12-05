import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurStory from "./OurStory";

const Hero = () => {
  const nextSectionRef = useRef(null);

  // Slider settings for carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  const handleScroll = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="h-screen bg-white flex flex-col md:flex-row mx-auto mb-10">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center gap-6 px-12 md:pl-16 sm:pl-8">
          <h2 className="text-xl font-light uppercase text-gray-700 tracking-wide md:text-lg sm:text-base">
            New Collection
          </h2>
          <h1 className="text-6xl font-bold text-gray-900 md:text-5xl sm:text-4xl xs:text-3xl leading-tight">
            Elegance <br />
            Redefined
          </h1>
          <p className="text-lg text-gray-600 font-light tracking-wide md:text-base sm:text-sm xs:text-xs">
            Discover our exclusive high-end fashion line. Minimalist design
            meets modern luxury, crafted for timeless sophistication.
          </p>

          <button
            onClick={handleScroll}
            className="mt-4 px-4 py-2 bg-gray-900 text-white font-medium text-sm rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 sm:mt-3 sm:py-3 xs:px-3 xs:py-1 animate-bounce"
          >
            Our Story
          </button>
        </div>

        {/* Right Section with Carousel */}
        <div className="hidden md:flex flex-1 items-center justify-center w-full h-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div
              className="w-full h-full"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 85%, 90% 88%, 80% 92%, 70% 90%, 60% 95%, 50% 92%, 40% 95%, 30% 90%, 20% 92%, 10% 88%, 0 90%)",
                backgroundColor: "rgba(255, 255, 255, 0.8)", 
              }}
            >
              <Slider {...settings} className="w-full h-full">
                <div>
                  <img
                    src="https://images.pexels.com/photos/19171591/pexels-photo-19171591/free-photo-of-black-and-white-photo-of-two-people-walking-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="fashion-carousel-1"
                    className="w-full h-screen object-cover"
                  />
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/17496497/pexels-photo-17496497.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="fashion-carousel-2"
                    className="w-full h-screen object-cover"
                  />
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/4940756/pexels-photo-4940756.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="fashion-carousel-3"
                    className="w-full h-screen object-cover"
                  />
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/1619765/pexels-photo-1619765.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="fashion-carousel-4"
                    className="w-full h-screen object-cover"
                  />
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/27980152/pexels-photo-27980152/free-photo-of-elegant-couple-on-a-cliff-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="fashion-carousel-5"
                    className="w-full h-screen object-cover"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* Next Section */}
      <OurStory ref={nextSectionRef} />
    </>
  );
};

export default Hero;
