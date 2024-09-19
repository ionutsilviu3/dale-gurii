import "./Menu.css"
import images from "../../constants/images";

const Menu = () => {
    return (
        <div className="app__menu">
            <h1 className="p__cormorant">Meniu</h1>
            <img src={images.menu}></img>
            <button>Vreau sa vad meniul</button>
        </div>
    );
};

export default Menu;