import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import { IoMoon, IoSunny } from 'react-icons/io5';
import './Navigation.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === 'dark' ? 0 : 180,
                    scale: theme === 'dark' ? 1 : 0.8
                }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
                {theme === 'dark' ? (
                    <IoMoon size={20} style={{ color: 'var(--color-primary)' }} />
                ) : (
                    <IoSunny size={20} style={{ color: 'var(--color-primary)' }} />
                )}
            </motion.div>
        </button>
    );
};

export default ThemeToggle;
