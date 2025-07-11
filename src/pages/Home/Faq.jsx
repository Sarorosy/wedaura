import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Star } from "lucide-react";

import grace from '../../assets/grace-events.avif';
import blissfull from '../../assets/blissful-moments.avif';
import elegance from '../../assets/elegance.avif';

const faqs = [
  {
    category: "primary",
    question: "Who are you?",
    answer:
      "Our team consists of 4 editors and one manager based in New Delhi. Each of the team members has at least five years of editing experience in outsourcing wedding video editing, post-production. Since the inception of the studio, we've edited more than 1000 weddings - a noteworthy accomplishment that has resulted in many happy clients",
  },
  {
    category: "primary",
    question: "How much does your service cost?",
    answer:
      "Our wedding video editing prices are dependent on several factors. These include hours of raw footage, quality, number of cameras used, your deadline, and the specifics of the editing work.",
  },
  {
    category: "primary",
    question: "How do I start?",
    answer:
      "Outsourcing wedding video editing is a fairly simple process. Contact us today via the form and send your project details. We will get back to you with a personalised, free-of-charge quote.",
  },
  {
    category: "primary",
    question: "How much time would it take you to edit my footage?",
    answer:
      "Before getting started with your project, we'd like to discuss the scope of the editing you need. Based on this, we will calculate the price and timeframe for delivery. Our average turnaround is 7 - 15 days.",
  },
  {
    category: "general",
    question: "Which countries do you serve?",
    answer:
      "We have worked with clients from the US, UK, Canada, France, Australia, etc. Your physical location doesn't matter as long as the speeches / vows / toasts etc. are in English.",
  },
  {
    category: "general",
    question: "What software do you use?",
    answer:
      "We use Premiere Pro, Final Cut Pro, After Effects, Audio Audition and Photoshop.",
  },
  {
    category: "general",
    question: "How do I pay?",
    answer:
      "We use PayPal and we charge upfront. If you use other payment services, let us know and we'll see what we can do.",
  },
  {
    category: "general",
    question: "Why should I outsource the wedding video editing process?",
    answer:
      "Outsourced editing services give you quality within a short period. While we're working on the final video, you're free to nurture client relationships and grow your business.",
  },
  {
    category: "general",
    question: "How will I get my finished product?",
    answer:
      "We'll send the files for client approval via Dropbox or Frame.io to ensure fast, safe and reliable transfers.",
  },
  {
    category: "general",
    question: "Is there anything you don't do in post-production?",
    answer:
      "Let us know what you're looking for. We have years of experience including cinematic, documentary, storytelling styles, etc.",
  },
  {
    category: "general",
    question: "Can I tweak or customize my package?",
    answer:
      "Yes, we believe personalised solutions are key. We'll offer a 100% tailored wedding video editing package.",
  },
];

const testimonials = [
  {
    name: "Grace Events Co.",
    image:
      grace,
    text: "Working with Folklore has elevated the weddings we plan. Their cinematography seamlessly captures every detail we design, creating stunning memories for our clients. Truly professional and creative partners.",
    rating: 5,
    location: "San Francisco, CA",
  },
  {
    name: "Blissful Moments Photography",
    image:
      blissfull,
    text: "As a fellow creative in the wedding industry, I’m constantly impressed by Folklore’s eye for storytelling. Their films complement our photography beautifully, delivering a complete visual experience for couples.",
    rating: 5,
    location: "Austin, TX",
  },
  {
    name: "Elegant Occasions Catering",
    image:
     elegance,
    text: "Folklore captures the ambiance and joy of our events like no other. Their team is professional, easy to collaborate with, and consistently delivers breathtaking results that showcase the culinary artistry of our weddings.",
    rating: 5,
    location: "Los Angeles, CA",
  },
];


export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("primary");

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <>
      <section className="py-16 px-4 md:px-10 text-primary bg-transparent">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serifStyle text-center text-darkBrown mb-6"
          >
            Frequently Asked Questions
          </motion.h2>

          {/* Category Tabs */}
          <div className="flex gap-4 mb-10 justify-start">
            <button
              onClick={() => {
                setSelectedCategory("primary");
                setOpenIndex(null);
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold border ${
                selectedCategory === "primary"
                  ? "bg-darkBrown text-white"
                  : "bg-white text-darkBrown border-darkBrown"
              } transition`}
            >
              Primary
            </button>
            <button
              onClick={() => {
                setSelectedCategory("general");
                setOpenIndex(null);
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold border ${
                selectedCategory === "general"
                  ? "bg-darkBrown text-white"
                  : "bg-white text-darkBrown border-darkBrown"
              } transition`}
            >
              General
            </button>
          </div>

          <div className="space-y-6">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border-b border-darkBrown transition-all"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-lg md:text-xl text-primary hover:text-secondary transition-colors"
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-secondary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-darkBrown" />
                  )}
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5 text-sm md:text-base text-darkBrown leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xl font-semibold text-darkBrown mb-4">
              Make your own customized package today!
            </p>
            <a
              href="#"
              className="inline-block bg-primary text-accent px-6 py-3 rounded-full shadow-md hover:bg-secondary transition"
            >
              Get a free quote today!
            </a>
          </motion.div>
        </div>
      </section>
      <section className="py-20 px-4 bg-gradient-to-br from-secondary/10 to-accent/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-romantica text-primary mb-6">
              Endorsed by Wedding Experts
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-serifStyle text-primary text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-primary/60 text-sm">
                      {testimonial.location}
                    </p>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-accent text-accent"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-primary/80 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
