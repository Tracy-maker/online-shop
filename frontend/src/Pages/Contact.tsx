import React from "react";

const Contact: React.FC = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for your message!");
  };

  return (
    <div className="container mx-auto p-8 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
          alt="Fashion Store"
          className="w-full h-80 object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white">Contact Us</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="text-center py-5">
        <p className="text-base text-gray-700 max-w-5xl mx-auto">
          We would love to hear from you! If you have any questions, concerns,
          or feedback, please feel free to get in touch. Fill out the form below
          or use the contact details provided to reach us directly.
        </p>
      </section>

      {/* Contact Form and Details */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none"
                placeholder="Your Message"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Reach out to us via email, phone, or visit us at our address.
          </p>
          <ul className="space-y-4 text-lg text-gray-600">
            <li>
              <strong>Email:</strong>{" "}
              <span className="text-blue-600">support@rimberio.com</span> <br />
              <span className="text-sm text-gray-500">
                (Our team will respond within 24 hours.)
              </span>
            </li>
            <li>
              <strong>Phone (General Inquiries):</strong> +1-234-567-890
            </li>
            <li>
              <strong>Phone (Returns & Exchanges):</strong> +1-234-567-891{" "}
              <br />
              <span className="text-sm text-gray-500">
                (Available Monday to Friday, 9:00 AM - 6:00 PM)
              </span>
            </li>
            <li>
              <strong>Address:</strong> 123 Fashion Ave, New York, NY
            </li>
          </ul>
          <hr className="my-4" />
          <p className="text-sm text-gray-500">
            Note: Our customer service is available on weekdays only. For urgent
            matters outside office hours, please send an email to{" "}
            <span className="text-gray-600 font-semibold">
              support@rimberio.com
            </span>
            .
          </p>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="bg-gray-50 p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Visit Our Store
        </h2>
        <div className="w-full h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.840796032801!2d-74.0060150845923!3d40.71277527933061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3173a8bf51%3A0xe58b1f3aef8b6da5!2s123%20Fashion%20Ave%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1690199089075!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg border border-gray-300 shadow-md"
          ></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              What is the delivery time?
            </h3>
            <p className="text-gray-600">
              Standard delivery usually takes 3-5 business days. Expedited
              shipping options are also available at checkout.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              How can I track my order?
            </h3>
            <p className="text-gray-600">
              You can track your order using the tracking number sent to your
              email after your purchase.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              What is your return policy?
            </h3>
            <p className="text-gray-600">
              We offer a 30-day return policy for unused items in their original
              packaging. Visit our Return Policy page for details.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Can I modify my order after placing it?
            </h3>
            <p className="text-gray-600">
              Orders can be modified within 24 hours of placement. Contact our
              support team for assistance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
