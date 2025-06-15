import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

import one from '../../assets/one.jpg';
import two from '../../assets/two.jpg';
import three from '../../assets/three.jpg';
import four from '../../assets/four.jpg';

const slides = [
    {
        image: one,
        title: 'Sunitha & Sridhar',
        type: 'wedding same day edit'
    },
    {
        image: two,
        title: 'Vy & Chris',
        type: 'wedding highlight'
    },
    {
        image: three,
        title: 'Ronica & Dheeraj',
        type: 'wedding highlight'
    },
    {
        image: four,
        title: 'Polina & Tim',
        type: 'wedding highlight'
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const [prev, setPrev] = useState(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setPrev(current);
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [current]);

    return (
        <section className="relative w-full h-screen pt-20 overflow-hidden">
            {/* Crossfade Images */}
            <div className="absolute inset-0 w-full h-full">
                {prev !== null && (
                    <motion.img
                        key={`prev-${prev}`}
                        src={slides[prev].image}
                        alt="previous"
                        className="absolute w-full h-full object-cover"
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 1.2, ease: 'easeInOut' }}
                    />
                )}
                <motion.img
                    key={`current-${current}`}
                    src={slides[current].image}
                    alt="current"
                    className="absolute w-full h-full object-cover"
                    initial={{ opacity: 0.2, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

            {/* Slide Columns */}
            {/* Slide Columns */}
            <div className="relative z-20 h-full">
                {/* Desktop View */}
                <div className="hidden md:grid grid-cols-4 h-full text-white">
                    {slides.map((slide, index) => {
                        const isActive = index === current;
                        return (
                            <motion.div
                                key={index}
                                className="relative flex flex-col justify-end items-start p-6 border border-white/20"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                            >
                                {/* Play Button with Progress Ring */}
                                <div className="mb-8">
                                    <div className="relative w-12 h-12">
                                        <svg className="absolute inset-0" viewBox="0 0 36 36">
                                            <circle cx="18" cy="18" r="16" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
                                            {isActive && (
                                                <motion.circle
                                                    cx="18"
                                                    cy="18"
                                                    r="16"
                                                    stroke="white"
                                                    strokeWidth="1"
                                                    fill="none"
                                                    strokeDasharray="100"
                                                    strokeDashoffset="100"
                                                    initial={{ strokeDashoffset: 100 }}
                                                    animate={{ strokeDashoffset: 0 }}
                                                    transition={{ duration: 4, ease: 'linear' }}
                                                />
                                            )}
                                        </svg>
                                        <div className="absolute inset-0 z-10 flex items-center justify-center hover:bg-white/10 hover:backdrop-blur-md rounded-full transition duration-300 cursor-pointer">
                                            <Play size={18} className="text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <motion.div className="mb-2 text-[14px]  eb" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.1 }}>
                                    {slide.type}
                                </motion.div>
                                <motion.div className="text-xl font-semibold montserrat tracking-wide" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.1 }}>
                                    {slide.title}
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile View: Only current slide info */}
                <div className="md:hidden absolute bottom-10 left-6 right-6 bg-black/40 p-4 rounded-lg backdrop-blur-sm text-white">
                    <motion.div
                        key={`mobile-${current}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center justify-between mb-2">
                            {/* Play Button */}
                            <div className="relative w-10 h-10">
                                <svg className="absolute inset-0" viewBox="0 0 36 36">
                                    <circle cx="18" cy="18" r="16" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
                                    <motion.circle
                                        cx="18"
                                        cy="18"
                                        r="16"
                                        stroke="white"
                                        strokeWidth="1"
                                        fill="none"
                                        strokeDasharray="100"
                                        strokeDashoffset="100"
                                        initial={{ strokeDashoffset: 100 }}
                                        animate={{ strokeDashoffset: 0 }}
                                        transition={{ duration: 4, ease: 'linear' }}
                                    />
                                </svg>
                                <div className="absolute inset-0 z-10 flex items-center justify-center hover:bg-white/10 hover:backdrop-blur-md rounded-full transition duration-300 cursor-pointer">
                                    <Play size={16} className="text-white" />
                                </div>
                            </div>
                        </div>

                        <div className="text-xs  eb mb-1">{slides[current].type}</div>
                        <div className="text-lg font-semibold font-montserrat">{slides[current].title}</div>
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
