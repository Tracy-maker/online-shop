import Hero from "../Components/Hero";
import Popular from "../Components/Popular";
import Offers from "../Components/Offers";
import NewCollections from "../Components/NewCollections";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

      {/* Offers Section */}
      <section id="offers" className="mb-16 px-4">
        <motion.div
          initial="hidden"
          animate={visibleSection === "offers" ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
          }}
        >
          <Offers />
        </motion.div>
      </section>

      {/* Popular Section */}
      <section id="popular" className="mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={
            visibleSection === "popular" ? { opacity: 1, y: 0 } : { opacity: 0 }
          }
          transition={{ duration: 0.8 }}
          className="text-center text-gray-800 text-4xl font-bold tracking-wide mb-8"
        >
          Shop by Popularity
        </motion.h2>
        <motion.div
          initial="hidden"
          animate={visibleSection === "popular" ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="space-y-16" // Updated for a vertical stack layout
        >
          {["Women", "Men", "Kids"].map((category, i) => (
            <motion.div
              key={category}
              custom={i}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="overflow-hidden"
            >
              {/* Pass category to the Popular component */}
              <Popular category={category} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Shop;
