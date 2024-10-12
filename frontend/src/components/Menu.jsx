"use client";

import { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import menuAnimation from '../../public/menu.json';
import styles from '../styles/Menu.module.css';

const Menu = () => {
    const lottieContainerRef = useRef(null);
    const animationInstanceRef = useRef(null);
    const runCountRef = useRef(0);

    useEffect(() => {
        // Initialize Lottie animation
        const animationInstance = lottie.loadAnimation({
            container: lottieContainerRef.current,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: menuAnimation,
        });

        animationInstanceRef.current = animationInstance;

        let lastKnownScrollPosition = 0;
        let ticking = false;

        const handleScroll = () => {
            lastKnownScrollPosition = window.scrollY || document.documentElement.scrollTop;

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    calculateAndAnimate(lastKnownScrollPosition);
                    ticking = false;
                });
                ticking = true;
            }
        };

        const calculateAndAnimate = (scrollTop) => {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollFraction = scrollTop / docHeight;

            // Detect screen size (mobile vs desktop)
            const isMobile = window.innerWidth < 768;
            const startScrollThreshold = isMobile ? 0.1 : 0.6; // Adjust animation trigger point for mobile/desktop

            if (scrollFraction >= startScrollThreshold) {
                const totalFrames = animationInstance.totalFrames;
                const frame = Math.min(
                    (scrollFraction - startScrollThreshold) * totalFrames / (1 - startScrollThreshold),
                    totalFrames - 1
                );

                animationInstance.goToAndStop(frame, true);

                // Reset animation after the first complete run
                if (frame >= totalFrames - 1 && runCountRef.current < 1) {
                    runCountRef.current += 1;
                    animationInstance.goToAndStop(0, true);
                }
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            animationInstance.destroy(); // Clean up Lottie animation on unmount
        };
    }, []);

    return (
        <div id="menu" className={styles.menu}>
            <h1 className="cormorant-title">Meniu</h1>
            <div ref={lottieContainerRef} className={styles.lottie} />
            <a className={styles.button} href="/menu.pdf">Vreau sa vad meniul</a>
        </div>
    );
};

export default Menu;
