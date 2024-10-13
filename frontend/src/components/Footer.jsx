import styles from "../styles/Footer.module.css";
import images from "../constants/images";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer id="about" className={styles.footer}>
            {/* Social Media Section */}
            <div className={styles.social}>
                <Link 
                    href="https://www.facebook.com/share/q2t44ezX2eVEcWJb/?mibextid=LQQJ4d" 
                    aria-label="Distribuiti pe Facebook"
                >
                    <Image 
                        src={images.facebookIcon} 
                        className={styles.image} 
                        alt="Urmariti-ne pe facebook"
                        width={40} 
                        height={40}
                    /> 
                </Link>
            </div>

            {/* ANPC Section */}
            <div className={styles.ANPC}>
                <Link 
                    href="https://anpc.ro/ce-este-sal/" 
                    aria-label="Informatii ANPC SAL"
                >
                    <Image 
                        src={images.sal}
                        width={160} 
                        height={160} 
                        className={styles.SAL} 
                        alt="ANPC SAL - Soluționarea Alternativă a Litigiilor"
                    />
                </Link>
                <Link 
                    href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO" 
                    aria-label="Access ANPC SOL platform"
                >
                    <Image 
                        src={images.sol}
                        width={160} 
                        height={160} 
                        className={styles.SAL} 
                        alt="ANPC SOL - Soluționarea Online a Litigiilor"
                    />
                </Link>
            </div>

            {/* Footer Text */}
            <h1 className="opensans-footer">
                &copy;{new Date().getFullYear()} D'ale gurii. Toate drepturile rezervate.
            </h1>
        </footer>
    );
};

export default Footer;
