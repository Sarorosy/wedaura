import React, { useState } from "react";
import { Gift, Mail, Menu, MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FolkLore from '../assets/Folklore-logo.png';

import { FloatingWhatsApp } from 'react-floating-whatsapp'
// import 'react-floating-whatsapp/dist/index.css'

const navLinks = ["Gallery", "About", "Contact"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className=" w-full z-50 bg-white py-4 px-6 md:px-10 flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className=" itali cursor-pointer transition-all flex items-center"
        >
          <img src={FolkLore} alt="Folklore Logo" className="h-10 md:h-20" />
          <div className="">

            <h2 className="noto text-3xl md:text-4xl font-medium">FOLKLORE</h2>
            <h3 className="noto text-2xl md:text-3xl ">PRODUCTIONS</h3>
            {/* <small className="font-sans text-[12px]">TURNING YOUR RAW FOOTAGE INTO TIMESS FOLKTALES</small> */}
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-md font-semibold eb">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => {
                navigate(`/${link.toLowerCase()}`);
              }}
              className="hover:text-darkBrown transition"
            >
              {link == "About" ? "About us" : link}
            </button>
          ))}
        </nav>

        {/* Burger Icon */}
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

              {/* Links */}
              <nav className="flex flex-col gap-4 mt-6 text-lg font-medium">
                {navLinks.map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsOpen(false);
                      navigate(`/${link.toLowerCase()}`);
                    }}
                    className="text-accent transition"
                  >
                    {link}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

      </header>
      <div class="flex flex-col md:flex-row justify-around items-center text-sm md:text-base bg-darkBrown py-2 px-4 gap-2 md:gap-0">
        <span className="flex items-center text-accent"><MessageCircle size={28} className="bg-gray-300 p-1 rounded-full text-black mr-1" /> Whatsapp us: <a href="https://wa.me/917011584331" class=" font-medium">+91 7011584331</a></span>
        <span className="hidden md:flex items-center text-accent"><Gift size={28} className="bg-gray-300 p-1 rounded-full text-black mr-1" /> Get flat 10% off on your first project</span>
        <span className="flex items-center text-accent"><Mail size={28} className="bg-gray-300 p-1 rounded-full text-black mr-1" /> Mail us: <a href="mailto:contact@folklore.com" class=" font-medium">contact@folklore.com</a></span>
      </div>

          <FloatingWhatsApp
        phoneNumber="917011584331" // Replace with your number without + or spaces
        accountName="Folklore Weddings"
        avatar={FolkLore} // Place logo inside public/ folder
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
