const Contact = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        We would love to hear from you! If you have any questions, concerns, or
        feedback, please don&apos;t hesitate to reach out to us. You can fill
        out the form below or contact us directly via email or phone.
      </p>
      <form className="max-w-xl mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Send Message
        </button>
      </form>
      <div className="mt-8 text-center">
        <p className="text-lg">Email: support@rimberio.com</p>
        <p className="text-lg">Phone: +1-234-567-890</p>
        <p className="text-lg">Address: 123 Fashion Ave, New York, NY</p>
      </div>
    </div>
  );
};

export default Contact;
