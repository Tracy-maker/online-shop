import { useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import OurStory from "./OurStory";

const Hero = () => {
  const nextSectionRef = useRef(null);

  // Track the scroll position
  const { scrollY } = useViewportScroll();

  // Transformations for images and text
  const leftImageY = useTransform(scrollY, [0, 300], [0, -50]);
  const rightImageY = useTransform(scrollY, [0, 300], [0, 50]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const textScale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const handleScroll = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen bg-white flex items-center justify-center overflow-hidden">
        {/* Image Grid with Motion */}
        <div className="flex w-full h-full">
          {/* Left Large Image */}
          <motion.div
            style={{ y: leftImageY }}
            className="flex-1 relative"
          >
            <img
              src="https://images.pexels.com/photos/19171591/pexels-photo-19171591/free-photo-of-black-and-white-photo-of-two-people-walking-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Large Fashion"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Smaller Image */}
          <div className="flex flex-col flex-1 p-4 justify-center">
            <motion.div
              style={{ y: rightImageY }}
              className="relative flex-1"
            >
              <img
                src="https://images.pexels.com/photos/17496497/pexels-photo-17496497.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Small Fashion"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Central Text */}
        <motion.div
          style={{
            opacity: textOpacity,
            scale: textScale,
          }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-center"
        >
          <h1 className="text-[10rem] font-extrabold tracking-widest uppercase sm:text-7xl md:text-8xl leading-tight">
            Elegant & Comfort
          </h1>

          <div className="mt-12">
            <p className="text-xs sm:text-xs md:text-sm font-light max-w-3xl">
              Established in 2019, we blend timeless elegance with unmatched
              comfort to redefine modern luxury.
            </p>
          </div>

          <div className="mt-12">
            <button
              onClick={handleScroll}
              className="px-6 py-3 bg-white text-black font-medium text-sm rounded-full shadow-lg hover:bg-gray-200 transition-all"
            >
              Explore Our Story
            </button>
          </div>
        </motion.div>
      </div>

      {/* Next Section */}
      <OurStory ref={nextSectionRef} />
    </>
  );
};

export default Hero;
