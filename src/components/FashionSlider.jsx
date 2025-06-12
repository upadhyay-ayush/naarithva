import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Unveil the Royal Touch",
    subtitle: "Bridal Lehengas & Sarees Collection 2025",
    image:
      "https://www.kalkifashion.com/blogs/wp-content/uploads/2024/08/Top_6_Bridal_Lehenga_Trends_For_The_Upcoming_Wedding_Season_2024-scaled.jpg",
    cta: "Explore Bridal Collection",
    accentColor: "bg-rose-600",
  },
  {
    id: 2,
    title: "Grace in Every Drape",
    subtitle: "Authentic Handloom Sarees for Every Occasion",
    image:
      "https://img.freepik.com/premium-photo/close-up-image-sari-india-traditional-clothing-background-website-prints-digital_800563-1198.jpg?w=900",
    cta: "Discover Sarees",
    accentColor: "bg-emerald-600",
  },
  {
    id: 3,
    title: "Festive Collection 2025",
    subtitle: "Chikankari, Anarkalis & Indo-Western Styles",
    image:
      "https://styl-inc.com/wp-content/uploads/2019/08/Stylblog_Indo-western1.jpg",
    cta: "View Festive Wear",
    accentColor: "bg-amber-600",
  },
];

const FashionSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className="relative w-full h-screen max-h-[90vh] overflow-hidden">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={slides[current].id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover object-center"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

          {/* Content */}
          {/* <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 lg:px-32">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl"
          
              {/* Decorative elements 
              <div className="flex items-center mb-4">
                <Sparkles className="text-white mr-2" />
                <span
                  className={`${slides[current].accentColor} text-white text-sm font-medium px-3 py-1 rounded-full`}
                >
                  New Collection
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                {slides[current].title}
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                {slides[current].subtitle}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${slides[current].accentColor} hover:bg-opacity-90 text-white font-semibold px-8 py-3 rounded-md shadow-lg transition-all`}
              >
                {slides[current].cta}
              </motion.button>
            </motion.div>
          </div> */}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white z-10 transition-all hover:scale-110"
      >
        <ChevronLeft size={28} strokeWidth={2} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white z-10 transition-all hover:scale-110"
      >
        <ChevronRight size={28} strokeWidth={2} />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`h-2 w-2 rounded-full transition-all ${
              index === current
                ? `${slides[current].accentColor} w-6`
                : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
        <motion.div
          key={current}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 7, ease: "linear" }}
          className={`h-full ${slides[current].accentColor}`}
        />
      </div>
    </div>
  );
};

export default FashionSlider;
