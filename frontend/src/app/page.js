import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Galery from '../components/Galery';
import Menu from '../components/Menu';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const App = () => {
return (
    <div className='parent'>
        <Navbar />
        <Header />
        <Galery />
        <Menu />
        <Contact />
        <Footer />
    </div>
);
};

export default App;