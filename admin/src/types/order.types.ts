import { Product } from "./product.types";
import { Customer } from "./customer.types";

export interface Order {
  id: string;
  customer: Customer;
  date: string;
  status: "Order Placed" | "Packing" | "Shipped" | "Out for Delivery" | "Delivered";
  products: Product[];
  total: string;
}
