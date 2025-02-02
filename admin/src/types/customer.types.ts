export interface Customer {
    id: string;
    name: string;
    address: string;
    phone: string;
    paymentMethod: "Credit Card" | "PayPal" | "Bank Transfer" | "Cash on Delivery";
  }
  