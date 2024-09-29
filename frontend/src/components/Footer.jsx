import styles from "../styles/Footer.module.css"
import images from "../constants/images";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div id="about" className={styles.footer}>
        <div className="social">
            <Link href="https://www.facebook.com/ceaunulmic"> <Image src={images.facebookIcon} className={styles.image} alt="Facebook"/> </Link>
            <Link href="https://www.instagram.com/ceaunulmic"> <Image src={images.instagramIcon} className={styles.image} alt="Instagram"/> </Link>
        </div>
        {/* <h1 className="opensans-footer"> */}
            {/* &copy;{(new Date().getFullYear())} Ceanul Mic. Toate drepturile rezervate.</h1> */}
        <h1 className="opensans-footer">
        Acest site web este un mock-up creat doar în scop demonstrativ. Logo-urile, imaginile, meniurile și alte materiale utilizate pe acest site sunt proprietatea deținătorilor respectivi.</h1>
        
        </div>
    );
};

export default Footer;