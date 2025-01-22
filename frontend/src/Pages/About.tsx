import NewsLetter from "../Components/NewsLetter";

const About = () => {
  return (
    <div className="container mx-auto p-8 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-lg overflow-hidden mb-12">
        <img
          src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
          alt="About Us"
          className="w-full h-80 object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white">About Us</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Welcome to Rimberio Online Solution
        </h2>
        <p className="text-sm text-gray-600 max-w-7xl mx-auto">
          Your one-stop destination for fashion-forward clothing and
          accessories. We believe in empowering your style with quality,
          accessibility, and the latest trends.
        </p>
      </section>

      {/* Content Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* About Content */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
          <p className="text-lg text-gray-600">
            At Rimberio, we are committed to providing stylish and high-quality
            clothing and accessories for men, women, and kids. Our aim is to
            empower your wardrobe with versatile pieces that enhance your
            confidence and express your unique style.
          </p>
          <h3 className="text-2xl font-bold text-gray-800">Our Values</h3>
          <ul className="list-disc pl-6 text-lg text-gray-600">
            <li>Quality: Ensuring top-notch materials and craftsmanship.</li>
            <li>
              Inclusivity: Fashion that fits every size, age, and preference.
            </li>
            <li>
              Accessibility: Affordable prices without compromising on style.
            </li>
          </ul>
        </div>

        {/* About Images */}
        <div className="grid grid-cols-2 gap-2">
          <img
            src="https://images.unsplash.com/photo-1515339760107-1952b7a08454?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"
            alt="Stylish Clothing"
            className="w-full h-52 object-cover rounded-lg shadow"
          />
          <img
            src="https://images.unsplash.com/photo-1484503793037-5c9644d6a80a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"
            alt="Accessories"
            className="w-full h-52 object-cover rounded-lg shadow"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1691979207044-2079b438af30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"
            alt="Kids Fashion"
            className="w-full h-52 object-cover rounded-lg shadow"
          />
          <img
            src="https://images.pexels.com/photos/2529152/pexels-photo-2529152.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Men's Wear"
            className="w-full h-52 object-cover rounded-lg shadow"
          />
        </div>
      </section>

      {/* NewsLetter Section */}
      <NewsLetter />
    </div>
  );
};

export default About;
