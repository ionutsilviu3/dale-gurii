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
    let scrollTimeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 90) {
        setIsVisible(true);
        setIsTop(true);
      } else {
        setIsTop(false);

        if (currentScrollY < prevScrollY) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }

      setPrevScrollY(currentScrollY);
    };

    const debouncedHandleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(handleScroll, 50); // Debounce scroll events for performance
    };

    window.addEventListener('scroll', debouncedHandleScroll);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [prevScrollY]);

  return (
    <nav
      className={`${styles.navbar} ${isVisible ? styles.visible : styles.hidden} ${
        isTop ? styles.atTop : ''
      }`}
    >
      <div className={styles.logo}>
        <Image
          src={images.logo}
          className={styles.image}
          alt="Restaurant logo"
          width={80}
          height={80}
          priority={true} // Set the logo as high priority for faster load
        />
      </div>

      <ul className={styles.links}>
        <li className="opensans-navbar">
          <Link href="#home" aria-label="Navigheaza catre acasa">Acasa</Link>
        </li>
        <li className="opensans-navbar">
          <Link href="#galery" aria-label="Navigheaza catre preparatele noastre">Galerie</Link>
        </li>
        <li className="opensans-navbar">
          <Link href="#menu" aria-label="Navigheaza catre meniu">Meniu</Link>
        </li>
        <li className="opensans-navbar">
          <Link href="#contact" aria-label="Navigheaza catre o rezervare">Rezervare</Link>
        </li>
      </ul>

      <div className={styles.smallscreen}>
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
          aria-label="Deschide meniul de navigare"
        />
      </div>

      {toggleMenu && (
        <div className={`${styles.smallscreenOverlay} ${toggleMenu ? styles.show : ''}`}>
          <MdOutlineRestaurantMenu
            fontSize={27}
            className={styles.overlayClose}
            onClick={() => setToggleMenu(false)}
            aria-label="Inchide meniul de navigare"
          />
          <ul className={styles.smallscreenLinks}>
            <li>
              <Link href="#home" onClick={() => setToggleMenu(false)} aria-label="Navigheaza catre acasa">
                Acasa
              </Link>
            </li>
            <li>
              <Link href="#galery" onClick={() => setToggleMenu(false)} aria-label="Navigheaza catre preparatele noastre">
                Galerie
              </Link>
            </li>
            <li>
              <Link href="#menu" onClick={() => setToggleMenu(false)} aria-label="Navigheaza catre meniu">
                Meniu
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => setToggleMenu(false)} aria-label="Navigheaza catre o rezervare">
                Rezervare
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
