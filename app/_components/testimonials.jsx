"use client";
import { motion } from "framer-motion";
import { createContext } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emily R.",
      quote:
        "The photo session was an amazing experience. The photographer made me feel comfortable and captured beautiful moments that I will cherish forever.",
    },
    {
      id: 2,
      name: "Michael T.",
      quote:
        "Incredible skills and a true professional. The attention to detail and creativity were evident in every shot. Highly recommend!",
    },
    {
      id: 3,
      name: "Sarah K.",
      quote:
        "I was blown away by the quality of the photos. The photographer has a keen eye for capturing the perfect moments and the results were stunning.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What my clients say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-stone-100 rounded-lg shadow-md p-6 flex flex-col justify-between"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: testimonial.id * 0.2 }}
            >
              <p className="text-stone-800 text-lg mb-4">{testimonial.quote}</p>
              <p className="text-stone-600 text-sm font-semibold">
                {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
