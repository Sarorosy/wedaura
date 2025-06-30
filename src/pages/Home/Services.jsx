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
    icon: Sparkles,
  },
  {
    title: "Highlights",
    description: "3–5 min, 5–8 min highlight films (CUSTOMISABLE)",
    icon: Scissors,
  },
  {
    title: "Full Length Documentary",
    description: "Traditional 2–4 hrs, speech, ceremony (CUSTOMISABLE)",
    icon: Clock,
  },
  {
    title: "Short Films",
    description: "10–15 min, 25–30 min storytelling (CUSTOMISABLE)",
    icon: Film,
  },
  {
    title: "Wedding Invitation & Pre-Wedding Video",
    description:
      "Captivate your guests with a preview of the celebration to come.",
    icon: Video,
  },
  {
    title: "Anniversary Videos",
    description:
      "With each anniversary, renew and reminisce the joy of your union.",
    icon: Heart,
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

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="text-center "
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Icon */}
                <div className="mb-5 flex justify-center">
                  <div className="bg-cream p-6 rounded-full shadow-inner">
                    <Icon className="w-10 h-10 text-red-900" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-semibold text-olive uppercase mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-primary mb-3 px-4">{service.description}</p>

                {/* Optional CTA */}
                <button className="text-sm bg-orange-100 px-2 py-1 rounded text-darkBrown  transition">
                  Enquire now
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
