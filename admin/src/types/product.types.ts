// the definition of subcategory options
export type SubcategoryOptions = Record<"women" | "men" | "kids", string[]>;

// the definition of subcategory
export const subcategoryOptions: SubcategoryOptions = {
  women: ["dress", "tops", "shirts", "pants", "accessories"],
  men: ["shirts", "pants", "tops", "accessories"],
  kids: ["dress", "tops", "shirts", "pants", "accessories"],
};

// the definition of product
export interface Product {
  id?: string;
  name: string;
  description?: string;
  category: keyof SubcategoryOptions; 
  subcategory: string;
  price: number;
  color: string;
  sizes: string[];
  bestSeller: boolean;
  image?: string;
}
