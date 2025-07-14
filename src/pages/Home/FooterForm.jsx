import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import bgImage from "../../assets/footerbg.jpg";

const FooterForm = () => {

  const [form, setForm] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      query: "",
    });
  


  const handleSubmit = async (e) => {
  e.preventDefault();
  if(!form.firstName || !form.lastName || !form.email || !form.phone || !form.subject || !form.query){
    toast.error("Please fill all fields");
    return
  }

  try {
    const response = await fetch("https://formspree.io/f/xeokyleq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form), // assuming `form` contains your form state
    });

    if (response.ok) {
      toast.success("Submitted successfully! We'll get back to you soon.");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        query: "",
      });
    } else {
      toast.error("Submission failed. Please try again later.");
    }
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong. Please try again later.");
  }
};

const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
              name="firstName"
              placeholder="Enter your first name"
              value={form.firstName}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-white/30 bg-white/20 text-white placeholder-white/70 p-2 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
            name="lastName"
            onChange={handleChange}
            value={form.lastName}
              type="text"
              placeholder="Enter your last name"
              className="mt-1 w-full rounded-md border border-white/30 bg-white/20 text-white placeholder-white/70 p-2 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
            value={form.email}
            onChange={handleChange}
            name="email"
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full rounded-md border border-white/30 bg-white/20 text-white placeholder-white/70 p-2 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="text"
              value={form.phone}
              onChange={handleChange}
              name="phone"
              placeholder="Enter your WhatsApp number with country code"
              className="mt-1 w-full rounded-md border border-white/30 bg-white/20 text-white placeholder-white/70 p-2 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Subject</label>
            <input
              type="text"
              value={form.subject}
              onChange={handleChange}
              name="subject"
              placeholder="Enter subject line"
              className="mt-1 w-full rounded-md border border-white/30 bg-white/20 text-white placeholder-white/70 p-2 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Your Query</label>
            <textarea
            value={form.query}
            onChange={handleChange}
            name="query"
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
