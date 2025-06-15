import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const SmallAbout = () => {
  return (
    <section className="w-full bg-accent/10 text-primary py-16 px-6 md:px-20">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight">
          Crafted edits,{' '}
          <span className="text-darkBrown font-serifStyle italic">
            <Typewriter
              words={[
                'timeless memories',
                'love in motion',
                'emotive stories',
                'cinematic elegance',
                'your wedding legacy',
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </span>
        </h2>

        <p className="text-secondary text-base leading-relaxed mb-6">
          At <span className="font-semibold text-primary">WedAura</span>, we craft timeless memories through the art of wedding video editing.
          Our passionate editors transform raw footage into emotional, personalized masterpieces.
        </p>

        <p className="text-secondary text-base leading-relaxed mb-8">
          Every wedding is unique — and your video should be too. We help you grow your business by handling the entire editing process,
          so you can focus on scaling your brand, not just managing it.
        </p>

        <motion.a
          href="#contact"
          className="inline-block bg-darkBrown text-white px-6 py-2 rounded-full text-sm font-medium shadow hover:bg-primary transition"
          whileHover={{ scale: 1.05 }}
        >
          Let's connect
        </motion.a>
      </motion.div>
    </section>
  );
};

export default SmallAbout;
