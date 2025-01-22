import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categoryImages: Record<string, string> = {
  women:
    "https://i.ibb.co/dKJMHgd/20250109-1049-Lavender-Serenity-simple-compose-01jh454qxvedya32j870kb0wcf.gif",
  men: "https://i.ibb.co/S70tt03/20250109-1040-Mountain-Summit-Triumph-simple-compose-01jh44mphwe7m8nyjshr1cmbs0.gif",
  kids: "https://i.ibb.co/Tw0cjJC/20250109-1110-Children-Playing-Outdoors-storyboard-01jh46bbg6e7jb52sc3cs2beae.gif",
};

const categoryDescriptions: Record<string, string> = {
  women: "Elegant and stylish collections curated for her unique taste.",
  men: "Bold and adventurous designs tailored to elevate his wardrobe.",
  kids: "Fun and vibrant styles to bring joy to your little ones.",
};

// Define the mapping of current category to opposite category
const oppositeCategoryMap: Record<string, string> = {
  women: "men",
  men: "kids",
  kids: "women",
};

const CategorySection = ({ currentCategory }: { currentCategory: string }) => {
  // Get the opposite category based on the mapping
  const oppositeCategory = oppositeCategoryMap[currentCategory];

  if (!oppositeCategory) return null;

  return (
    <div className="container mx-auto px-6 py-16 flex flex-col items-center gap-12">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold tracking-wide text-gray-900 text-center"
      >
        YOU MAY ALSO LIKE
      </motion.h2>

      {/* Display One Opposite Category */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center gap-8"
      >
        {/* Image Section */}
        <motion.img
          src={categoryImages[oppositeCategory]}
          alt={`${oppositeCategory} category`}
          initial={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 h-[300px] object-cover rounded-md shadow-lg"
        />

        {/* Text Section */}
        <div className="flex flex-col justify-center items-start space-y-4 md:pl-8">
          {/* Description */}
          <h3 className="text-3xl font-bold text-gray-800">
            {oppositeCategory.charAt(0).toUpperCase() + oppositeCategory.slice(1)}'s Collection
          </h3>
          <p className="text-lg text-gray-600">
            {categoryDescriptions[oppositeCategory]}
          </p>
          {/* Call-to-Action */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="px-6 py-2 bg-gray-900 text-white font-medium text-lg rounded-full shadow-md hover:bg-gray-800 transition duration-500"
          >
            <Link to={`/${oppositeCategory}`}>Shop {oppositeCategory}</Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CategorySection;
