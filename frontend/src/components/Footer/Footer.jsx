import "./Footer.css"
import images from "../../constants/images";
const Footer = () => {
    return (
        <div className="app__contact__footer">
        <div className="app__contact__social">
            <a href="https://www.facebook.com/ceaunulmic"> <img src={images.facebookIcon}/> </a>
            <a href="https://www.instagram.com/ceaunulmic"> <img src={images.instagramIcon}/> </a>
        </div>
        <h1 className="p__opensans ">
            &copy;{(new Date().getFullYear())} Ceanul Mic. Toate drepturile rezervate.</h1>
        </div>
    );
};

export default Footer;