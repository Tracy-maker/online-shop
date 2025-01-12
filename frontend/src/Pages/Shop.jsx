import Hero from "../Components/Hero";
import NewCollections from "../Components/NewCollections";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CategorySection from "../Components/CategorySection";

const Shop = () => {
  const [visibleSection, setVisibleSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section id="hero" className="mb-16">
        <Hero />
      </section>

      {/* New Collections Section */}
      <section id="new-collections" className="mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={
            visibleSection === "new-collections"
              ? { opacity: 1, y: 0 }
              : { opacity: 0 }
          }
          transition={{ duration: 0.8 }}
          className="text-center text-gray-800 text-4xl font-bold tracking-wide mb-8"
        >
          Discover New Arrivals
        </motion.h2>
        <motion.div
          initial="hidden"
          animate={visibleSection === "new-collections" ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
          className="grid grid-cols-1 gap-12"
        >
          <NewCollections />
        </motion.div>
      </section>

      <CategorySection />
    </div>
  );
};

export default Shop;
