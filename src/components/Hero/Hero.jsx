import { useEffect, useRef, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { RESUME_DATA, UI_TEXT } from '../../data/resume';
import { FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const data = RESUME_DATA[language];
    const ui = UI_TEXT[language];

    const [init, setInit] = useState(false);
    const heroRef = useRef(null);
    const nameRef = useRef(null);
    const titleRef = useRef(null);
    const scrollIndicatorRef = useRef(null);
    const particlesRef = useRef([]);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate name with stagger letters
            const nameChars = nameRef.current.querySelectorAll('.char');
            gsap.fromTo(
                nameChars,
                {
                    opacity: 0,
                    y: 100,
                    rotationX: -90,
                },
                {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    duration: 1,
                    stagger: 0.05,
                    ease: 'back.out(1.7)',
                    delay: 0.5,
                }
            );

            // Animate title with typewriter effect
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: 'power3.out',
                    delay: 1.5,
                }
            );

            // Pulse scroll indicator
            gsap.to(scrollIndicatorRef.current, {
                y: 10,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
            });

            // Animate particles/orbs
            particlesRef.current.forEach((particle, i) => {
                gsap.to(particle, {
                    y: `random(-50, 50)`,
                    x: `random(-50, 50)`,
                    duration: `random(3, 6)`,
                    repeat: -1,
                    yoyo: true,
                    ease: 'power1.inOut',
                    delay: i * 0.2,
                });
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const particlesOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: theme === 'dark' ? "#ffffff" : "#000000",
                },
                links: {
                    color: theme === 'dark' ? "#ffffff" : "#000000",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 60,
                },
                opacity: {
                    value: 0.3,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        [theme]
    );

    // Split name into individual characters for animation
    const nameChars = data.name.split('').map((char, i) => (
        <span key={i} className="char" style={{ display: 'inline-block' }}>
            {char === ' ' ? '\u00A0' : char}
        </span>
    ));

    return (
        <section ref={heroRef} className="hero section" id="home">
            {/* Animated Background */}
            <div className="hero-bg">
                {init && (
                    <Particles
                        id="tsparticles"
                        particlesLoaded={async (container) => {
                            /* console.log(container); */
                        }}
                        options={particlesOptions}
                        className="absolute inset-0 z-0"
                    />
                )}
                <div className="gradient-orb gradient-orb-1" ref={el => particlesRef.current[0] = el}></div>
                <div className="gradient-orb gradient-orb-2" ref={el => particlesRef.current[1] = el}></div>
                <div className="gradient-orb gradient-orb-3" ref={el => particlesRef.current[2] = el}></div>
            </div>

            <div className="container hero-content relative z-10">
                {/* Main Name */}
                <h1 ref={nameRef} className="hero-name">
                    {nameChars}
                </h1>

                {/* Title/About */}
                <div ref={titleRef} className="hero-title">
                    <p className="gradient-text">{data.about}</p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div ref={scrollIndicatorRef} className="scroll-indicator">
                <span className="scroll-text">{ui.hero.scrollIndicator}</span>
                <FaChevronDown className="scroll-icon" />
            </div>
        </section>
    );
};

export default Hero;
