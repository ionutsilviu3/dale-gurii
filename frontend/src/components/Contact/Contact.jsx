import images from '../../constants/images';
import './Contact.css'

const Contact = () => {
    return (
            <div className="app__contact">
            <div>
            <img src={images.callIcon}/>
            <h1 className="p__cormorant">Fa o rezervare la noi</h1>
            <div className='app__contact__clickable'>
            <a className="p__cormorant" href="tel:+40755350594">+40755350594</a>
            </div>
            </div>
            <div>
            <img src={images.adressIcon}/>
            <h1 className="p__cormorant">Adresa</h1>
            <div className='app__contact__clickable'>
            <a className="p__cormorant" href='http://maps.apple.com/?q=Buzau,+RO'>Buzau, Strada Bisericii Nr. 12</a>
           </div>
            </div>
            
            <div>
            <img src={images.scheduleIcon}/>
            <h1 className="p__cormorant">Program</h1>
            <h2 className="p__cormorant">10:00 - 21:00</h2>
            </div>
            </div>
    );
};

export default Contact;