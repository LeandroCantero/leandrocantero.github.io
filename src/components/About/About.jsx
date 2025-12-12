import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';
import { RESUME_DATA, UI_TEXT } from '../../data/resume';
import SectionWrapper from '../UI/SectionWrapper';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const { language } = useLanguage();
    const data = RESUME_DATA[language];
    const ui = UI_TEXT[language];

    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const statsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Reveal text content
            gsap.fromTo(
                contentRef.current.querySelectorAll('.word'),
                { opacity: 0.1, y: 10 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.02,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            // Animate stats
            statsRef.current.querySelectorAll('.stat-card').forEach((card, i) => {
                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        y: 50,
                        scale: 0.9,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.6,
                        ease: 'back.out(1.7)',
                        scrollTrigger: {
                            trigger: statsRef.current,
                            start: 'top 75%',
                            toggleActions: 'play none none reverse',
                        },
                        delay: i * 0.1,
                    }
                );

                // Animate numbers
                const number = card.querySelector('.stat-number');
                if (number) {
                    const target = parseInt(number.getAttribute('data-target'));
                    gsap.fromTo(
                        number,
                        { textContent: 0 },
                        {
                            textContent: target,
                            duration: 2,
                            snap: { textContent: 1 },
                            scrollTrigger: {
                                trigger: statsRef.current,
                                start: 'top 70%',
                                toggleActions: 'play none none reverse',
                            },
                            delay: i * 0.1,
                        }
                    );
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [language]);

    // Split summary into words for animation
    const words = data.summary.split(' ');

    return (
        <SectionWrapper ref={sectionRef} className="about section" id="about">
            <div className="container">
                <h2 className="section-title gradient-text">{ui.sections.about}</h2>

                <div ref={contentRef} className="about-content">
                    <p className="about-text">
                        {words.map((word, i) => (
                            <span key={i} className="word">
                                {word}{' '}
                            </span>
                        ))}
                    </p>
                </div>

                <div ref={statsRef} className="stats-grid">
                    <div className="stat-card glass">
                        <div className="stat-number" data-target={data.work.length}>0</div>
                        <div className="stat-label">{language === 'en' ? 'Companies' : 'Empresas'}</div>
                    </div>

                    <div className="stat-card glass">
                        <div className="stat-number" data-target={data.certifications.length}>0</div>
                        <div className="stat-label">{language === 'en' ? 'Certifications' : 'Certificaciones'}</div>
                    </div>

                    <div className="stat-card glass">
                        <div className="stat-number" data-target={data.projects.length}>0</div>
                        <div className="stat-label">{language === 'en' ? 'Projects' : 'Proyectos'}</div>
                    </div>

                    <div className="stat-card glass">
                        <div className="stat-number" data-target={data.skills.length}>0</div>
                        <div className="stat-label">{language === 'en' ? 'Technologies' : 'Tecnologías'}</div>
                    </div>
                </div>

                {/* Education */}
                <div className="education-section">
                    <h3>{language === 'en' ? 'Education' : 'Educación'}</h3>
                    {data.education.map((edu, i) => (
                        <div key={i} className="education-card glass">
                            <div className="education-header">
                                <h4>{edu.degree}</h4>
                                <span className="education-period">{edu.start} - {edu.end}</span>
                            </div>
                            <p className="education-school">{edu.school}</p>
                            <p className="education-desc">{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
