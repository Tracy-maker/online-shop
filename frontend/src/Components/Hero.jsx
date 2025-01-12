import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import OurStory from "./OurStory";

const Hero = () => {
  const nextSectionRef = useRef(null);

  // Track the scroll position
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Transformations for heading and paragraph
  const h1X = useTransform(scrollY, [0, 300], [0, -100]); // Moves left
  const pX = useTransform(scrollY, [0, 300], [0, 100]); // Moves right
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      // Switch to gray background after 300px scroll
      setIsScrolled(latest > 300);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const handleScroll = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className={`h-screen flex items-center justify-center overflow-hidden ${
          isScrolled ? "bg-gray-200" : ""
        }`}
      >
        {/* Video Background */}
        {!isScrolled && (
          <div className="absolute inset-0">
            <video
              src="./src/Assets/main.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            ></video>
          </div>
        )}

        {/* Central Text */}
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center p-6"
        >
          <div className="transform translate-y-16 space-y-4">
            {/* Heading */}
            <motion.h1
              style={{ x: h1X }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide uppercase"
            >
              Timeless & Pure
            </motion.h1>

            {/* Subheading */}
            <motion.h2
              style={{ x: h1X }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-wide"
            >
              Natural Cotton Elegance
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              style={{ x: pX }}
              className="mt-4 text-xs sm:text-sm md:text-base font-light max-w-md sm:max-w-lg mx-auto"
            >
              Since 2019, we&apos;ve blended the purity of natural materials
              with year-round timeless styles to redefine luxury.
            </motion.p>
          </div>

          {/* Floating Button */}
          <motion.button
            onClick={handleScroll}
            className="mt-16 sm:mt-20 px-4 py-2 sm:px-6 sm:py-3 bg-white text-black font-medium text-sm sm:text-base rounded-full shadow-md hover:bg-gray-200 transition-all"
            animate={{
              y: [0, -10, 0], // Floating motion
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop", // Smooth looping
            }}
          >
            Explore Our Story
          </motion.button>
        </motion.div>
      </div>

      {/* Next Section */}
      <OurStory ref={nextSectionRef} />
    </>
  );
};

export default Hero;
