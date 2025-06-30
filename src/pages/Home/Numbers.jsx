import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const stats = [
  { value: 7, suffix: "", label: "Years of Experience" },
  { value: 5000, suffix: "+", label: "Projects" },
  { value: 2000, suffix: "TB", label: "Of Footage Edited" },
  { value: 10, suffix: "", label: "Countries World Wide" },
  { value: 5, suffix: "", label: "Team Members" },
];

const Numbers = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="bg-[#1A1C1F] py-20 text-white text-center" ref={ref}>
      <h2 className="text-3xl md:text-4xl font-semibold mb-16">
        We Take Pride in Our Numbers
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12 px-6">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl text-red-500 font-bold mb-2">
              {inView ? (
                <CountUp end={item.value} duration={2} suffix={item.suffix} />
              ) : (
                "0" + item.suffix
              )}
            </div>
            <p className="text-sm text-gray-300">{item.label}</p>
            <div className="w-10/12 h-[2px] bg-gray-600 mt-2 rounded-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Numbers;
