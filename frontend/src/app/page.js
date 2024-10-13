import Head from 'next/head'; // Next.js SEO component for meta tags
import dynamic from 'next/dynamic'; // For lazy loading components
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Galery from '../components/Galery';
import Menu from '../components/Menu'
import Footer from '../components/Footer';

// Lazy load other sections to improve initial load performance
const Contact = dynamic(() => import('../components/Contact'));

const App = () => {
  return (
    <>
      {/* Head for SEO improvements */}
      <Head>
        <title>Restaurant D'ale Gurii Pogoanele</title>
        <meta name="description" content="Bucură-te de preparate delicioase la Restaurantul D\'ale Gurii din Pogoanele." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Main wrapper for the content */}
      <main className="parent">
        {/* Navigation bar */}
        <Navbar />

        {/* Header Section */}
        <Header />

        {/* Lazy-loaded sections */}
        <Galery />
        <Menu />
        <Contact />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default App;
