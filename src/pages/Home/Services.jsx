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
    icon: <Sparkles className="w-6 h-6 text-rose-600" />,
  },
  {
    title: "Highlights",
    description: "3–5 min, 5–8 min highlight films (CUSTOMISABLE)",
    icon: <Scissors className="w-6 h-6 text-rose-600" />,
  },
  {
    title: "Full Length Documentary",
    description: "Traditional 2–4 hrs, speech, ceremony (CUSTOMISABLE)",
    icon: <Clock className="w-6 h-6 text-rose-600" />,
  },
  {
    title: "Short Films",
    description: "10–15 min, 25–30 min storytelling (CUSTOMISABLE)",
    icon: <Film className="w-6 h-6 text-rose-600" />,
  },
  {
    title: "Wedding Invitation & Pre-Wedding Video",
    description: "Captivate your guests with a preview of the celebration to come.",
    icon: <Video className="w-6 h-6 text-rose-600" />,
  },
  {
    title: "Anniversary Videos",
    description: "With each anniversary, renew and reminisce the joy of your union.",
    icon: <Heart className="w-6 h-6 text-rose-600" />,
  },
];

// Enhanced Floating Hearts Component
const FloatingHearts = () => {
  const hearts = Array.from({ length: 25 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart}
          className="absolute text-rose-300/40"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 100,
            scale: Math.random() * 0.8 + 0.3,
            rotate: Math.random() * 360,
            opacity: Math.random() * 0.7 + 0.3,
          }}
          animate={{
            y: -150,
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            rotate: Math.random() * 720 + 360,
            scale: [
              Math.random() * 0.8 + 0.3,
              Math.random() * 1.2 + 0.5,
              Math.random() * 0.8 + 0.3
            ],
          }}
          transition={{
            duration: Math.random() * 15 + 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 15,
          }}
        >
          <Heart className="w-4 h-4 fill-current drop-shadow-sm" />
        </motion.div>
      ))}
    </div>
  );
};

// Floating Sparkles Component
const FloatingSparkles = () => {
  const sparkles = Array.from({ length: 30 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle}
          className="absolute text-yellow-300/50"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            scale: Math.random() * 0.5 + 0.2,
            rotate: Math.random() * 360,
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [
              Math.random() * 0.5 + 0.2,
              Math.random() * 1.5 + 0.5,
              Math.random() * 0.5 + 0.2
            ],
            rotate: [0, 180, 360],
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          transition={{
            duration: Math.random() * 8 + 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        >
          <Sparkles className="w-3 h-3 fill-current drop-shadow-sm" />
        </motion.div>
      ))}
    </div>
  );
};

