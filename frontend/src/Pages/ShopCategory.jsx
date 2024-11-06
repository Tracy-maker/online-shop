import { useContext } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  
  return (
    <div>
      <img
        className="h-[400px] w-auto block mx-auto my-8 lg:h-auto lg:w-[97%]"
        src={props.banner}
        alt="banner"
      />
      <div className="flex justify-between items-center mx-[160px] my-4 lg:w-[90%] lg:mx-auto">
        <p className="text-lg">
          <span className="font-semibold">Showing 1-12 </span> out of 36 products
        </p>
        <div className="px-5 py-2 border border-gray-400 rounded-full text-sm lg:px-4 lg:py-2 lg:text-[15px]">
          Sort by
          <img
            src="https://img.icons8.com/?size=24&id=5QWObX9dsXkR&format=png"
            alt="dropdown"
            className="inline ml-2"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-y-20 mx-[170px] my-5 lg:w-[90%] lg:mx-auto lg:gap-y-10 sm:grid-cols-2">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex justify-center items-center mx-auto my-[150px] w-[233px] h-[69px] rounded-full bg-gray-200 text-gray-500 text-lg font-normal lg:w-[200px] lg:h-[60px] lg:text-[16px] md:w-[150px] md:h-[40px] md:text-[13px]">
        Explore More
      </div>
    </div>
  );
};


ShopCategory.propTypes = {
  banner: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ShopCategory;
