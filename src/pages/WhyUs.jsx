import { motion, useScroll, useTransform } from "framer-motion";
import {
  Clock,
  DollarSign,
  Users,
  ShieldCheck,
  Phone,
  Mail,
  Instagram,
  Star,
  Heart,
  Camera,
  Award,
  Sparkles,
  ArrowRight,
  Film,
} from "lucide-react";
import { useState, useEffect } from "react";

import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

// Floating particles background
function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Enhanced Value Card with more dynamic effects
function ValueCard({ icon, title, description, delay = 0, gradient }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay, duration: 0.8, type: "spring", stiffness: 100 }}
      whileHover={{
        // scale: 1.08,
        rotateY: 5,
        boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-3xl p-4 backdrop-blur-xl border border-white/20 shadow-2xl cursor-pointer"
      style={{
        background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
      }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)`,
        }}
      />

      {/* Sparkle effect */}
      <motion.div
        className="absolute top-4 right-4"
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{ duration: 1 }}
      >
        <Sparkles className="text-white/60" size={20} />
      </motion.div>

      <div className="relative z-10 space-y-6 text-center">
        <motion.div
          className="flex justify-center"
          animate={{
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
            {icon}
          </div>
        </motion.div>

        <motion.h3
          className="text-2xl font-bold text-white c"
          animate={{ y: isHovered ? -2 : 0 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-white/90 text-md leading-relaxed eb-regular"
          animate={{ y: isHovered ? -2 : 0 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight className="text-white" size={20} />
        </motion.div>
      </div>
    </motion.div>
  );
}

// Testimonial stars animation
function AnimatedStars() {
  return (
    <div className="flex justify-center space-x-2 my-8">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.div
          key={star}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: star * 0.1, duration: 0.3 }}
          whileHover={{ scale: 1.3, rotate: 15 }}
        >
          <Star className="text-yellow-400 fill-current" size={24} />
        </motion.div>
      ))}
    </div>
  );
}

export default function WhyUs() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <FloatingParticles />

      <motion.div
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1c2421 0%, #4e624d 50%, #34160e 100%)",
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Geometric shapes */}
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-purple-600/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-600/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -25, 0],
              y: [0, 15, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 20, 0],
              y: [0, -10, 0],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating camera icons */}
          <motion.div
            className="absolute top-32 right-20 opacity-10"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Camera size={60} className="text-white" />
          </motion.div>
          <motion.div
            className="absolute top-32 left-20 opacity-10"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Film size={60} className="text-white" />
          </motion.div>
          <motion.div
            className="absolute bottom-32 left-40 opacity-10"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -10, 0],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Heart size={40} className="text-white" />
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
            >
              <Award className="text-yellow-400" size={20} />
              <span className="text-sm font-medium">
                Premium Wedding Editing Services
              </span>
            </motion.div>

            {/* Main heading with split animation */}
            <div className="space-y-4">
              <motion.h1
                className="text-6xl md:text-7xl font-bold"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.span
                  className="block itali"
                  style={{
                    background:
                      "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57)",
                    backgroundSize: "400% 400%",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  WHY
                </motion.span>
                <motion.span
                  className="block text-white itali"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  CHOOSE US?
                </motion.span>
              </motion.h1>
            </div>

            {/* Subtitle with typewriter effect */}
            <motion.p
              className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed eb-regular"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Transform your wedding photography business with our
              <span className="text-yellow-400 font-semibold">
                {" "}
                cutting-edge editing solutions
              </span>
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12"
            >
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-yellow-400"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  5000+
                </motion.div>
                <div className="text-sm opacity-80 eb-regular">Projects Completed</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-green-400"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  7-10 Days
                </motion.div>
                <div className="text-sm opacity-80 eb-regular">Average Delivery</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-blue-400"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  100%
                </motion.div>
                <div className="text-sm opacity-80 eb-regular">Client Satisfaction</div>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            >
              <motion.button
                className="font-itali px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Get Free Quote
              </motion.button>
              <motion.button
                className="font-itali px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate("/gallery");
                }}
              >
                View Portfolio
              </motion.button>
            </motion.div>

            <AnimatedStars />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      <div className="relative bg-gradient-to-b from-gray-50 to-white">
        <div className="px-6 py-20 md:px-20 space-y-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-12 text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex justify-center items-center space-x-4 mb-8">
                <Heart className="text-pink-500 animate-pulse" size={40} />
                <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Our Promise
                </h2>
                <Heart className="text-pink-500 animate-pulse" size={40} />
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-left">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg"
                >
                  <p className="text-lg leading-relaxed text-gray-700">
                    As a B2B wedding editing firm, our long-term success depends
                    on delivering top-quality work. We understand you have many
                    options, so we are committed to{" "}
                    <strong>exceeding your expectations</strong>.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg"
                >
                  <p className="text-lg leading-relaxed text-gray-700">
                    We aim to build lasting business relationships based on{" "}
                    <strong>trust and reliability</strong>. Unlike many firms
                    that struggle with timely delivery, you can count on us to
                    meet deadlines consistently.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-16"
          >
            <div className="text-center">
              <motion.h2
                className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                What Value We Add
              </motion.h2>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <ValueCard
                icon={<Clock className="text-white" size={48} />}
                title="SAVE TIME"
                description="Focus on client relations and shoots while we handle post-production. Scale your business 5x faster with our expert team."
                delay={0.1}
                gradient={{
                  from: "rgba(99, 102, 241, 0.8)",
                  to: "rgba(139, 92, 246, 0.8)",
                }}
              />
              <ValueCard
                icon={<DollarSign className="text-white" size={48} />}
                title="SAVE MONEY"
                description="Eliminate expensive editing infrastructure costs. No need for high-end computers, storage, or software licenses."
                delay={0.2}
                gradient={{
                  from: "rgba(236, 72, 153, 0.8)",
                  to: "rgba(239, 68, 68, 0.8)",
                }}
              />
              <ValueCard
                icon={<Award className="text-white" size={48} />}
                title="ELITE PARTNERSHIP"
                description="We work with selective, premium clients each season to ensure unmatched quality and personalized attention."
                delay={0.3}
                gradient={{
                  from: "rgba(34, 197, 94, 0.8)",
                  to: "rgba(59, 130, 246, 0.8)",
                }}
              />
            </div>
          </motion.div>

          {/* Trust Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl transform rotate-1"></div>
            <div className="relative bg-white rounded-3xl p-10 shadow-2xl border border-white/20">
              <div className="text-center space-y-4">
                <div className="flex justify-center items-center space-x-4">
                  <ShieldCheck className="text-green-500" size={48} />
                  <motion.h2
                    className="text-4xl font-bold text-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    Why Trust Us?
                  </motion.h2>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-200"
                >
                  <p className="text-2xl font-semibold text-green-700 mb-4">
                    💰 Pay Only When Complete
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>No advance payment required!</strong> For your first
                    project, we'll request payment only after you're 100%
                    satisfied with our work. Future projects follow agreed
                    terms.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.button
              className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-full shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span 
              onClick={()=>{navigate('/contact')}}
              className="relative z-10 flex items-center space-x-2 cursor-pointer">
                <span>Get Your Free Quote</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={24} />
                </motion.div>
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Enhanced Footer */}
        <motion.footer
          className="relative bg-gradient-to-r from-gray-900 to-black text-white py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>

          <div className="relative z-10 text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg opacity-80">
                © 2024 by FolkLore - Crafting Perfect Moments
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {[
                { Icon: Instagram, color: "hover:text-pink-400" },
                { Icon: Phone, color: "hover:text-green-400" },
                { Icon: Mail, color: "hover:text-blue-400" },
              ].map(({ Icon, color }, index) => (
                <motion.div
                  key={index}
                  className={`p-3 bg-white/10 rounded-full backdrop-blur-sm cursor-pointer transition-all duration-300 ${color}`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    if (Icon === Phone) {
                      window.location.href = "tel:+917011584331";
                    } else if (Icon === Mail) {
                      console.log('hiii')
                      window.location.href = "mailto:contact@folkloreproductions.in";
                    } else if (Icon === Instagram) {
                      window.open(
                        "https://www.instagram.com/folkloreproductions_",
                        "_blank"
                      );
                    }
                  }}

                >
                  <Icon size={24} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-2"
            >
              <div className="text-lg">
                <span className="text-green-400">📞</span>
                <span className="font-semibold mx-2">+91 7011584331</span>
              </div>
              <div className="text-lg">
                <span className="text-blue-400">✉️</span>
                <span className="font-semibold mx-2">
                  contact@folkloreproductions.in
                </span>
              </div>
            </motion.div>
          </div>
        </motion.footer>
      </div>
    </>
  );
}
