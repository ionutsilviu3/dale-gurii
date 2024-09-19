import "./Galery.css";
import images from "../../constants/images";

const Galery = () => {
    return (
        <div className="app__galery">
            <h1 className="p__cormorant">
                Preparatele noastre 
                <span style={{ color: "var(--color-orange)" }}> vedeta</span>
            </h1>

            <div className="app__galery-item">
                <img src={images.galeryFood1} alt="Fructele de mare" />
                <h1 className="p__opensans">Fructele fresh de mare</h1>
            </div>

            <div className="app__galery-item">
                <img src={images.galeryFood2} alt="Pasta" />
                <h1 className="p__opensans">Paste facute in casa</h1>
            </div>

            <div className="app__galery-item">
                <img src={images.galeryFood3} alt="American Burger" />
                <h1 className="p__opensans">Burger american</h1>
            </div>

            <div className="app__galery-item">
                <img src={images.galeryFood4} alt="Costite taranesti" />
                <h1 className="p__opensans">Costite taranesti</h1>
            </div>
        </div>
    );
};

export default Galery;
