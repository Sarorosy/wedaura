import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, PlayCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const youtubeVideos = [
  "vdQ9uE4o75E",
  "k-hL4ZQs9Qs",
  "RTo696CMxdw",
  "dHUafJjSb2A",
  "4ClwQoxYu0o",
  "1xrcchIhb3s",
];

const generateGalleryItems = (ids) =>
  ids.map((id, index) => ({
    title: `Video ${index + 1}`,
    thumbnail: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
    videoUrl: `https://www.youtube.com/embed/${id}`,
  }));

const weddingHighlights = generateGalleryItems(youtubeVideos);

const GallerySection = ({ title, items, onVideoClick }) => (
  <div className="mb-16">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative bg-accent group cursor-pointer rounded overflow-hidden shadow-md border border-darkBrown"
          onClick={() => onVideoClick(item.videoUrl)}
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-auto transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <PlayCircle className="text-white w-14 h-14" />
          </div>
          
        </div>
      ))}
    </div>
  </div>
);

const Gallery = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="bg-pastel min-h-screen">
      <Header />

      <div className="py-10">
        <h1 className="text-center text-4xl font-serifStyle text-primary mb-8">Wedding Gallery</h1>

        <GallerySection
          title="Wedding Highlights"
          items={weddingHighlights}
          onVideoClick={setVideoUrl}
        />
        

        <div className="text-center mt-10">
          <button
           onClick={()=>{navigate('/contact')}}
            className="bg-secondary text-accent px-6 py-3 rounded-md hover:bg-primary transition-all text-lg"
          >
            Get Quote →
          </button>
        </div>

        <AnimatePresence>
          {videoUrl && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 px-4"
            >
              <div className="relative w-full max-w-4xl">
                <button
                  className="absolute top-4 right-4 text-white hover:text-accent z-50"
                  onClick={() => setVideoUrl(null)}
                >
                  <X size={32} />
                </button>
                <div className="relative" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    src={`${videoUrl}?autoplay=1&modestbranding=1&rel=0`}
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    title="Wedding Video"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
