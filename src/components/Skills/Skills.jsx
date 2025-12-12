import { useRef } from 'react';
import { m, useInView } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { RESUME_DATA, UI_TEXT } from '../../data/resume';
import {
    FaReact, FaNodeJs, FaJava, FaDocker, FaGitAlt,
    FaDatabase
} from 'react-icons/fa';
import { SiSpringboot, SiDotnet, SiPostgresql } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import SectionWrapper from '../UI/SectionWrapper';
import './Skills.css';

const iconMap = {
    'React': FaReact,
    'Node.js': FaNodeJs,
    'Java': FaJava,
    'Spring Boot': SiSpringboot,
    'C#': SiDotnet,
    '.NET': SiDotnet,
    'SQL': FaDatabase,
    'NoSQL': SiPostgresql,
    'Azure': VscAzure,
    'Docker': FaDocker,
    'Git': FaGitAlt,
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

const Skills = () => {
    const { language } = useLanguage();
    const data = RESUME_DATA[language];
    const ui = UI_TEXT[language];
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <SectionWrapper className="skills section" id="skills" disableAnimation={true}>
            <div className="container" ref={ref}>
                <h2 className="section-title gradient-text">{ui.sections.skills}</h2>

                <m.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {data.skills.map((skill, i) => {
                        const Icon = iconMap[skill] || FaDatabase;

                        return (
                            <m.div
                                key={i}
                                className="skill-badge glass"
                                variants={itemVariants}
                            >
                                <div className="skill-icon">
                                    <Icon />
                                </div>
                                <span className="skill-name">{skill}</span>
                            </m.div>
                        );
                    })}
                </m.div>
            </div>
        </SectionWrapper>
    );
};

export default Skills;
