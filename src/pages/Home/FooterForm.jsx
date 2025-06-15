import React from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import bgImage from "../../assets/footerbg.jpg";

const FooterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your message has been sent!");
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-6"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl p-10"
      >
        <h2 className="text-3xl font-serif text-center text-white mb-6">
          Leave us a message and we'll get back to you.
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white"
        >
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="mt-1 w-full rounded-md border border-white/30 bg-white/20 text-white placeholder-white/70 p-2 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="mt-1 w-full rounded-md border border-white/30 bg-white/20 text-white placeholder-white/70 p-2 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full rounded-md border border-white/30 bg-white/20 text-white placeholder-white/70 p-2 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="text"
              placeholder="Enter your WhatsApp number with country code"
              className="mt-1 w-full rounded-md border border-white/30 bg-white/20 text-white placeholder-white/70 p-2 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Subject</label>
            <input
              type="text"
              placeholder="Enter subject line"
              className="mt-1 w-full rounded-md border border-white/30 bg-white/20 text-white placeholder-white/70 p-2 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Your Query</label>
            <textarea
              placeholder="Enter your query"
              rows="4"
              className="mt-1 w-full rounded-md border border-white/30 bg-white/20 text-white placeholder-white/70 p-2 focus:outline-none focus:ring-2 focus:ring-secondary"
            ></textarea>
          </div>
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-secondary text-white rounded-md hover:bg-darkBrown transition"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default FooterForm;
