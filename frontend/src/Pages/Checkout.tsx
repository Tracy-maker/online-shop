import React, { useState } from "react";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Load Stripe
const stripePromise: Promise<Stripe | null> = loadStripe("your-publishable-key-here");

interface DeliveryInfo {
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<string>("");
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleDeliveryInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDeliveryInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) {
      setPaymentStatus("Stripe is not loaded yet.");
      setIsProcessing(false);
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      setPaymentStatus("Card information is not available.");
      setIsProcessing(false);
      return;
    }

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        "your-client-secret-here", // Replace with client secret from your server
        {
          payment_method: {
            card: card,
            billing_details: {
              name: deliveryInfo.name,
              email: deliveryInfo.email,
            },
          },
        }
      );

      if (error) {
        setPaymentStatus(error.message || "Payment failed.");
      } else if (paymentIntent?.status === "succeeded") {
        setPaymentStatus("Payment Successful!");
      }
    } catch (error) {
      setPaymentStatus("An unexpected error occurred.");
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>

      {/* Delivery Information */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Delivery Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={deliveryInfo.name}
              onChange={handleDeliveryInfoChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={deliveryInfo.email}
              onChange={handleDeliveryInfoChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={deliveryInfo.address}
              onChange={handleDeliveryInfoChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your address"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">City</label>
            <input
              type="text"
              name="city"
              value={deliveryInfo.city}
              onChange={handleDeliveryInfoChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your city"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">State</label>
            <input
              type="text"
              name="state"
              value={deliveryInfo.state}
              onChange={handleDeliveryInfoChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your state"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">ZIP Code</label>
            <input
              type="text"
              name="zip"
              value={deliveryInfo.zip}
              onChange={handleDeliveryInfoChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your ZIP code"
              required
            />
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Payment Information</h2>
        <div className="border border-gray-300 p-4 rounded-lg">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": { color: "#aab7c4" },
                },
                invalid: { color: "#9e2146" },
              },
            }}
          />
        </div>
      </div>

      {/* Payment Status */}
      {paymentStatus && (
        <div className={`mt-4 text-center ${paymentStatus.includes("Successful") ? "text-green-500" : "text-red-500"}`}>
          {paymentStatus}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full py-3 mt-6 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

const CheckoutPage: React.FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <CheckoutForm />
      </div>
    </Elements>
  );
};

export default CheckoutPage;
