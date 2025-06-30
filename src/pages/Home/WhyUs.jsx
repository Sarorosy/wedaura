import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const points = [
  "Every video editor on the team has at least five years of experience editing or shooting wedding videos.",
  "7 – 15 days turnaround per project.",
  "Our team of 4 wedding video editors and one manager is based in New Delhi, India.",
  "Over the course of the studio’s existence, we’ve edited over 500 wedding videos.",
  "Fast customer service and daily communication – a team member is available 6 days a week via mail and phone.",
  "We’ve built strong relationships with dozens of satisfied customers in the US, UK, Canada, and Australia.",
];

export default function WhyUs() {
  return (
    <section className="bg-pastel py-20 px-4 text-primary">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serifStyle text-darkBrown mb-4">
            Why Us
          </h2>
          <p className="max-w-2xl mx-auto text-base text-secondary italic">
            Several features set us apart from what the competition has to
            offer. Here’s why you should consider partnering up with us.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 p-4 bg-white/90 rounded-xl shadow border border-accent"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="text-olive mt-1 w-5 h-5 shrink-0" />
              <p className="text-sm text-primary leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
