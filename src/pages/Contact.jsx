import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Mail, Phone, Instagram } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import contactbg from '../assets/contact-bg.jpg';

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    query: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Submitted successfully! We'll get back to you soon.");
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      query: "",
    });
  };

  return (
    <div className="bg-pastel min-h-screen">
      <Header />
      <div
        className="bg-cover bg-center bg-no-repeat py-20 px-4"
        style={{
          backgroundImage:
            `url('${contactbg}')`
        }}
      >
        <div className="bg-accent bg-opacity-90 max-w-4xl mx-auto rounded-xl shadow-xl p-8 backdrop-blur-md">
          <h1 className="text-4xl font-serifStyle text-primary mb-2 text-center">Get in Touch</h1>
          <p className="text-center text-md font-elegance text-darkBrown mb-6">
            We'd love to hear from you! Fill out the form below to get in touch with the <strong>Folklore</strong> team.
          </p>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 font-serifStyle text-sm">
            <div>
              <label className="text-darkBrown">First name*</label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-lightGray rounded-md mt-1 bg-white"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label className="text-darkBrown">Last name</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-lightGray rounded-md mt-1 bg-white"
                placeholder="Enter your last name"
              />
            </div>
            <div>
              <label className="text-darkBrown">Email*</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-lightGray rounded-md mt-1 bg-white"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="text-darkBrown">Phone*</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-lightGray rounded-md mt-1 bg-white"
                placeholder="Enter WhatsApp number with country code"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-darkBrown">Subject</label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-lightGray rounded-md mt-1 bg-white"
                placeholder="Enter subject line"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-darkBrown">Your Query</label>
              <textarea
                name="query"
                value={form.query}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border border-lightGray rounded-md mt-1 bg-white"
                placeholder="Enter your query"
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded hover:bg-secondary transition font-elegance"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-10 text-center">
            <h2 className="text-xl font-serifStyle text-darkBrown">Call / Text / Email</h2>
            <p className="mt-2 text-sm text-darkBrown">
              <Phone className="inline-block mr-1" size={16} />
              +91 9988100000 / +91 8877100000
            </p>
            <p className="text-sm text-darkBrown mt-1">
              <Mail className="inline-block mr-1" size={16} />
              info@Folklore.in
            </p>
            <div className="mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline font-elegance"
              >
                <Instagram className="mr-1" size={18} />
                Follow us on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
