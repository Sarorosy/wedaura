import React, { useState } from "react";
import { Facebook, Gift, Instagram, Mail, Menu, MessageCircle, X, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FolkLore from "../assets/Folklore-logo.png";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const navLinksLeft = ["About", "Gallery"];
const navLinksRight = ["WhyUs", "Contact"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="w-full z-50 bg-white py-4 px-6 md:px-10 flex justify-between items-center">
        {/* Left Navigation */}
        <nav className="hidden md:flex space-x-6 text-md font-semibold eb">
          {navLinksLeft.map((link, idx) => (
            <button
              key={idx}
              onClick={() => navigate(`/${link.toLowerCase()}`)}
              className="hover:text-darkBrown transition"
            >
              {link === "About" ? "About us" : link}
            </button>
          ))}
        </nav>

        {/* Logo Center */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer flex  items-center justify-center text-center"
        >
          <img src={FolkLore} alt="Folklore Logo" className="h-10 md:h-20" />
          <div>
            <h2 className="noto text-3xl md:text-4xl font-medium">FOLKLORE</h2>
            <h3 className="noto text-2xl md:text-3xl">PRODUCTIONS</h3>
          </div>
        </div>

        {/* Right Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinksRight.map((link, idx) => (
            <button
              key={idx}
              onClick={() => navigate(`/${link.toLowerCase()}`)}
              className="hover:text-darkBrown transition font-semibold eb-regular"
            >
              {link === "WhyUs" ? "Why Us" : link}
            </button>
          ))}

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/folkloreproductions_" target="_blank" rel="noreferrer">
              <Instagram className="text-darkbrown hover:opacity-80" size={20} />
            </a>
            <a href="https://www.youtube.com/channel/UC2kgNgYUK7z91b8M6CPhomw" target="_blank" rel="noreferrer">
              <Youtube className="text-darkbrown hover:opacity-80" size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="text-darkbrown hover:opacity-80" size={20} />
            </a>
          </div>
        </div>

        {/* Burger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80 }}
              className="fixed top-0 right-0 w-64 h-full bg-black bg-opacity-95 backdrop-blur-lg z-50 p-6 flex flex-col space-y-6"
            >
              {/* Close Icon */}
              <div className="flex justify-end text-red-500">
                <button onClick={() => setIsOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col gap-4 mt-6 text-lg font-medium">
                {[...navLinksLeft, ...navLinksRight].map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsOpen(false);
                      navigate(`/${link.toLowerCase()}`);
                    }}
                    className="text-accent transition"
                  >
                    {link === "About" ? "About us" : link === "WhyUs" ? "Why Us" : link}
                  </button>
                ))}
              </nav>

              {/* Social Icons */}
              <div className="flex justify-center mx-auto space-x-3">
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <Instagram className="text-accent hover:opacity-80" size={20} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  <Youtube className="text-accent hover:opacity-80" size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <Facebook className="text-accent hover:opacity-80" size={20} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Contact Info Bar */}
      <div className="flex flex-col md:flex-row justify-around items-center text-sm md:text-base bg-darkBrown py-2 px-4 gap-2 md:gap-0">
        <span className="flex items-center text-accent">
          <MessageCircle size={28} className="bg-gray-300 p-1 rounded-full text-black mr-1" />{" "}
          Whatsapp us:{" "}
          <a href="https://wa.me/917011584331" className="font-medium">
            +91 7011584331
          </a>
        </span>
        <span className="hidden md:flex items-center text-accent">
          <Gift size={28} className="bg-gray-300 p-1 rounded-full text-black mr-1" />{" "}
          Get flat 10% off on your first project
        </span>
        <span className="flex items-center text-accent">
          <Mail size={28} className="bg-gray-300 p-1 rounded-full text-black mr-1" />{" "}
          Mail us:{" "}
          <a href="mailto:contact@folklore.com" className="font-medium">
            contact@folklore.com
          </a>
        </span>
      </div>

      {/* WhatsApp Floating Widget */}
      <FloatingWhatsApp
        phoneNumber="917011584331"
        accountName="Folklore Productions"
        avatar={FolkLore}
        statusMessage="Typically replies in minutes"
        chatMessage="Hi 👋! How can we help with your wedding film?"
        placeholder="Type your message here..."
        allowClickAway
        notification
        notificationSound
        darkMode={false}
      />
    </>
  );
};

export default Header;
