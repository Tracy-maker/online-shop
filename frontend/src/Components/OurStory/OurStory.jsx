import React from "react";
import { motion } from "framer-motion";

const OurStory = React.forwardRef((props, ref) => {
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
      className="h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
    >
      {/* Animated Floating Plant and Flower Icons */}
      {/* Top Left Plant */}
      <motion.img
        animate={floatingAnimation}
        src="https://cdn-icons-png.flaticon.com/128/8666/8666050.png"
        alt="Top Plant Icon"
        className="absolute top-10 left-16 w-24 h-24 transform rotate-12"
      />

      {/* Top Right Flower */}
      <motion.img
        animate={floatingAnimation}
        src="https://cdn-icons-png.flaticon.com/128/7644/7644785.png"
        alt="Top Right Flower Icon"
        className="absolute top-8 right-20 w-20 h-20 transform rotate-6"
      />

      {/* Bottom Left Leaf */}
      <motion.img
        animate={floatingAnimation}
        src="https://cdn-icons-png.flaticon.com/128/2239/2239207.png"
        alt="Bottom Left Leaf Icon"
        className="absolute bottom-16 left-20 w-28 h-28 transform rotate-3"
      />

      {/* Bottom Right Flower */}
      <motion.img
        animate={floatingAnimation}
        src="https://cdn-icons-png.flaticon.com/128/2545/2545521.png"
        alt="Bottom Right Flower Icon"
        className="absolute bottom-12 right-16 w-24 h-24 transform -rotate-9"
      />

      {/* Center Left Plant */}
      <motion.img
        animate={floatingAnimation}
        src="https://cdn-icons-png.flaticon.com/128/2608/2608971.png"
        alt="Center Left Plant Icon"
        className="absolute top-1/2 left-12 w-20 h-20 transform rotate-6 -translate-y-1/2"
      />

      {/* Center Right Plant */}
      <motion.img
        animate={floatingAnimation}
        src="https://cdn-icons-png.flaticon.com/128/9206/9206311.png"
        alt="Center Right Plant Icon"
        className="absolute top-1/2 right-12 w-16 h-16 transform -rotate-6 -translate-y-1/2"
      />

      {/* Story Content */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-gray-900 mb-6 relative z-10"
      >
        Inspired by Nature
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="text-xl text-gray-700 font-light leading-relaxed max-w-3xl relative z-10"
      >
        Our journey began with a simple idea: to redefine elegance through the
        harmony of nature. Each piece we design celebrates the purity of premium
        fabrics, inspired by the natural world’s textures, colors, and timeless
        beauty.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="text-xl text-gray-700 font-light leading-relaxed max-w-3xl mt-4 relative z-10"
      >
        Every detail of our collections is thoughtfully crafted to bring you
        unmatched sophistication, blending modern luxury with the serene charm
        of nature.
      </motion.p>
    </div>
  );
});

OurStory.displayName = "OurStory";

export default OurStory;
