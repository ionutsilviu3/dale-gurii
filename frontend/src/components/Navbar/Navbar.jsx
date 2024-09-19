import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';
import images from '../../constants/images'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Acasa</a></li>
        <li className="p__opensans"><a href="#about">Despre</a></li>
        <li className="p__opensans"><a href="#menu">Meniu</a></li>
        <li className="p__opensans"><a href="#galery">Galerie</a></li>
        <li className="p__opensans"><a href="#contact">Rezervare</a></li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Acasa</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>Despre</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Meniu</a></li>
              <li><a href="#galery" onClick={() => setToggleMenu(false)}>Galerie</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Rezervare</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
