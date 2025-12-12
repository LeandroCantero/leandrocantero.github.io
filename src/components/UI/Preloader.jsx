import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { RESUME_DATA } from '../../data/resume';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
    const { language } = useLanguage();
    const data = RESUME_DATA[language];
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence onExitComplete={onComplete}>
            {isLoading && (
                <motion.div
                    className="preloader-overlay"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                    <div className="preloader-content">
                        {/* Simple animated logo or text */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="preloader-logo"
                        >
                            {/* Initials or Name */}
                            <span className="text-primary">{data.name.split(' ')[0]}</span>
                            <span className="text-white">{data.name.split(' ')[1]}</span>
                        </motion.div>

                        {/* Progress bar line */}
                        <motion.div
                            className="progress-bar-container"
                        >
                            <motion.div
                                className="progress-bar"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.8, ease: "easeInOut" }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
