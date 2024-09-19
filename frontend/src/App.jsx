import './App.css';
import NavbarEx from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Galery from './components/Galery/Galery';
import Menu from './components/Menu/Menu';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className='parent'>
    <NavbarEx/>
    <Header/>
    <Galery/>
    <Menu/>
    <Contact/>
    <Footer/>
  </div>
);

export default App;