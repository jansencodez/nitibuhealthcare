"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const heroData = [
  {
    id: 1,
    title: "Advancing Healthcare Through Innovation",
    subtitle:
      "Delivering comprehensive medical solutions across East & Central Africa",
    image: "/images/hero/test-tubes.jpg", // Replace with your image paths
    buttonText: "Explore Solutions",
  },
  {
    id: 2,
    title: "Your Trusted Healthcare Partner",
    subtitle: "Providing high-quality medical equipment and supplies",
    image: "/images/hero/intravenous-injection.jpg",
    buttonText: "View Products",
  },
  {
    id: 3,
    title: "Transforming Healthcare Delivery",
    subtitle: "State-of-the-art facilities and expert medical teams",
    image: "/images/products/SYRINGE 20ML1.jpg",
    buttonText: "Learn More",
  },
];

const HeroComponent = ({ hero }: { hero: (typeof heroData)[0] }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    });
  }, [controls]);

  return (
    <motion.div
      className="relative flex items-center justify-center h-screen w-full"
      initial={{ opacity: 0 }}
      animate={controls}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={hero.image}
          alt={hero.title}
          fill
          className="object-cover brightness-105"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-teal-800/40" />
      </div>

      {/* Content */}
      <motion.div
        className="text-center px-4 max-w-4xl relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl mb-12 text-teal-100 max-w-2xl mx-auto"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.8,
          }}
        >
          <button className="px-8 py-4 bg-white text-teal-800 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 flex items-center gap-2 mx-auto hover:bg-teal-50">
            <span>{hero.buttonText}</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1440 320" className="text-white w-full ">
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,128C672,117,768,139,864,160C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export const HeroCarousel = () => {
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroData.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {heroData.map((hero, index) => (
        <motion.div
          key={hero.id}
          className="absolute inset-0"
          initial={{
            opacity: 0,
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          }}
          animate={{
            opacity: index === currentHero ? 1 : 0,
            clipPath:
              index === currentHero
                ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                : "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          }}
          transition={{
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <HeroComponent hero={hero} />
        </motion.div>
      ))}
    </div>
  );
};
