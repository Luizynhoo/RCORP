import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Users, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { infosHome } from '../data/Pages/infosHome';
import { Helmet } from 'react-helmet-async';

const Home = () => {

  <Helmet>
  <title>Rcorp Travel - Viajes Exclusivos e Inolvidables</title>
  <meta name="description" content="Explora experiencias únicas con Rcorp Travel, una agencia de viajes premium especializada en destinos exclusivos alrededor del mundo." />
  <link rel="canonical" href="https://homolog.rcorptravel.com/" />

  <meta property="og:title" content="Rcorp Travel - Agencia de Viajes Premium" />
  <meta property="og:description" content="Transformamos tus sueños en viajes inolvidables. Conoce nuestras marcas especializadas." />
  <meta property="og:url" content="https://homolog.rcorptravel.com/" />
  <meta property="og:image" content="https://images.unsplash.com/photo-1604257601296-65d349c74773" />
  <meta property="og:type" content="website" />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "name": "Rcorp Travel",
      "url": "https://homolog.rcorptravel.com/",
      "sameAs": [
        "https://www.facebook.com/rcorptravel",
        "https://www.instagram.com/rcorptravel"
      ],
      "description": "Agencia de viajes premium especializada en experiencias únicas alrededor del mundo.",
    })}
  </script>
</Helmet>

  const { banners, brands } = infosHome;
  const [currentSlide, setCurrentSlide] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleCTA = () => {
    toast({
      title: "🚧 ¡Esta funcionalidad aún no ha sido implementada, pero no te preocupes! Puedes solicitarla en tu próximo mensaje. 🚀"
    });
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.8 }}
          >
            <img
              className="w-full h-full object-cover"
              alt={banners[currentSlide].image}
              src="https://images.unsplash.com/photo-1604257601296-65d349c74773" />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 5, delay: 0.2 }}
            >
              {banners[currentSlide].title}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {banners[currentSlide].subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-[#002D5F] hover:bg-[#033972] text-white px-8 py-4 text-lg rounded-full shadow-glow"
                onClick={handleCTA}
              >
                Explorar Ahora
              </Button>
            </motion.div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
                }`}
            />
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-8 text-[#002D5F]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Sobre Nosotros
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Somos una agencia de viajes premium con más de 15 años de experiencia en crear
              experiencias únicas e inolvidables. Nuestra pasión es convertir tus sueños de viaje
              en realidad, ofreciendo servicios personalizados y destinos exclusivos
              alrededor del mundo.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#002D5F]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Nuestras marcas
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Cada marca representa una especialidad única, ofreciendo experiencias
            personalizadas para diferentes tipos de viajeros.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/marca/${brand.id}`} className="block">
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-[170px]">
                    <div className="mb-4">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className={`${brand.height} mx-auto object-contain transition-all duration-300`}
                      />
                    </div>
                    <p className="text-gray-600 leading-relaxed">{brand.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;