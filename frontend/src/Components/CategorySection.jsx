import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Women",
    description: "Discover elegance and style for her.",
    image: "https://i.ibb.co/dKJMHgd/20250109-1049-Lavender-Serenity-simple-compose-01jh454qxvedya32j870kb0wcf.gif",
    icon: "https://cdn-icons-png.flaticon.com/512/6485/6485008.png", // Lavender icon
    link: "/women",
  },
  {
    name: "Men",
    description: "Gear up for adventure and bold style.",
    image: "https://i.ibb.co/S70tt03/20250109-1040-Mountain-Summit-Triumph-simple-compose-01jh44mphwe7m8nyjshr1cmbs0.gif",
    icon: "data:image/png;base64,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", // Mountain icon
    link: "/men",
  },
  {
    name: "Kids",
    description: "Fun, vibrant styles for the little ones.",
    image: "https://i.ibb.co/Tw0cjJC/20250109-1110-Children-Playing-Outdoors-storyboard-01jh46bbg6e7jb52sc3cs2beae.gif",
    icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png", // Sun icon
    link: "/kids",
  },
];

const CategorySection = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-8">
      {categories.map((category, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: index * 0.2 }}
          className="relative flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow-lg overflow-hidden group"
        >
          {/* Hover Animation Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition duration-700"
          ></motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full md:w-3/4 overflow-hidden"
          >
            <motion.img
              src={category.image}
              alt={`${category.name} category`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-[450px] object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 md:p-8 flex flex-col items-start justify-center w-full md:w-1/4 relative z-10 space-y-4"
          >
            {/* Icon and Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center space-x-4"
            >
              <motion.img
                src={category.icon}
                alt={`${category.name} icon`}
                whileHover={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12"
              />
              <h2 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition duration-500">
                {category.name}
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 group-hover:text-gray-800 transition duration-500"
            >
              {category.description}
            </motion.p>

            {/* Shop Now Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="px-6 py-2 bg-blue-600 text-white font-medium text-lg rounded-full shadow-lg hover:bg-blue-700 transition duration-500"
            >
              <Link to={category.link}>Shop Now</Link>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default CategorySection;
