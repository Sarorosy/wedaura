import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const videos = [
  {
    id: 1,
    title: 'Ethereal Garden Wedding | San Diego, CA',
    thumbnail: 'https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://player.vimeo.com/video/321232031',
  },
  {
    id: 2,
    title: 'Metreon Same Day Edit | San Francisco, CA',
    thumbnail: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://player.vimeo.com/video/240580347',
  },
  {
    id: 3,
    title: 'Rustic Love | Lake Tahoe, CA',
    thumbnail: 'https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://player.vimeo.com/video/321232031',
  },
  {
    id: 4,
    title: 'Modern Elegance | Los Angeles, CA',
    thumbnail: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://player.vimeo.com/video/240580347',
  },
];

const ShowCase = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <section className="py-16 px-4 md:px-20 bg-secondary">
        <h2 className="text-4xl font-bold font-itali text-center mb-12 text-accent">
          Wedding Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer bg-white shadow-2xl rounded-2xl overflow-hidden group"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth={1.5}
                    className="w-14 h-14 drop-shadow-lg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 4l12 8-12 8V4z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <p className="text-center text-base text-gray-700 italic font-medium">{video.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full shadow-md hover:bg-opacity-90 transition-all"
          >
            View More →
          </Link>
        </div>
      </section>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="relative w-full max-w-4xl p-2 rounded-lg"
            >
              <iframe
                src={`${selectedVideo.videoUrl}?autoplay=1`}
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
