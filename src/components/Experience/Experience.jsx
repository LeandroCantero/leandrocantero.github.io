import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';
import { RESUME_DATA, UI_TEXT } from '../../data/resume';
import SectionWrapper from '../UI/SectionWrapper';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const { language } = useLanguage();
    const data = RESUME_DATA[language];
    const ui = UI_TEXT[language];
    const sectionRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                timelineRef.current,
                { height: '0%' },
                {
                    height: '100%',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current.querySelector('.timeline-container'),
                        start: 'top 55%',
                        end: 'bottom 50%',
                        scrub: 0.5,
                    },
                }
            );

            // Animate each experience card
            const cards = sectionRef.current.querySelectorAll('.experience-card');
            cards.forEach((card, i) => {
                const isLeft = i % 2 === 0;

                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        x: isLeft ? -50 : 50,
                        scale: 0.9,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        duration: 0.6,
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );

                const dot = card.querySelector('.timeline-dot');
                ScrollTrigger.create({
                    trigger: card,
                    start: 'top 50%',
                    end: 'bottom 50%',
                    onEnter: () => dot.classList.add('active'),
                    onLeave: () => dot.classList.remove('active'),
                    onEnterBack: () => dot.classList.add('active'),
                    onLeaveBack: () => dot.classList.remove('active'),
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [language]);

    return (
        <SectionWrapper ref={sectionRef} className="experience section" id="experience">
            <div className="container">
                <h2 className="section-title gradient-text">{ui.sections.experience}</h2>

                <div className="timeline-container">
                    <div ref={timelineRef} className="timeline-line"></div>

                    {[...data.work].reverse().map((job, i) => (
                        <div
                            key={i}
                            className={`experience-card glass ${i % 2 === 0 ? 'left' : 'right'}`}
                        >
                            <div className="timeline-dot"></div>

                            <div className="experience-content">
                                <div className="experience-header">
                                    <div>
                                        <h3>{job.title}</h3>
                                        <h4 className="company-name">{job.company}</h4>
                                    </div>
                                    <div className="experience-meta">
                                        <span className="period">{job.start} - {job.end}</span>
                                        <span className="location">{job.location}</span>
                                    </div>
                                </div>

                                <p className="experience-description">{job.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Experience;
