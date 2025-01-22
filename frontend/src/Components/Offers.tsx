import { motion } from "framer-motion";
import { useState } from "react";

const Offers = () => {
  // State to track which image is active
  const [activeImage, setActiveImage] = useState(0);

  // Image data
  const images = [
    {
      id: 0,
      src: "https://images.pexels.com/photos/2529152/pexels-photo-2529152.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Fabric derived from nature",
    },
    {
      id: 1,
      src: "https://images.pexels.com/photos/7667437/pexels-photo-7667437.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Natural materials inspiration",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/29480511/pexels-photo-29480511/free-photo-of-elegant-bouquet-of-roses-with-eucalyptus.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      alt: "Nature-inspired elegance",
    },
  ];

  // Function to handle image click and show the next image
  const handleNextImage = () => {
    setActiveImage((prevImage) => (prevImage + 1) % images.length);
  };

  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="w-[90%] mx-auto mb-16 bg-gradient-to-br from-[#f5f5f5] via-[#f9f9f9] to-white rounded-lg shadow-lg p-8 lg:w-[80%] lg:mb-20 flex flex-col lg:flex-row gap-12">
      {/* Left Section: Images */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        className="relative w-full lg:w-[50%] h-[400px] flex items-center justify-center"
        onClick={handleNextImage} // Click handler for images
      >
        {/* Render the active image */}
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className={`absolute h-[80%] w-[80%] rounded-lg overflow-hidden shadow-lg cursor-pointer ${
              activeImage === index
                ? "z-20 scale-105 opacity-100"
                : "z-10 scale-95 opacity-50"
            }`}
            style={{
              transform: `translateY(${index * 10}px)`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: activeImage === index ? 1 : 0,
              scale: activeImage === index ? 1.05 : 0.95,
            }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Right Section: Text */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariants}
        className="w-full lg:w-[50%] flex flex-col justify-center gap-6 text-center lg:text-left"
      >
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-snug">
          Inspired by Nature, Woven with Care
        </h1>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Click on the images to explore the elegance behind every piece. Each
          product is crafted from the finest natural materials, blending
          sustainability with timeless design.
        </p>
      </motion.div>
    </div>
  );
};

export default Offers;
