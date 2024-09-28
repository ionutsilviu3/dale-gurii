import styles from "../styles/Galery.module.css"
import images from "../constants/images";
import Image from "next/image";

const Galery = () => {
    return (
        <div id="galery" className={styles.galery}>
            <h1 className="cormorant">
                Preparatele noastre 
                <span style={{ color: "var(--color-orange)" }}> vedeta</span>
            </h1>

            <div className={styles.galeryItem}>
                <Image src={images.galeryFood1} className={styles.galeryImage} alt="Seafood" />
                <h1 className="cormorant">Fructe fresh de mare</h1>
            </div>

            <div className={styles.galeryItem}>
                <Image src={images.galeryFood2} className={styles.galeryImage} alt="Pasta" />
                <h1 className="cormorant">Paste facute in casa</h1>
            </div>

            <div className={styles.galeryItem}>
                <Image src={images.galeryFood3} className={styles.galeryImage} alt="American Burger" />
                <h1 className="cormorant">Burger american</h1>
            </div>

            <div className={styles.galeryItem}>
                <Image src={images.galeryFood4} className={styles.galeryImage} alt="Bbq" />
                <h1 className="cormorant">Costite taranesti</h1>
            </div>
        </div>
    );
};

export default Galery;