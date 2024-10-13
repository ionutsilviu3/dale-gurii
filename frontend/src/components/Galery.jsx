import Head from 'next/head';
import styles from "../styles/Galery.module.css";
import images from "../constants/images";
import Image from "next/image";

const Galery = () => {
    return (
        <>
            <Head>
                {/* Add Schema.org structured data directly in the <head> */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Restaurant",
                        "name": "Dale Gurii",
                        "description": "Descoperă preparatele noastre vedetă: pulpă de porc la grătar, aripioare de pui, salată Caesar și gyros.",
                        "image": [
                            images.galeryFood1.src,
                            images.galeryFood2.src,
                            images.galeryFood3.src,
                            images.galeryFood4.src
                        ],
                        "servesCuisine": "Românească",
                        "menu": "https://dalegurii.vercel.app/menu", // Replace with actual menu URL
                        "url": "https://dalegurii.vercel.app", // Replace with actual URL
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Blvd Nicolae Balcescu Nr 90",
                            "addressLocality": "Pogoanele",
                            "addressCountry": "RO"
                        },
                        "telephone": "+40747597746"
                    })}
                </script>
            </Head>

            <section id="galery" className={styles.galery}>
                <h1 className="cormorantTitle">
                    Preparatele noastre 
                    <span style={{ color: "var(--color-blue)" }}> vedetă</span>
                </h1>

                <div className={styles.galeryItem}>
                    <Image
                        src={images.galeryFood1}
                        className={styles.galeryImage}
                        alt="Pulpa de porc la gratar servită în restaurantul Dale Gurii"
                    />
                    <h2 className="cormorantH1">Pulpă de porc la grătar</h2>
                </div>

                <div className={styles.galeryItem}>
                    <Image
                        src={images.galeryFood2}
                        className={styles.galeryImage}
                        alt="Aripioare de pui servite în restaurantul Dale Gurii"
                    />
                    <h2 className="cormorantH1">Aripioare de pui</h2>
                </div>

                <div className={styles.galeryItem}>
                    <Image
                        src={images.galeryFood3}
                        className={styles.galeryImage}
                        alt="Salată Caesar servită în restaurantul Dale Gurii"
                    />
                    <h2 className="cormorantH1">Salată Caesar</h2>
                </div>

                <div className={styles.galeryItem}>
                    <Image
                        src={images.galeryFood4}
                        className={styles.galeryImage}
                        alt="Gyros servit în restaurantul Dale Gurii"
                    />
                    <h2 className="cormorantH1">Gyros</h2>
                </div>
            </section>
        </>
    );
};

export default Galery;
