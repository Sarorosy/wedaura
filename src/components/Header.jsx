import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const navLinks = ['Home', 'About', 'Portfolio', 'Blog', 'Contact'];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="absolute top-0 left-0 w-full z-50 text-white py-6 px-6 md:px-10 flex justify-between items-center">
            {/* Logo */}
            <div 
            onClick={() => navigate('/')}   
            className="text-4xl md:text-5xl itali cursor-pointer hover:text-accent transition-all">WedAura</div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 text-sm font-semibold">
                {navLinks.map((link, idx) => (
                    <a key={idx} href="#" className="hover:text-accent transition">
                        {link}
                    </a>
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
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 80 }}
                        className="fixed top-0 right-0 w-64 h-full bg-black bg-opacity-95 backdrop-blur-lg z-50 p-6 flex flex-col space-y-6"
                    >
                        {/* Close Icon */}
                        <div className="flex justify-end">
                            <button onClick={() => setIsOpen(false)}>
                                <X size={28} />
                            </button>
                        </div>

                        {/* Links */}
                        <nav className="flex flex-col gap-4 mt-6 text-lg font-medium">
                            {navLinks.map((link, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="hover:text-accent transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
