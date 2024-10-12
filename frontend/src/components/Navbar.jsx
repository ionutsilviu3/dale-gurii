"use client";

import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import images from '../constants/images';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if the user is at the top of the page
      if (currentScrollY <= 90) {
        setIsVisible(true);
        setIsTop(true);
      } else {
        setIsTop(false);

        // Show navbar if scrolling up, hide if scrolling down
        if (currentScrollY < prevScrollY) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <nav className={`${styles.navbar} ${isVisible ? styles.visible : styles.hidden} ${isTop ? styles.atTop : ''}`}>
      <div className={styles.logo}>
        <Image src={images.logo} className={styles.image} alt="logo" width={80} height={80} />
        <h1></h1>
      </div>

      <ul className={styles.links}>
        <li className="opensans-navbar"><Link href="#home">Acasa</Link></li>
        <li className="opensans-navbar"><Link href="#galery">Galerie</Link></li>
        <li className="opensans-navbar"><Link href="#menu">Meniu</Link></li>
        <li className="opensans-navbar"><Link href="#contact">Rezervare</Link></li>
      </ul>

      <div className={styles.smallscreen}>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
      </div>

      {toggleMenu && (
        <div className={`${styles.smallscreenOverlay} ${toggleMenu ? styles.show : ''}`}>
          <MdOutlineRestaurantMenu fontSize={27} className={styles.overlayClose} onClick={() => setToggleMenu(false)} />
          <ul className={styles.smallscreenLinks}>
            <li><Link href="#home" onClick={() => setToggleMenu(false)}>Acasa</Link></li>
            <li><Link href="#galery" onClick={() => setToggleMenu(false)}>Galerie</Link></li>
            <li><Link href="#menu" onClick={() => setToggleMenu(false)}>Meniu</Link></li>
            <li><Link href="#contact" onClick={() => setToggleMenu(false)}>Rezervare</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
