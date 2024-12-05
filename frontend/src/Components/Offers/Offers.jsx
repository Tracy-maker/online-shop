import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Offers = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="w-[90%] mx-auto mb-12 rounded-[20px] bg-gradient-to-br from-gray-100 via-gray-50 to-white shadow-xl lg:mb-[80px]"
    >
      {/* Desktop Mode */}
      <div className="hidden lg:flex h-[70vh]">
        {/* Left Section */}
        <motion.div
          variants={childVariants}
          className="flex-1 flex flex-col justify-center gap-6 px-12"
        >
          <motion.h1
            variants={childVariants}
            className="text-gray-800 text-5xl font-extrabold leading-tight tracking-wide lg:text-4xl"
          >
            Bestsellers You Can&apos;t Miss <br /> For a Limited Time
          </motion.h1>
          <motion.p
            variants={childVariants}
            className="text-gray-600 text-lg font-light tracking-wide lg:text-base"
          >
            Explore our most popular items, carefully curated to upgrade your
            wardrobe with elegance and style. These top picks are loved by
            shoppers like you!
          </motion.p>

          {/* Shop Now Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            variants={childVariants}
            onClick={() => navigate("/popular")}
            className="px-6 py-3 rounded-full bg-gray-900 text-white text-lg font-medium shadow-md hover:bg-gray-700 transition-all duration-300 lg:px-5 lg:py-2 lg:text-base"
          >
            Shop Now
          </motion.button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          variants={childVariants}
          className="flex-1 flex items-center justify-center relative"
        >
          <div className="flex gap-4">
            {/* Image 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={childVariants}
              className="relative w-[30%] h-[80%] rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/7667437/pexels-photo-7667437.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Offer 1"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Image 3 (Now moved to second position) */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={childVariants}
              onClick={() => navigate("/popular")}
              className="relative w-[30%] h-[80%] rounded-lg shadow-lg overflow-hidden cursor-pointer"
            >
              <img
                src="https://images.pexels.com/photos/29480511/pexels-photo-29480511/free-photo-of-elegant-bouquet-of-roses-with-eucalyptus.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Popular Product"
                className="w-full h-full object-cover"
              />
              <motion.div className="absolute inset-0 bg-gray-800 bg-opacity-40 flex items-center justify-center text-white font-bold text-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                View Popular
              </motion.div>
            </motion.div>

            {/* Image 2 (Now moved to third position) */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={childVariants}
              className="relative w-[30%] h-[80%] rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/2529152/pexels-photo-2529152.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Offer 2"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Mode */}
      <div className="lg:hidden flex flex-col gap-6 py-8 px-4">
        <h1 className="text-gray-800 text-3xl font-extrabold leading-tight tracking-wide text-center">
          Bestsellers You Can&apos;t Miss
        </h1>
        <p className="text-gray-600 text-base font-light tracking-wide text-center">
          Discover our best-selling items! Upgrade your wardrobe with these
          curated picks. Perfect for you!
        </p>
        <button
          onClick={() => navigate("/popular")}
          className="mx-auto px-6 py-3 rounded-full bg-gray-900 text-white text-lg font-medium shadow-md hover:bg-gray-700 transition-all duration-300"
        >
          Shop Now
        </button>
      </div>
    </motion.div>
  );
};

export default Offers;
