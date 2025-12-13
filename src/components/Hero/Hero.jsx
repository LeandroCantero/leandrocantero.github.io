import { useEffect, useRef, useState, useMemo, lazy, Suspense } from 'react';
import { gsap } from 'gsap';
// import Particles, { initParticlesEngine } from "@tsparticles/react"; // Moved to dynamic import
// import { loadSlim } from "@tsparticles/slim"; // Moved to dynamic import
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { HERO_DATA } from '../../data/heroData';
import { UI_TEXT } from '../../data/resume';
import { FaChevronDown, FaDownload } from 'react-icons/fa';
import './Hero.css';

// Lazy load Particles component
const Particles = lazy(() => import("@tsparticles/react"));

const Hero = () => {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const data = HERO_DATA[language];

    const [init, setInit] = useState(false);
    const heroRef = useRef(null);
    const nameRef = useRef(null);
    const titleRef = useRef(null);
    const scrollIndicatorRef = useRef(null);
    const particlesRef = useRef([]);

    useEffect(() => {
        // Disable particles on mobile (< 768px) to improve performance
        if (window.innerWidth < 768) return;

        const initParticles = async () => {
            const { initParticlesEngine } = await import("@tsparticles/react");
            const { loadSlim } = await import("@tsparticles/slim");

            await initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            });
            setInit(true);
        };
        initParticles();
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate name with stagger letters
            const nameChars = nameRef.current.querySelectorAll('.char');
            const isMobile = window.innerWidth < 768;

            gsap.fromTo(
                nameChars,
                {
                    opacity: 0,
                    y: isMobile ? 30 : 100, // Reduced distance for mobile
                    rotationX: isMobile ? 0 : -90, // No rotation on mobile for performance
                },
                {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    duration: isMobile ? 0.6 : 1, // Faster on mobile
                    stagger: isMobile ? 0.02 : 0.05, // Much tighter stagger on mobile
                    ease: 'back.out(1.7)',
                    delay: 0.1,
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
                    delay: 0.5, // Reduced from 1.5s
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
                    <Suspense fallback={null}>
                        <Particles
                            id="tsparticles"
                            particlesLoaded={async (container) => {
                                /* console.log(container); */
                            }}
                            options={particlesOptions}
                            className="absolute inset-0 z-0"
                        />
                    </Suspense>
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

                    <a
                        href="/Leandro_Cantero_CV.pdf"
                        download="Leandro_Cantero_CV.pdf"
                        className="download-cv-btn"
                        aria-label={UI_TEXT[language].hero.downloadCV}
                    >
                        {UI_TEXT[language].hero.downloadCV}
                        <FaDownload className="download-icon" />
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div ref={scrollIndicatorRef} className="scroll-indicator">
                <span className="scroll-text">{data.scrollIndicator}</span>
                <FaChevronDown className="scroll-icon" />
            </div>
        </section>
    );
};

export default Hero;
