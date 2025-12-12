import React, { useState, useEffect } from 'react';
import { m } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { UI_TEXT } from '../../data/resume';
import './Navigation.css';

const sectionIds = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

const NavigationDots = () => {
    const { language } = useLanguage();
    const ui = UI_TEXT[language];
    const [activeSection, setActiveSection] = useState('home');

    // Create sections array dynamically based on language
    const sections = sectionIds.map(id => ({
        id,
        label: ui.nav[id] || id.charAt(0).toUpperCase() + id.slice(1) // Fallback to Title Case ID
    }));

    useEffect(() => {
        const handleScroll = () => {
            const sectionIds = sections.map(s => s.id);
            let maxVisibility = 0;
            let currentActive = activeSection;

            sectionIds.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const viewportHeight = window.innerHeight;

                    // Calculate visibility overlap
                    const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
                    const visibility = Math.max(0, visibleHeight / viewportHeight);

                    if (visibility > maxVisibility && visibility > 0.2) {
                        maxVisibility = visibility;
                        currentActive = id;
                    }
                }
            });

            if (currentActive !== activeSection) {
                setActiveSection(currentActive);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="nav-dots" aria-label="Section Navigation">
            {/* Scroll Progress Line */}
            <div className="absolute right-[5px] top-[14px] bottom-[14px] w-[2px] bg-white/10 z-0 hidden lg:block" />
            <m.div
                className="absolute right-[5px] top-[14px] w-[2px] bg-primary z-0 hidden lg:block origin-top"
                animate={{
                    height: `${(sections.findIndex(s => s.id === activeSection) / (sections.length - 1)) * 100}%`
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            {sections.map(({ id, label }) => (
                <div key={id} className="nav-dot-container group z-10">
                    {/* Label (Tooltip style) */}
                    <span
                        className={`nav-label ${activeSection === id ? 'active' : ''}`}
                        aria-hidden="true"
                    >
                        {label}
                    </span>

                    {/* Dot */}
                    <button
                        onClick={() => scrollToSection(id)}
                        className={`nav-dot ${activeSection === id ? 'active' : ''}`}
                        aria-label={label}
                    />
                </div>
            ))}
        </nav>
    );
};

export default NavigationDots;
