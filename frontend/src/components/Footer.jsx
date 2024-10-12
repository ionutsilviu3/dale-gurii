import styles from "../styles/Footer.module.css";
import images from "../constants/images";
import Image from 'next/image';
import Link from "next/link";

const Footer = () => {
    return (
        <div id="about" className={styles.footer}>
            {/* Centered Facebook icon */}
            <div className={styles.social}>
                <Link href="https://www.facebook.com/share/q2t44ezX2eVEcWJb/?mibextid=LQQJ4d"> 
                    <Image src={images.facebookIcon} className={styles.image} alt="Facebook"/> 
                </Link>
            </div>

            {/* ANPC div aligned to the far right */}
            <div className={styles.ANPC}>
                <Link href="https://anpc.ro/ce-este-sal/"> 
                    <Image 
                        src={images.sal}
                        width={160} 
                        height={160} 
                        className={styles.SAL} 
                        alt="SAL"
                    />
                </Link>
                <Link href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"> 
                    <Image 
                        src={images.sol}
                        width={160} 
                        height={160} 
                        className={styles.SAL} 
                        alt="SOL"
                    />
                </Link>
            </div>

            {/* Footer text centered below */}
            <h1 className="opensans-footer">
                &copy;{new Date().getFullYear()} D'ale gurii. Toate drepturile rezervate.
            </h1>
        </div>
    );
};

export default Footer;
