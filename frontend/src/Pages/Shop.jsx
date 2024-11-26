import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Policy from "../Components/Policy/Policy";
const Shop = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="mb-16">
        <Hero />
      </section>

      {/* Popular Section */}
      <section className="mb-16 px-4">
        <h2 className="text-center text-gray-800 text-4xl font-bold tracking-wide mb-8">
          Shop by Popularity
        </h2>
        <div className="grid grid-cols-1 gap-12">
          <Popular category="Women" />
          <Popular category="Men" />
          <Popular category="Kids" />
          <Popular category="Accessories" />
        </div>
      </section>

      {/* Offers Section */}
      <section className="mb-16 px-4">
        <Offers />
      </section>

      {/* New Collections Section */}
      <section className="mb-16 px-4">
        <h2 className="text-center text-gray-800 text-4xl font-bold tracking-wide mb-8">
          Discover New Arrivals
        </h2>
        <NewCollections />
      </section>

      {/* Newsletter Section */}
      <section className="mb-2 px-4">
        <NewsLetter />
      </section>

      {/* Policy Section */}
      <section className="px-4">
        <Policy />
      </section>
    </div>
  );
};

export default Shop;
