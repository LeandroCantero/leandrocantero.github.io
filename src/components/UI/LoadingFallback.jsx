import React from 'react';
import { m } from 'framer-motion';
import './LoadingFallback.css';

const LoadingFallback = () => {
    return (
        <div className="loading-fallback">
            <m.div
                className="loading-content"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Animated Logo/Initials */}
                <m.div
                    className="loading-logo"
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <span className="gradient-text">LC</span>
                </m.div>

                {/* Animated Dots */}
                <div className="loading-dots">
                    {[0, 1, 2].map((i) => (
                        <m.span
                            key={i}
                            className="dot"
                            animate={{
                                y: [0, -10, 0],
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.15,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>
            </m.div>
        </div>
    );
};

export default LoadingFallback;