// Animated Cloud Background
const AnimatedClouds = () => {
  const clouds = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {clouds.map((cloud) => (
        <motion.div
          key={cloud}
          className="absolute opacity-10"
          initial={{
            x: -(typeof window !== 'undefined' ? window.innerWidth : 1200) / 4,
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            scale: Math.random() * 2 + 1,
          }}
          animate={{
            x: (typeof window !== 'undefined' ? window.innerWidth : 1200) + 200,
          }}
          transition={{
            duration: Math.random() * 30 + 40,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 20,
          }}
        >
          <div className="relative">
            {/* Cloud shape made with overlapping circles */}
            <div className="w-16 h-8 bg-white rounded-full"></div>
            <div className="absolute -top-2 left-2 w-12 h-12 bg-white rounded-full"></div>
            <div className="absolute -top-1 right-2 w-10 h-10 bg-white rounded-full"></div>
            <div className="absolute -top-3 left-6 w-14 h-14 bg-white rounded-full"></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Heart Pattern Background (Enhanced)
const HeartPattern = () => {
  return (
    <div className="absolute inset-0 opacity-3">
      <div className="grid grid-cols-10 gap-12 h-full">
        {Array.from({ length: 80 }, (_, i) => (
          <motion.div
            key={i}
            className="flex items-center justify-center"
            initial={{ scale: 0, rotate: 0, opacity: 0 }}
            animate={{ 
              scale: [0.5, 1.5, 0.5],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut"
            }}
          >
            <Heart className="w-5 h-5 text-rose-200 fill-current" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Sparkle Burst on Hover
const SparkleOnHover = ({ children, className = "" }) => {
  const sparkles = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className={`relative ${className}`}>
      {children}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle}
            className="absolute text-yellow-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, rotate: 0 }}
            whileHover={{
              scale: [0, 1.5, 0],
              rotate: [0, 180, 360],
              x: [0, (Math.random() - 0.5) * 40],
              y: [0, (Math.random() - 0.5) * 40],
            }}
            transition={{
              duration: 1.2,
              delay: sparkle * 0.1,
              ease: "easeOut"
            }}
          >
            <Sparkles className="w-2 h-2 fill-current" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Services() {
  return (
    <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-20 px-4 text-gray-800 overflow-hidden min-h-screen">
      {/* Enhanced Animated Background Elements */}
      <AnimatedClouds />
      <FloatingHearts />
      <FloatingSparkles />
      <HeartPattern />
      
      {/* Enhanced Decorative Elements with animation */}
      <motion.div 
        className="absolute top-10 left-10 w-20 h-20 bg-rose-200/30 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-20 right-20 w-32 h-32 bg-pink-200/30 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-200/30 rounded-full blur-xl"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      ></motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Heading with sparkle effects */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SparkleOnHover>
            <motion.h2 
              className="text-4xl md:text-5xl font-serif text-rose-800 mb-5 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Bouquet of Wedding Video Editing Services
              <motion.div
                className="absolute -top-2 -right-2 text-yellow-400"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
            </motion.h2>
          </SparkleOnHover>
          
          <motion.p 
            className="max-w-3xl mx-auto text-base text-gray-700 leading-relaxed italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our palette of services blooms with variety, catering to every need
            that can arise before, during, and after your nuptial ceremony. From
            capturing the anticipation in a pre-wedding video to weaving the
            narrative of your love story, each service is a petal in your wedding
            bouquet — arranged thoughtfully to help your moments blossom forever.
          </motion.p>
        </motion.div>

        {/* Enhanced Service Cards */}
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
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-rose-100/50 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Enhanced Card background decoration */}
              <motion.div 
                className="absolute top-0 right-0 w-20 h-20 bg-rose-100/50 rounded-full -translate-y-10 translate-x-10"
                whileHover={{ 
                  scale: 1.5,
                  rotate: 180,
                }}
                transition={{ duration: 0.5 }}
              ></motion.div>
              
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <SparkleOnHover>
                  <motion.div 
                    className="p-3 rounded-full bg-rose-100/70 shadow-inner"
                    whileHover={{ 
                      scale: 1.15,
                      boxShadow: "0 0 20px rgba(244, 63, 94, 0.3)"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                </SparkleOnHover>
                <h3 className="text-lg font-semibold text-rose-800 uppercase">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-sm text-gray-700 mb-4 relative z-10">
                {service.description}
              </p>
              
              <SparkleOnHover>
                <motion.button 
                  className="text-sm bg-rose-100/80 hover:bg-rose-200/80 px-4 py-2 rounded-full border border-rose-200 hover:border-rose-300 transition-all duration-300 font-medium text-rose-800 relative z-10"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(244, 63, 94, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enquire now ♥
                </motion.button>
              </SparkleOnHover>
              
              {/* Enhanced floating hearts on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-rose-400"
                    style={{
                      left: `${Math.random() * 80 + 10}%`,
                      top: `${Math.random() * 80 + 10}%`,
                    }}
                    initial={{ 
                      scale: 0,
                      rotate: Math.random() * 360
                    }}
                    whileHover={{
                      scale: [0, 1.2, 0],
                      y: [-20, -40],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.15,
                      ease: "easeOut"
                    }}
                  >
                    <Heart className="w-3 h-3 fill-current" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}