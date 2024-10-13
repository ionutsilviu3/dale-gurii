import images from "../constants/images";
import styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
    return (
        <header id="home" className={styles.header}>
            <Image 
                src={images.header} 
                className={styles.image} 
                priority={true} 
                alt="Mancare delicioasa la restaurantul D'ale Gurii"
            />
        </header>
    );
};

export default Header;
