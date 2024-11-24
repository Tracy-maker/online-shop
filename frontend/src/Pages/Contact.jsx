const Contact = () => {
  return (
    <div className="container mx-auto p-8 space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1588097999668-339c38b390a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
          alt="Contact Us"
          className="w-full h-64 object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white">Contact Us</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="text-center">
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          We would love to hear from you! If you have any questions, concerns, 
          or feedback, please feel free to get in touch. Fill out the form below 
          or use the contact details provided to reach us directly.
        </p>
      </section>

      {/* Contact Form */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
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
              <strong>Email:</strong> support@rimberio.com
            </li>
            <li>
              <strong>Phone:</strong> +1-234-567-890
            </li>
            <li>
              <strong>Address:</strong> 123 Fashion Ave, New York, NY
            </li>
          </ul>
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
