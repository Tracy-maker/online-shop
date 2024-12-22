import PropTypes from "prop-types";

const Filter = ({
  showFilter,
  setShowFilter,
  toggleColor,
  toggleSize,
  toggleUsage,
  toggleCategory,
}) => {
  const colors = [
    "Black",
    "White",
    "Purple",
    "Pink",
    "Burgundy",
    "Red",
    "Blue",
    "Orange",
    "Beige",
    "Green",
    "Brown",
    "Yellow",
    "Grey",
    "Multicolor",
    "Brown Gray",
  ];

  const categories = ["Women", "Men", "Kids", "Accessories"];

  return (
    <div className="w-full sm:w-60 bg-gray-100 sm:bg-white rounded-lg p-4">
      {/* Header */}
      <div
        onClick={() => setShowFilter(!showFilter)}
        className="flex justify-between items-center cursor-pointer text-gray-800 text-lg font-semibold sm:text-xl mb-4"
      >
        <span>Filters</span>
        <img
          className={`h-4 transition-transform duration-300 ${
            showFilter ? "rotate-180" : ""
          } sm:hidden`}
          src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
          alt="toggle"
        />
      </div>

      {/* Responsive Filters Container */}
      <div
        className={`space-y-6 ${
          showFilter ? "block" : "hidden"
        } sm:block transition-all duration-300`}
      >
        {/* Category Filter */}
        <div className="border border-gray-300 rounded-lg p-4">
          <p className="text-sm font-medium mb-3 text-gray-700">Categories</p>
          <div className="flex flex-col gap-2 text-[12px] font-light text-gray-700">
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center gap-2 cursor-pointer hover:text-gray-500"
              >
                <input
                  className="w-4 h-4 rounded text-gray-500 focus:ring-gray-400"
                  type="checkbox"
                  value={category}
                  onChange={toggleCategory}
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        {/* Color Filter */}
        <div className="border border-gray-300 rounded-lg p-4">
          <p className="text-sm font-medium mb-3 text-gray-700">Colors</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 text-[12px] font-light text-gray-700">
            {colors.map((color) => (
              <label
                key={color}
                className="flex items-center gap-2 cursor-pointer hover:text-gray-500"
              >
                <input
                  className="w-4 h-4 rounded text-gray-500 focus:ring-gray-400"
                  type="checkbox"
                  value={color}
                  onChange={toggleColor}
                />
                {color}
              </label>
            ))}
          </div>
        </div>

        {/* Size Filter */}
        <div className="border border-gray-300 rounded-lg p-4">
          <p className="text-sm font-medium mb-3 text-gray-700">Sizes</p>
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-2 text-[12px] font-light text-gray-700">
            {["S", "M", "L", "XL"].map((size) => (
              <label
                key={size}
                className="flex items-center gap-2 cursor-pointer hover:text-gray-500"
              >
                <input
                  className="w-4 h-4 rounded text-gray-500 focus:ring-gray-400"
                  type="checkbox"
                  value={size}
                  onChange={toggleSize}
                />
                {size}
              </label>
            ))}
          </div>
        </div>

        {/* Usage Filter */}
        <div className="border border-gray-300 rounded-lg p-4">
          <p className="text-sm font-medium mb-3 text-gray-700">Usage</p>
          <div className="flex flex-col gap-2 text-[12px] font-light text-gray-700">
            {["Work", "Date", "Anniversary"].map((usage) => (
              <label
                key={usage}
                className="flex items-center gap-2 cursor-pointer hover:text-gray-500"
              >
                <input
                  className="w-4 h-4 rounded text-gray-500 focus:ring-gray-400"
                  type="checkbox"
                  value={usage}
                  onChange={toggleUsage}
                />
                {usage}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Filter.propTypes = {
  showFilter: PropTypes.bool.isRequired,
  setShowFilter: PropTypes.func.isRequired,
  toggleColor: PropTypes.func.isRequired,
  toggleSize: PropTypes.func.isRequired,
  toggleUsage: PropTypes.func.isRequired,
  toggleCategory: PropTypes.func.isRequired,
};

export default Filter;
