import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Lightbox({
  isOpen,
  onClose,
  images = [],
  currentIndex = 0,
  setCurrentIndex
}) {
  // Bind keyboard navigation keys (Left, Right, Escape)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, images]);

  // Disable scroll when lightbox is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || images.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/95 backdrop-blur-md">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer focus:outline-none"
          aria-label="Close fullscreen view"
        >
          <X size={24} />
        </button>

        {/* Counter Indicator */}
        <div className="absolute top-6 left-6 text-white/70 text-sm font-semibold tracking-wider bg-white/5 px-4 py-1.5 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Navigation - Prev Button */}
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-6 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        {/* Slide Main Image Wrapper */}
        <div className="w-full max-w-5xl px-4 flex flex-col items-center justify-center">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative max-h-[75vh] flex justify-center items-center select-none"
          >
            <img
              src={currentImage.url}
              alt={currentImage.title || "Full screen image"}
              className="max-h-[75vh] max-w-full rounded-xl object-contain shadow-2xl border border-white/5"
            />
          </motion.div>

          {/* Caption */}
          {currentImage.title && (
            <motion.div
              key={`caption-${currentIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-center max-w-2xl px-4"
            >
              <h3 className="text-white font-bold text-lg md:text-xl tracking-wide">
                {currentImage.title}
              </h3>
              {currentImage.description && (
                <p className="text-slate-400 text-xs md:text-sm mt-1.5 leading-relaxed font-medium">
                  {currentImage.description}
                </p>
              )}
            </motion.div>
          )}
        </div>

        {/* Navigation - Next Button */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-6 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        )}
      </div>
    </AnimatePresence>
  );
}
