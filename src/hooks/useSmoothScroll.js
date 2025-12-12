import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useSmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical', // Added back explicitly
            smoothWheel: true,
            wheelMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        // 1. Conexión de escucha: Lenis notifica a ScrollTrigger sobre el nuevo scroll
        lenis.on('scroll', ScrollTrigger.update);

        // 2. Sincronización de reloj (EL PASO CLAVE):
        // Usamos el Ticker de GSAP para ejecutar a Lenis.
        function update(time) {
            lenis.raf(time * 1000);
        }

        gsap.ticker.add(update);

        // 3. Eliminación del lag de GSAP
        gsap.ticker.lagSmoothing(0);

        return () => {
            // Limpieza: importante remover el listener del ticker.
            gsap.ticker.remove(update);
            lenis.destroy();
        };
    }, []);
};
