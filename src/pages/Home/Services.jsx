import React from "react";
import { motion } from "framer-motion";
import {
  Film,
  Scissors,
  Clock,
  Video,
  Heart,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Teaser & Reels",
    description: "Teaser 30–60 sec, Reels 30–60 sec (CUSTOMISABLE)",
    icon: <Sparkles className="w-6 h-6 text-olive" />,
  },
  {
    title: "Highlights",
    description: "3–5 min, 5–8 min highlight films (CUSTOMISABLE)",
    icon: <Scissors className="w-6 h-6 text-olive" />,
  },
  {
    title: "Full Length Documentary",
    description: "Traditional 2–4 hrs, speech, ceremony (CUSTOMISABLE)",
    icon: <Clock className="w-6 h-6 text-olive" />,
  },
  {
    title: "Short Films",
    description: "10–15 min, 25–30 min storytelling (CUSTOMISABLE)",
    icon: <Film className="w-6 h-6 text-olive" />,
  },
  {
    title: "Wedding Invitation & Pre-Wedding Video",
    description:
      "Captivate your guests with a preview of the celebration to come.",
    icon: <Video className="w-6 h-6 text-olive" />,
  },
  {
    title: "Anniversary Videos",
    description:
      "With each anniversary, renew and reminisce the joy of your union.",
    icon: <Heart className="w-6 h-6 text-olive" />,
  },
];

export default function Services() {
  return (
    <section className="bg-pastel py-20 px-4 text-darkBrown">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-olive mb-5">
            Our Bouquet of Wedding Video Editing Services
          </h2>
          <p className="max-w-3xl mx-auto text-base text-primary leading-relaxed italic">
            Our palette of services blooms with variety, catering to every need
            that can arise before, during, and after your nuptial ceremony. From
            capturing the anticipation in a pre-wedding video to weaving the
            narrative of your love story, each service is a petal in your wedding
            bouquet — arranged thoughtfully to help your moments blossom forever.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-cream/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-full bg-cream shadow-inner">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-olive uppercase">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-primary mb-4">{service.description}</p>
              <button className="text-sm bg-gray-100 px-2 py-1 rounded underline-offset-4 hover:text-darkBrown transition">
                Enquire now
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
