const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="flex items-center gap-2 text-gray-600 text-lg font-semibold capitalize my-8 mx-auto sm:mx-12 lg:mx-44">
      HOME
      <img
        src="https://img.icons8.com/?size=16&id=Y9LBY15WBaoL&format=png"
        alt="left-arrow"
        className="inline"
      />
      SHOP
      <img
        src="https://img.icons8.com/?size=16&id=Y9LBY15WBaoL&format=png"
        alt="left-arrow"
        className="inline"
      />
      {product.category}
      <img
        src="https://img.icons8.com/?size=16&id=Y9LBY15WBaoL&format=png"
        alt="left-arrow"
        className="inline"
      />
      {product.name}
    </div>
  );
};

export default Breadcrum;
