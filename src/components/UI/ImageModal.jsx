import React, { useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import './ImageModal.css';

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

const modalVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.3
        }
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.2 }
    }
};

const ImageModal = ({ imageUrl, altText, onClose }) => {
    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);

        // Prevent body scroll
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    if (!imageUrl) return null;

    return (
        <AnimatePresence>
            <m.div
                className="image-modal-overlay"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={onClose}
                role="dialog"
                aria-modal="true"
                aria-label="Image View"
            >
                <m.div
                    className="image-modal-content"
                    variants={modalVariants}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="image-modal-close-btn" onClick={onClose} aria-label="Close modal">
                        <FaTimes />
                    </button>

                    <img
                        src={imageUrl}
                        alt={altText || 'Full size view'}
                        className="image-modal-img"
                    />
                </m.div>
            </m.div>
        </AnimatePresence>
    );
};

export default ImageModal;
