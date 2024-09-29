import images from '../constants/images';
import styles from '../styles/Contact.module.css'
import Image from 'next/image';

const Contact = () => {
    return (
            <div id="contact" className={styles.contact}>
            <div>
            <Image src={images.callIcon} className={styles.image} alt="Phone number"/>
            <h1 className="cormorant-h1">Fa o rezervare la noi</h1>
            <div className={styles.contactClickable}>
            <a className="cormorant-h2" href="tel:+40755350594">+40755350594</a>
            </div>
            </div>
            <div>
            <Image src={images.adressIcon} className={styles.image} alt="Adress"/>
            <h1 className="cormorant-h1">Adresa</h1>
            <div className={styles.contactClickable}>
            <a className="cormorant-h2" href='http://maps.apple.com/?q=Buzau,+RO'>Buzau, Strada Bisericii Nr. 12</a>
           </div>
            </div>
            
            <div>
            <Image src={images.scheduleIcon} className={styles.image} alt="Schedule"/>
            <h1 className="cormorant-h1">Program</h1>
            <h2 className="cormorant-h2">10:00 - 21:00</h2>
            </div>
            </div>
    );
};

export default Contact;