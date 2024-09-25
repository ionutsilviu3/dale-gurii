import { useRef, useEffect } from 'react';
import lottie from 'lottie-web'; // Use lottie-web for full control
import './Menu.css';
import menuAnimation from '../../assets/menu.json';

const Menu = () => {
    const lottieContainerRef = useRef(null); // Ref for the container
    const animationInstanceRef = useRef(null); // Ref for the animation instance
    const runCountRef = useRef(0); // Ref to track the number of runs

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

        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollFraction = scrollTop / docHeight; // Calculate scroll position as a fraction

            // Change this threshold value as needed to control when the animation starts
            const startScrollThreshold = 0.2; // Start the animation when scrolled 20% down

            // Only proceed if the scroll position is above the threshold
            if (scrollFraction >= startScrollThreshold) {
                // Calculate the frame based on scroll position
                const totalFrames = animationInstance.totalFrames;
                const frame = Math.min(scrollFraction * totalFrames, totalFrames - 1); // Calculate the frame to display

                // Update the animation frame
                animationInstanceRef.current.goToAndStop(frame, true);

                // Check if the animation should reset and run again
                if (frame >= totalFrames - 1 && runCountRef.current < 1) {
                    // Increment the run count and reset the animation
                    runCountRef.current += 1; // Increment run count
                    animationInstanceRef.current.goToAndStop(0, true); // Reset to the beginning
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            animationInstance.destroy(); // Clean up animation instance on component unmount
        };
    }, []);

    return (
        <div className="app__menu">
            <h1 className="p__cormorant">Meniu</h1>
            <div ref={lottieContainerRef} className="menu-animation-container" />
            <a className="btn" href="/meniu.pdf">Vreau sa vad meniul</a>
        </div>
    );
};

export default Menu;
