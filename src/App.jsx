import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useTheme, ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import LanguageToggle from './components/Navigation/LanguageToggle';
import ThemeToggle from './components/Navigation/ThemeToggle';
import NavigationDots from './components/Navigation/NavigationDots';
import MobileMenu from './components/Navigation/MobileMenu';
import CustomCursor from './components/UI/CustomCursor';
import ScrollToTop from './components/UI/ScrollToTop';
import Hero from './components/Hero/Hero';

// Lazy Load heavy sections
const About = lazy(() => import('./components/About/About'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));

import './index.css';
import './styles/animations.css';

function AppContent() {
    useSmoothScroll();
    const { theme } = useTheme();

    return (
        <div className="app">
            <CustomCursor />
            <ScrollToTop />
            <NavigationDots />
            <MobileMenu />
            <LanguageToggle />
            <ThemeToggle />

            <Hero />

            <Suspense fallback={<div style={{ height: '100vh' }} />}>
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Contact />
                <Footer />
            </Suspense>
        </div>
    );
}

function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <AppContent />
            </LanguageProvider>
        </ThemeProvider>
    );
}

export default App;
