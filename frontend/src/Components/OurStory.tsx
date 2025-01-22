import { forwardRef } from "react";
import { motion } from "framer-motion";

const OurStory = forwardRef<HTMLDivElement>((_props, ref) => {
  const floatingAnimation = {
    opacity: [0.4, 0.6, 0.4],
    y: [-10, 10, -10],
    rotate: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div
      ref={ref}
      className="h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Animated Floating Plant and Flower Icons */}
      <motion.img
        animate={floatingAnimation}
        src="https://cdn-icons-png.flaticon.com/128/8666/8666050.png"
        alt="Top Plant Icon"
        className="absolute top-10 left-4 sm:left-16 w-16 sm:w-24 h-16 sm:h-24 transform rotate-12"
      />
      <motion.img
        animate={floatingAnimation}
        src="https://cdn-icons-png.flaticon.com/128/7644/7644785.png"
        alt="Top Right Flower Icon"
        className="absolute top-8 right-6 sm:right-20 w-14 sm:w-20 h-14 sm:h-20 transform rotate-6"
      />
      <motion.img
        animate={floatingAnimation}
        src="https://cdn-icons-png.flaticon.com/128/2239/2239207.png"
        alt="Bottom Left Leaf Icon"
        className="absolute bottom-10 left-6 sm:left-20 w-20 sm:w-28 h-20 sm:h-28 transform rotate-3"
      />
      <motion.img
        animate={floatingAnimation}
        src="https://cdn-icons-png.flaticon.com/128/2545/2545521.png"
        alt="Bottom Right Flower Icon"
        className="absolute bottom-8 right-6 sm:right-16 w-16 sm:w-24 h-16 sm:h-24 transform -rotate-9"
      />
      <motion.img
        animate={floatingAnimation}
        src="https://cdn-icons-png.flaticon.com/128/2608/2608971.png"
        alt="Center Left Plant Icon"
        className="absolute top-1/2 left-4 sm:left-12 w-14 sm:w-20 h-14 sm:h-20 transform rotate-6 -translate-y-1/2"
      />
      <motion.img
        animate={floatingAnimation}
        src="https://cdn-icons-png.flaticon.com/128/9206/9206311.png"
        alt="Center Right Plant Icon"
        className="absolute top-1/2 right-4 sm:right-12 w-12 sm:w-16 h-12 sm:h-16 transform -rotate-6 -translate-y-1/2"
      />
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 relative z-10"
      >
        Inspired by Nature
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="text-base sm:text-xl text-gray-700 font-light leading-relaxed max-w-md sm:max-w-3xl relative z-10"
      >
        Our journey began with a simple idea: to redefine elegance through the
        harmony of nature. Each piece we design celebrates the purity of premium
        fabrics, inspired by the natural world’s textures, colors, and timeless
        beauty.
      </motion.p>
    </div>
  );
});


export default OurStory;
