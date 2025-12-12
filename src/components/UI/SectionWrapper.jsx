import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = forwardRef(({ children, id, className, delay = 0, disableAnimation = false }, ref) => {
    return (
        <motion.section
            ref={ref}
            id={id}
            className={className}
            initial={disableAnimation ? {} : { opacity: 0, y: 50 }}
            whileInView={disableAnimation ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay, ease: 'easeOut' }}
        >
            {children}
        </motion.section>
    );
});

SectionWrapper.displayName = 'SectionWrapper';

export default SectionWrapper;
