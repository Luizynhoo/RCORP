import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/footer/Footer';
import Home from '@/pages/home/Home';
import About from '@/pages/About';
import Brands from '@/pages/Brands';
import BrandDetail from '@/pages/brandDetail/BrandDetail';
import Contactos from './pages/contactos/Contactos';
import SubsPopup from './components/subsPopup/SubsPopup';
import WhatsAppChat from './components/whatsappchat/WhatsAppChat';
import ScrollToTop from './components/ScrollToTop';
import Error from './pages/error';

function App() {
  const appStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  };

  const mainStyle = {
    flex: 1
  };

  // aqui você controla o tempo em segundos
  const popupDelaySeconds = 5;

  return (
    <Router>
      <ScrollToTop />
      <div style={appStyle}>
        <Helmet>
          <title>Rcorp Travel - Promoviendo Momentos Inolvidables</title>
          <meta
            name="description"
            content="Descubre destinos increíbles con nuestra agencia de viajes premium. Ofrecemos experiencias únicas e inolvidables alrededor del mundo."
          />
        </Helmet>

        <Header />

        <main style={mainStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/nuestras-marcas" element={<Brands />} />
            <Route path="/contactenos" element={<Contactos />} />
            <Route path="/nuestras-marcas/:brandId" element={<BrandDetail />} />

            <Route path="*" element={<Error />} />
          </Routes>
        </main>

        <WhatsAppChat />
        <Footer />
        <Toaster />

        <SubsPopup delaySeconds={popupDelaySeconds} />
      </div>
    </Router>
  );
}

export default App;
