import styles from "../styles/Galery.module.css"
import images from "../constants/images";
import Image from "next/image";

const Galery = () => {
    return (
        <div id="galery" className={styles.galery}>
            <h1 className="cormorant-title">
                Preparatele noastre 
                <span style={{ color: "var(--color-blue)" }}> vedeta</span>
            </h1>

            <div className={styles.galeryItem}>
                <Image src={images.galeryFood1} className={styles.galeryImage} alt="Seafood" />
                <h1 className="cormorant-h1">Pulpa de porc la gratar</h1>
            </div>

            <div className={styles.galeryItem}>
                <Image src={images.galeryFood2} className={styles.galeryImage} alt="Pasta" />
                <h1 className="cormorant-h1">Aripioare de pui</h1>
            </div>

            <div className={styles.galeryItem}>
                <Image src={images.galeryFood3} className={styles.galeryImage} alt="American Burger" />
                <h1 className="cormorant-h1">Salata Caesar</h1>
            </div>

            <div className={styles.galeryItem}>
                <Image src={images.galeryFood4} className={styles.galeryImage} alt="Bbq" />
                <h1 className="cormorant-h1">Gyros</h1>
            </div>
        </div>
    );
};

export default Galery;