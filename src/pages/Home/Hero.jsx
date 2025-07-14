import React from 'react';
import { Play } from 'lucide-react';
import herobg from '../../assets/hero-bg.mp4';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[75vh] w-full overflow-hidden flex items-center justify-center text-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={herobg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        <h1 className="text-white text-3xl md:text-5xl font-serifStyle">
          Wedding film Editing Firm for wedding filmmakers
        </h1>
        <p className="text-white text-lg md:text-2xl eb-regular">
          TURNING YOUR RAW FOOTAGE INTO TIMELINE FOLKTALES
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <button
          onClick={()=>{navigate('/gallery')}}
          className="flex items-center justify-center gap-2 bg-white/80 text-black px-6 py-2 rounded-full font-medium hover:bg-white shadow-lg">
            <Play className="w-4 h-4" />
            Watch Now
          </button>
          <button
           onClick={()=>{navigate('/contact')}}
           className="bg-black/80 text-white px-6 py-2 rounded-full font-medium hover:bg-black shadow-lg">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
