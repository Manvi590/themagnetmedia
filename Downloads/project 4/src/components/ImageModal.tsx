import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, imageSrc, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 sm:px-8"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
          >
            <X size={24} />
          </button>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageSrc}
              alt="Testimonial"
              className="max-w-2xl max-h-[70vh] w-auto h-auto object-contain rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
