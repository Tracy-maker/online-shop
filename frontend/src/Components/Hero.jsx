import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import OurStory from "./OurStory";

const Hero = () => {
  const nextSectionRef = useRef(null);

  // Track the scroll position
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Transformations for heading and paragraph
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
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
        className={`h-screen flex items-center justify-center overflow-hidden relative ${
          isScrolled ? "bg-gray-200" : ""
        }`}
      >
        {/* Video Background */}
        <motion.div
          className="absolute inset-0"
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }} // Full video
          animate={{
            clipPath: isScrolled
              ? "inset(0% 0% 100% 0%)" // Fold up like blinds
              : "inset(0% 0% 0% 0%)",
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <video
            src="./src/Assets/main.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          ></video>
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>

        {/* Central Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center text-center text-white p-6 space-y-6"
          style={{ opacity, marginTop: "30vh" }}
        >
          {/* Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-wide"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            Timeless & Pure
          </motion.h1>

          {/* Subheading */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide">
            Natural Cotton Elegance
          </h2>

          {/* Paragraph */}
          <p className="text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            Since 2019, we&apos;ve blended the purity of natural materials with
            year-round timeless styles to redefine luxury.
          </p>

          {/* Explore Button */}
          <motion.button
            onClick={handleScroll}
            className="px-6 py-3 bg-gray-50 text-gray-800 text-lg font-medium rounded-full shadow-lg hover:bg-white focus:ring-4 focus:ring-blue-300 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
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
