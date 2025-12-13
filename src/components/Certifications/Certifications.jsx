import React, { useRef, useState } from 'react';
import { m, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { RESUME_DATA, UI_TEXT } from '../../data/resume';
import SectionWrapper from '../UI/SectionWrapper';
import ImageModal from '../UI/ImageModal';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const CertificationCard = ({ cert, ui, onImageClick, language }) => {
    const handleCardClick = () => {
        if (cert.link) {
            window.open(cert.link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <m.div
            className="certification-card glass"
            variants={cardVariants}
            onClick={handleCardClick}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleCardClick();
            }}
        >
            <div className="cert-image-container">
                <img
                    src={cert.image}
                    alt={cert.title}
                    className="cert-image"
                    loading="lazy"
                />
            </div>
            <div className="cert-content">
                <div className="cert-header">
                    <h3 className="cert-title">{cert.title}</h3>
                    <span className="cert-issuer">{cert.issuer}</span>
                </div>

                <div className="cert-meta">
                    <span className="cert-date">{cert.date}</span>
                </div>

                <p className="cert-description">{cert.description}</p>

                <div className="cert-actions">
                    <button
                        className="cert-btn-details"
                        onClick={(e) => {
                            e.stopPropagation();
                            onImageClick();
                        }}
                        aria-label={`View image for ${cert.title}`}
                    >
                        {language === 'en' ? 'View Image' : 'Ver Imagen'}
                    </button>

                    <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-link"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`${ui.project?.visit || 'View'} ${cert.title}`}
                        title={ui.project?.visit || 'View Credential'}
                    >
                        <FaExternalLinkAlt size={16} />
                    </a>
                </div>
            </div>
        </m.div>
    );
};

const Certifications = () => {
    const { language } = useLanguage();
    const data = RESUME_DATA[language];
    const ui = UI_TEXT[language];
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <SectionWrapper className="certifications section" id="certifications">
            <div className="container" ref={ref}>
                <h2 className="section-title gradient-text">{ui.sections.certifications}</h2>

                <m.div
                    className="certifications-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {data.certifications.map((cert, index) => (
                        <CertificationCard
                            key={index}
                            cert={cert}
                            ui={ui}
                            language={language}
                            onImageClick={() => setSelectedCert(cert)}
                        />
                    ))}
                </m.div>
            </div>

            <ImageModal
                imageUrl={selectedCert?.image}
                altText={selectedCert?.title}
                onClose={() => setSelectedCert(null)}
            />
        </SectionWrapper>
    );
};

export default Certifications;
