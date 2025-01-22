import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router";
import Breadcrum from "../Components/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description?: string;
}

const Product: React.FC = () => {
  const context = useContext(ShopContext);

  if (!context) {
    // Handle null context gracefully
    return <div>Shop context is not available.</div>;
  }

  const { all_product } = context;
  const { productId } = useParams<{ productId: string }>();

  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found.</div>;
  }

  // Filter related products (e.g., products from the same category)
  const relatedProducts = all_product.filter(
    (item) => item.id !== product.id // Exclude the current product
  );

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts data_product={relatedProducts} />
    </div>
  );
};

export default Product;
