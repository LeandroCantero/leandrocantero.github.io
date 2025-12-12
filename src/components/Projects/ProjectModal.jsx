import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './ProjectModal.css';

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

const modalVariants = {
    hidden: {
        opacity: 0,
        y: 100,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.4
        }
    },
    exit: {
        opacity: 0,
        y: 100,
        scale: 0.9,
        transition: { duration: 0.3 }
    }
};

const ProjectModal = ({ project, onClose }) => {

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);

        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    if (!project) return null;

    return (
        <motion.div
            className="modal-overlay"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
        >
            <motion.div
                className="modal-content"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
            >
                {/* Close Button */}
                <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
                    <FaTimes />
                </button>

                {/* Header Image */}
                <div className="modal-image-container">
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="modal-image"
                            width={project.width}
                            height={project.height}
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
                            No Image Available
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="modal-details">
                    <h2 className="modal-title">{project.title}</h2>

                    <div className="modal-tech-stack">
                        {project.techStack.map((tech, i) => (
                            <span key={i} className="tech-badge">{tech}</span>
                        ))}
                    </div>

                    <div className="modal-description">
                        {project.detailedDescription ? (
                            project.detailedDescription.split('\n').map((paragraph, index) => (
                                <p key={index} className="mb-4">
                                    {paragraph}
                                </p>
                            ))
                        ) : (
                            <p>{project.description}</p>
                        )}
                    </div>

                    <div className="modal-actions">
                        {project.link && (
                            <a
                                href={project.link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-btn primary"
                            >
                                <span>Visit Project</span>
                                <FaExternalLinkAlt />
                            </a>
                        )}

                        {/* Assuming there might be a github link in the future or mapping it if available */}
                        {/* {project.github && (
                            <a 
                                href={project.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="modal-btn secondary"
                            >
                                <span>View Code</span>
                                <FaGithub />
                            </a>
                        )} */}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectModal;
