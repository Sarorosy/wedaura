import React from 'react';
import { motion } from 'framer-motion';
import { Film } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SmallAbout = () => {

  const navigate = useNavigate();
  return (
    <section className="w-full bg-accent/10 text-primary py-16 px-6 md:px-20">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className='flex items-center justify-center my-2 rotate-15'><Film size={24}  /></h1>
        <h2 className="text-4xl md:text-5xl font-medium font-serifStyle leading-tight mb-6">
          YOUR WEDDING STORY,
          <br />
          <span className="text-darkBrown font-serifStyle italic text-3xl md:text-4xl">Our Editing Skills</span>
        </h2>

        <p className="text-secondary text-base md:text-lg leading-relaxed mb-6 eb-regular">
          At <span className="font-semibold text-primary">Folklore</span>, we cover the best bits of your big day through artful editing. 
          Our team of experienced and passionate editors is dedicated to transforming your raw footage into a personalized masterpiece.
        </p>

        <p className="text-secondary text-base md:text-lg leading-relaxed mb-8 eb-regular">
          Creating comprehensive videos and capturing the essence of your wedding. We help you expand your business by managing your entire editing process — 
          so you can focus on advancing your wedding business rather than merely operating within it.
        </p>

        <motion.a
          onClick={()=>{navigate('/contact')}}
          className="inline-block  border border-darkBrown text-darkBrown px-6 py-2 rounded text-sm font-medium shadow hover:bg-darkBrown hover:text-white transition"
          whileHover={{ scale: 1.05 }}
        >
          Let’s connect
        </motion.a>
      </motion.div>
    </section>
  );
};

export default SmallAbout;
