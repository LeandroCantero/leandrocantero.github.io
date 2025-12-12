import { useRef, useState } from 'react';
import { m, useMotionValue, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { RESUME_DATA, UI_TEXT } from '../../data/resume';
import { FaExternalLinkAlt } from 'react-icons/fa';
import SectionWrapper from '../UI/SectionWrapper';
import ProjectModal from './ProjectModal';
import './Projects.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -10 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 15
        }
    }
};

const ProjectCard = ({ project, onClick }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const { language } = useLanguage();
    const ui = UI_TEXT[language];

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]); // Inverted for correct tilt
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;

        // Normalized values (-0.5 to 0.5)
        const xPct = mouseXPos / width - 0.5;
        const yPct = mouseYPos / height - 0.5;

        x.set(xPct);
        y.set(yPct);

        // Update CSS variables for spotlight
        e.currentTarget.style.setProperty('--mouse-x', `${mouseXPos}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${mouseYPos}px`);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const handleCardClick = () => {
        if (project.link) {
            window.open(project.link.href, '_blank', 'noopener,noreferrer');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardClick();
        }
    };

    return (
        <m.div
            className="project-card glass"
            variants={cardVariants}
            style={{ rotateX, rotateY, perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleCardClick}
        >
            <div className="project-image-container">
                {project.image && (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                        width={project.width}
                        height={project.height}
                        loading="lazy"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                )}
                <div className="project-overlay"></div>
            </div>

            <div className="project-content">
                <h3>{project.title}</h3>

                <div className="tech-stack">
                    {project.techStack.map((tech, j) => (
                        <span key={j} className="tech-badge">{tech}</span>
                    ))}
                </div>

                <p className="project-description line-clamp-3">{project.description}</p>

                <div className="project-actions">
                    <button
                        className="project-btn-details"
                        onClick={(e) => {
                            e.stopPropagation();
                            onClick();
                        }}
                        tabIndex={0}
                        aria-label={`${ui.project?.details || 'Details'} ${project.title}`}
                    >
                        {ui.project?.details || 'Details'}
                    </button>
                    {project.link && (
                        <a
                            href={project.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            onClick={(e) => e.stopPropagation()}
                            aria-label={`Visit ${project.title}`}
                        >
                            <FaExternalLinkAlt />
                        </a>
                    )}
                </div>
            </div>
        </m.div>
    );
};

const Projects = () => {
    const { language } = useLanguage();
    const data = RESUME_DATA[language];
    const ui = UI_TEXT[language];
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <SectionWrapper className="projects section" id="projects" disableAnimation={true}>
            <div className="container" ref={ref}>
                <h2 className="section-title gradient-text">{ui.sections.projects}</h2>

                <m.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {data.projects.map((project, i) => (
                        <ProjectCard
                            key={i}
                            project={project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </m.div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </SectionWrapper>
    );
};

export default Projects;
