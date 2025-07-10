import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/footer/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Brands from '@/pages/Brands';
import BrandDetail from '@/pages/brandDetail/BrandDetail';
import Contactos from './pages/contactos/Contactos';
import WhatsAppChat from './components/whatsappchat/WhatsAppChat';

function App() {
  const appStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  };

  const mainStyle = {
    flex: 1
  };

  return (
    <Router>
      <div style={appStyle}>
        <Helmet>
          <title>Rcorp Travel - Promovendo Momentos Inesquecíveis</title>
          <meta name="description" content="Descubra destinos incríveis com nossa agência de viagens premium. Oferecemos experiências únicas e inesquecíveis ao redor do mundo." />
        </Helmet>
        
        <Header />
        
        <main style={mainStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/marcas" element={<Brands />} />
            <Route path='/contactos' element={<Contactos/>}/>
            <Route path="/marca/:brandId" element={<BrandDetail />} />
          </Routes>
        </main>
        <WhatsAppChat/>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;