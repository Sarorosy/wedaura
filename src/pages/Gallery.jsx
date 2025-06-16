import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, PlayCircle } from "lucide-react";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import one from "../assets/gallery/1.jpg";
import two from "../assets/gallery/2.jpg";
import three from "../assets/gallery/3.jpg";
import four from "../assets/gallery/4.jpg";
import five from "../assets/gallery/5.jpg";
import six from "../assets/gallery/6.jpg";
import seven from "../assets/gallery/7.jpg";
import eight from "../assets/gallery/8.jpg";

const weddingHighlights = [
  {
    title: "Chris Jade Highlights",
    duration: "04:40",
    thumbnail: one,
    videoUrl: "https://player.vimeo.com/video/235390726",
  },
  {
    title: "Yan & Jason Highlights",
    duration: "05:07",
    thumbnail: two,
    videoUrl: "https://player.vimeo.com/video/235390726",
  },
  {
    title: "Sydney and Connor Highlights",
    duration: "07:46",
    thumbnail: three,
    videoUrl: "https://player.vimeo.com/video/235390726",
  },
  {
    title: "Sanjay and Rochele Highlights",
    duration: "07:42",
    thumbnail: four,
    videoUrl: "https://player.vimeo.com/video/235390726",
  },
];

const weddingShortFilms = [
  {
    title: "Ethan & Bella Short Film",
    duration: "06:30",
    thumbnail: five,
    videoUrl: "https://player.vimeo.com/video/235390726",
  },
  {
    title: "Lucas & Emma Short Film",
    duration: "08:15",
    thumbnail: six,
    videoUrl: "https://player.vimeo.com/video/235390726",
  },
  {
    title: "Noah & Ava Short Film",
    duration: "05:55",
    thumbnail: seven,
    videoUrl: "https://player.vimeo.com/video/235390726",
  },
  {
    title: "Liam & Olivia Short Film",
    duration: eight,
    thumbnail: eight,
    videoUrl: "https://player.vimeo.com/video/235390726",
  },
];

const GallerySection = ({ title, items, onVideoClick }) => (
  <div className="mb-16">
    <h2 className="text-center text-3xl font-serifStyle text-primary mb-6">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative bg-accent group cursor-pointer rounded overflow-hidden shadow-md"
          onClick={() => onVideoClick(item.videoUrl)}
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-auto  transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <PlayCircle className="text-white w-14 h-14" />
          </div>
          
          <p className="mt-2 text-center font-serifStyle text-darkBrown text-lg">{item.title}</p>
        </div>
      ))}
    </div>
  </div>
);

const Gallery = () => {
  const [videoUrl, setVideoUrl] = useState(null);

  return (
    <div className="bg-pastel min-h-screen">
      <Header2 />

      <div className="py-10">
        <h1 className="text-center text-4xl font-serifStyle text-primary mb-8">Wedding Gallery</h1>

        <GallerySection
          title="Wedding Highlights"
          items={weddingHighlights}
          onVideoClick={setVideoUrl}
        />
        <GallerySection
          title="Wedding Short Films"
          items={weddingShortFilms}
          onVideoClick={setVideoUrl}
        />

        <div className="text-center mt-10">
          <a
            href="/contact"
            className="bg-secondary text-accent px-6 py-3 rounded-md hover:bg-primary transition-all text-lg"
          >
            Get Quote →
          </a>
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
                    src={`${videoUrl}?autoplay=1&title=0&byline=0&portrait=0`}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
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
