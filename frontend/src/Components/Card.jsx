import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Card Component
const Card = ({ trend, delay, fontColor }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const truncateContent = (text, maxLength = 300) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-stretch"
    >
      {/* Card Image */}
      <div className="md:w-1/3 flex-shrink-0">
        <img
          src={trend.image}
          alt={trend.title}
          className="w-full h-64 md:h-full object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-8 md:w-2/3 flex flex-col justify-between">
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: fontColor }}
          >
            {trend.title}
          </h2>
          <p className="text-gray-600 text-base mb-6 leading-relaxed">
            {truncateContent(trend.content)}
          </p>

          {/* Hashtags */}
          <div className="flex flex-wrap gap-3">
            {trend.hashtags.map((hashtag, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-200 text-gray-700 text-sm font-medium px-4 py-1 rounded-full"
              >
                {hashtag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="mt-6 flex justify-end">
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "#222",
              color: "#fff",
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-all"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// PropTypes Validation
Card.propTypes = {
  trend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  delay: PropTypes.number.isRequired,
  fontColor: PropTypes.string.isRequired,
};

export default Card;
