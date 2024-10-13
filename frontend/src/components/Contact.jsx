import images from '../constants/images';
import styles from '../styles/Contact.module.css'
import Image from 'next/image';
import Head from 'next/head';

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact | Restaurant D'ale Gurii</title>
                <meta name="description" content="Contactează restaurantul D'ale Gurii Pogoanele pentru rezervări, adresă și informații despre programul nostru." />
                <meta name="keywords" content="contact restaurant, rezervare, adresă, telefon, program, orar, Pogoanele, D'ale Gurii, dale gurii" />
                <meta property="og:title" content="Rezervare - Restaurant D'ale Gurii" />
                <meta property="og:description" content="Detalii de contact pentru rezervări la Restaurant D'ale Gurii din Pogoanele: număr de telefon, adresă și program." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/logo.svg" />
                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Restaurant",
                    "name": "D'ale Gurii",
                    "telephone": "+40 747 597 746",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Blvd. Nicolae Bălcescu Nr. 90",
                        "addressLocality": "Pogoanele",
                        "addressCountry": "RO"
                    },
                    "openingHours": "Mo-Su 08:00-22:00"
                })}
                </script>
            </Head>

            <section id="contact" className={styles.contact}>
                <div>
                    <Image src={images.callIcon} className={styles.image} alt="Iconă telefon pentru contact restaurant" />
                    <h2 className="cormorantH1">Fă o rezervare la noi</h2>
                    <div className={styles.contactClickable}>
                        <a className="cormorantH2" href="tel:+40747597746">+40 747 597 746</a>
                    </div>
                </div>

                <address>
                    <Image src={images.adressIcon} className={styles.image} alt="Iconă adresă restaurant" />
                    <h2 className="cormorantH1">Adresă</h2>
                    <div className={styles.contactClickable}>
                        <a className="cormorantH2" href='https://maps.app.goo.gl/DcgkVWfyivSUDCTh9'>
                            Pogoanele <br /> Blvd. Nicolae Bălcescu <br /> Nr. 90
                        </a>
                    </div>
                </address>

                <div>
                    <Image src={images.scheduleIcon} className={styles.image} alt="Iconă program restaurant" />
                    <h2 className="cormorantH1">Program</h2>
                    <h3 className="cormorantH2">08:00 - 22:00</h3>
                </div>
            </section>
        </>
    );
};

export default Contact;
