import images from "../constants/images";
import styles from "../styles/Header.module.css"
import Image from "next/image";

const Header = () => {
    return (
        <div id="home" className={styles.header}>
            <Image src={images.food} className={styles.image} alt="Food"/>
        </div>
    );
};

export default Header;