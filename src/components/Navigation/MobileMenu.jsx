import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { UI_TEXT } from '../../data/resume';
import { FaBars, FaTimes } from 'react-icons/fa';
import './MobileMenu.css';

const sectionIds = ['home', 'about', 'experience', 'projects', 'certifications', 'skills', 'contact'];

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { language } = useLanguage();
    const ui = UI_TEXT[language];

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const scrollToSection = (id) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            setTimeout(() => {
                let headerOffset = 0;

                if (id === 'contact') {
                    headerOffset = 50;
                } else if (id === 'skills') {
                    headerOffset = 50;
                }

                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset + headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }, 300);
        }
    };

    const menuVariants = {
        closed: {
            opacity: 0,
            x: '100%',
            transition: {
                duration: 0.2,
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, x: 50 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <div className="mobile-nav-wrapper">
            <button
                className={`hamburger-btn glass ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <m.div
                        className="mobile-menu-overlay"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobile Navigation Menu"
                    >
                        <nav className="mobile-nav-links" aria-label="Mobile Links">
                            {sectionIds.map((id) => (
                                <m.button
                                    key={id}
                                    variants={itemVariants}
                                    onClick={() => scrollToSection(id)}
                                    className="mobile-link"
                                >
                                    {ui.nav[id] || id}
                                </m.button>
                            ))}
                        </nav>
                    </m.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileMenu;
