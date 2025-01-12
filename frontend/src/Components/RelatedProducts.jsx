
// import Item from "./Item";

const RelatedProducts = () => {
  return (
    <div className="flex flex-col items-center gap-2 h-[90vh] md:h-[70vh] sm:h-[60vh] xs:h-[50vh]">
      <h1 className="text-[#171717] text-5xl font-semibold md:text-4xl sm:text-3xl xs:text-2xl">
        Related Products
      </h1>
      <hr className="w-52 h-1.5 rounded-lg bg-[#252525] md:w-40 md:h-1 sm:w-32 sm:h-[3px] xs:w-24" />

      <div className="mt-12 flex gap-8 md:gap-5 sm:gap-4 xs:grid xs:grid-cols-2 xs:gap-5">
        {/* {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))} */}
      </div>
    </div>
  );
};

export default RelatedProducts;
