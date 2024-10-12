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
            <a className="cormorant-h2" href="tel:+40747597746">+40 747 597 746</a>
            </div>
            </div>
            <div>
            <Image src={images.adressIcon} className={styles.image} alt="Adress"/>
            <h1 className="cormorant-h1">Adresa</h1>
            <div className={styles.contactClickable}>
            <a className="cormorant-h2" href='https://maps.app.goo.gl/Jm923JWDPCnLDp5fA'>Pogoanele <br></br> Blvd. Nicolae Bălcescu <br></br>Nr. 90</a>
           </div>
            </div>
            
            <div>
            <Image src={images.scheduleIcon} className={styles.image} alt="Schedule"/>
            <h1 className="cormorant-h1">Program</h1>
            <h2 className="cormorant-h2">08:00 - 22:00</h2>
            </div>
            </div>
    );
};

export default Contact;