"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    id: "01",
    title: "Experience & Reliability",
    text: "With over N years in the construction industry, we have successfully delivered projects of all scales and complexities.",
  },
  {
    id: "02",
    title: "High Quality Work",
    text: "We use only certified materials and modern technologies to ensure durability, safety, and lasting value.",
  },
  {
    id: "03",
    title: "On-Time Delivery",
    text: "We respect deadlines and guarantee that all projects are completed within the agreed timeframe.",
  },
  {
    id: "04",
    title: "Transparency & Trust",
    text: "Detailed estimates, clear communication, and no hidden costs — we build with honesty and integrity.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-12 sm:py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="uppercase tracking-widest text-lg text-blue-100 max-w-80 mb-2"
      >
        Why Us
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-2xl lg:text-4xl mb-12"
      >
        Trusted construction, built to last
      </motion.h1>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-8">
        {/* Left image block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 rounded-2xl shadow p-4 sm:p-5 flex flex-col hover:scale-[1.02] transition-transform duration-300"
        >
          <Image
            src="/construction.jpg"
            alt="Modular House"
            width={700}
            height={450}
            className="rounded-xl object-cover w-full h-48 sm:h-56 md:h-64 lg:h-[320px]"
          />
          <p className="mt-3 sm:mt-4 text-md text-gray-200">
            Our company provides a full range of construction services — from
            design and planning to project handover. We are committed to
            building structures that are strong, safe, and modern.
          </p>
        </motion.div>

        {/* Right grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900 rounded-2xl shadow p-5 flex flex-col hover:scale-[1.05] transition-transform duration-300"
            >
              <span className="text-gray-400 text-sm font-semibold mb-2">
                ({feature.id})
              </span>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-gray-200 text-md">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
