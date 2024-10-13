"use client";

import { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import menuAnimation from '../../public/menu.json';
import Head from 'next/head';
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
        <>
            <Head>
                {/* SEO: Schema.org structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Menu",
                        "name": "Meniu D'ale Gurii",
                        "description": "Meniul restaurantului nostru include diverse preparate pentru orice gust si se pot pregati meniuri de pomana sau alte evenimente.",
                        "offers": {
                            "@type": "Offer",
                            "url": "/menu.pdf",
                            "priceCurrency": "RON"
                        }
                    })}
                </script>
                {/* SEO Meta Tags */}
                <meta name="description" content="Vezi meniul restaurantului nostru D'ale Gurii și descoperă preparatele vedetă precum pulpă de porc la grătar, aripioare de pui, salată Caesar, și gyros." />
                <meta property="og:title" content="Meniul Restaurantului D'ale Gurii" />
                <meta property="og:description" content="Preparatele noastre vedetă și opțiuni de meniuri personalizate pentru evenimente speciale." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/logo.svg" />
            </Head>

            <div id="menu" className={styles.menu}>
                <h1 className="cormorantTitle">Meniu</h1>
                
                {/* Lottie Animation */}
                <div ref={lottieContainerRef} className={styles.lottie} aria-label="Meniu animation" role="img" />

                {/* Button to View Menu PDF */}
                <a className={styles.button} href="/menu.pdf" aria-label="Vreau să văd meniul">
                    Vreau să văd meniul
                </a>
                
                <h2 className="cormorantH1">
                    La cererea clienților putem pregăti meniuri de pomană <br></br>sau alte evenimente
                </h2>
            </div>
        </>
    );
};

export default Menu;
