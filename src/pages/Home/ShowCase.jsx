// ShowCase.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const videos = [
  {
    id: 1,
    title: 'Wedding Highlight 1',
    videoUrl: 'https://www.youtube.com/embed/k-hL4ZQs9Qs',
    thumb: 'https://img.youtube.com/vi/k-hL4ZQs9Qs/maxresdefault.jpg',
  },
  {
    id: 2,
    title: 'Wedding Highlight 2',
    videoUrl: 'https://www.youtube.com/embed/RTo696CMxdw',
    thumb: 'https://img.youtube.com/vi/RTo696CMxdw/maxresdefault.jpg',
  },
  {
    id: 4,
    title: 'Wedding Highlight 5',
    videoUrl: 'https://www.youtube.com/embed/4ClwQoxYu0o',
    thumb: 'https://img.youtube.com/vi/4ClwQoxYu0o/maxresdefault.jpg',
  },
  {
    id: 5,
    title: 'Wedding Highlight 4',
    videoUrl: 'https://www.youtube.com/embed/dHUafJjSb2A',
    thumb: 'https://img.youtube.com/vi/dHUafJjSb2A/maxresdefault.jpg',
  },
];

const ShowCase = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <section className="py-14 px-4 md:px-20 bg-secondary text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 uppercase tracking-wide font-serifStyle">
          PORTFOLIO FILMS
        </h2>
        <p className="text-sm md:text-base text-accent eb mb-8">
          Visual Wonders created by our editing magicians
        </p>

        <div className="min-h-screen flex items-center justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
    {videos.map((video) => (
      <motion.div
        key={video.id}
        transition={{ duration: 0.3 }}
        className="relative cursor-pointer bg-white shadow-md rounded-lg overflow-hidden w-full max-w-md"
        onClick={() => setSelectedVideo(video)}
      >
        <div className="aspect-video">
          <img
            src={video.thumb}
            alt={video.title}
            className="w-full h-full object-cover"
          />
          {/* Centered Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-secondary text-accent p-2.5 rounded-full shadow-md">
              <Play size={20} className="fill-accent" />
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>


        <div className="mt-10">
          <Link
            to="/gallery"
            className="inline-block border border-primary text-white hover:bg-primary px-6 py-2 rounded-full shadow-md transition"
          >
            View More →
          </Link>
        </div>
      </section>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="relative w-full max-w-4xl"
            >
              <iframe
                src={selectedVideo.videoUrl + '?autoplay=1'}
                className="w-full aspect-video rounded-lg"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={selectedVideo.title}
              ></iframe>

              <button
                className="absolute top-2 right-2 bg-white/90 text-black hover:bg-white p-2 rounded-full shadow-lg"
                onClick={() => setSelectedVideo(null)}
              >
                <X size={22} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ShowCase;
