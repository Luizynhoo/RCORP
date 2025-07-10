import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Star, MapPin, Calendar, Users, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import DestinationPopup from '@/components/destinationPopup/DestinationPopup';
import { brandsData } from '../../data/brandsData';

import './brandDetail.css';

const BrandDetail = () => {
  const { brandId } = useParams();
  const { toast } = useToast();
  const [selectedDestination, setSelectedDestination] = useState(null);

  const brand = brandsData[brandId];

  if (!brand) {
    return (
      <div style={{ minHeight: '100vh', paddingTop: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>
            Marca não encontrada
          </h1>
          <Link to="/marcas" style={{ color: '#2563eb', textDecoration: 'none' }}>
            Voltar para Marcas
          </Link>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀"
    });
  };

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  const heroOverlayStyle = {
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(135deg, ${brand.colorStart} 0%, ${brand.colorEnd} 100%)`,
    opacity: 0.5
  };

  const sectionStyle = {
    padding: '80px 0'
  };

  const gradientTextBrand = (brand) => ({
    background: `linear-gradient(135deg, ${brand.colorStart} 0%, ${brand.colorEnd} 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '32px'
  });

  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <Helmet>
        <title>{`${brand.name} - Viagens Exclusivas com Rcorp Travel`}</title>
        <meta name="description" content={brand.fullDescription} />
        <link rel="canonical" href={`https://homolog.rcorptravel.com/marca/${brandId}`} />

        <meta property="og:title" content={`${brand.name} - Viagens Exclusivas com Rcorp Travel`} />
        <meta property="og:description" content={brand.fullDescription} />
        <meta property="og:url" content={`https://homolog.rcorptravel.com/marca/${brandId}`} />
        <meta property="og:image" content={brand.Image} />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${brand.name} - Viagens Exclusivas`} />
        <meta name="twitter:description" content={brand.fullDescription} />
        <meta name="twitter:image" content={brand.Image} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": brand.name,
            "url": `https://www.seusite.com/marca/${brandId}`,
            "image": brand.Image,
            "description": brand.fullDescription,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lisboa",
              "addressCountry": "PT"
            }
          })}
        </script>
      </Helmet>

      <section className='heroStyle'>
        <img
          className='heroImageStyle'
          alt={`${brand.name} hero`}
          src={`${brand.Image}`}
        />
        <div style={heroOverlayStyle} />

        <div className='heroContentStyle'>
          <div className='heroTextStyle'>
            <motion.div
              style={{ fontSize: '96px', marginBottom: '32px' }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
            </motion.div>
            <motion.h1
              style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '24px' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {brand.name}
            </motion.h1>
            <motion.p
              style={{ fontSize: '24px', marginBottom: '32px', color: 'rgba(255,255,255,0.9)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {brand.description}
            </motion.p>
            <motion.div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                style={{
                  background: 'white',
                  color: '#1f2937',
                  padding: '16px 32px',
                  fontSize: '18px',
                  borderRadius: '50px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
                onClick={handleBooking}
              >
                Reserve Agora
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ ...sectionStyle, background: 'white' }}>
        <div className='containerStyle'>
          <div className='twoColumnStyle'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 style={gradientTextBrand(brand)}>
                Sobre {brand.name}
              </h2>
              <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.625', marginBottom: '24px' }}>
                {brand.fullDescription}
              </p>
              <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: '1.625' }}>
                Nossa equipe especializada trabalha incansavelmente para garantir que cada detalhe da sua experiência seja perfeito.
                Desde o planejamento inicial até o retorno para casa, estamos aqui para tornar sua viagem inesquecível.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                className='videoContainerStyle'
                onClick={handleBooking}
              >
                <div style={{ textAlign: 'center' }}>
                  <Play style={{ width: '64px', height: '64px', color: '#2563eb', marginBottom: '16px' }} />
                  <p style={{ fontSize: '18px', fontWeight: 600 }}>Assista ao Vídeo</p>
                  <p style={{ fontSize: '14px', opacity: 0.7 }}>Conheça mais sobre {brand.name}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ ...sectionStyle, background: '#f9fafb' }}>
        <div className='containerStyle'>
          <div className='twoColumnReverseStyle'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                className='videoContainerStyle'
                onClick={handleBooking}
              >
                <div style={{ textAlign: 'center' }}>
                  <Play style={{ width: '64px', height: '64px', color: '#2563eb', marginBottom: '16px' }} />
                  <p style={{ fontSize: '18px', fontWeight: 600 }}>Experiências Exclusivas</p>
                  <p style={{ fontSize: '14px', opacity: 0.7 }}>Veja nossos diferenciais</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 style={gradientTextBrand(brand)} >
                Experiências Únicas
              </h2>
              <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.625', marginBottom: '24px' }}>
                Oferecemos muito mais do que simples viagens. Criamos experiências transformadoras que conectam você
                com culturas, paisagens e aventuras que permanecerão em sua memória para sempre.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                {brand.features.slice(0, 4).map((feature, index) => (
                  <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Star style={{ width: '16px', height: '16px', color: '#fbbf24' }} />
                    <span style={{ fontSize: '14px', color: '#4b5563' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ ...sectionStyle, background: 'white' }}>
        <div className='containerStyle'>
          <motion.h2
            style={{ ...gradientTextBrand(brand), fontSize: '48px', fontWeight: 'bold', textAlign: 'center', marginBottom: '64px' }}
            className="gradient-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Destinos Populares
          </motion.h2>

          <div className='destinationGridStyle'>
            {brand.destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                className='destinationCardStyle'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleDestinationClick(destination)}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                  alt={destination.name}
                  src={destination.DestinoImg}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1))',
                  display: 'flex',
                  alignItems: 'end',
                  padding: '20px'
                }}>
                  <div style={{ color: 'white' }}>
                    <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>
                      {destination.name}
                    </h3>
                    <p style={{ fontSize: '14px', opacity: 0.9 }}>
                      {destination.shortDescription}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{
        ...sectionStyle,
        background: `linear-gradient(135deg, ${brand.colorStart} 0%, ${brand.colorEnd} 100%)`,
        color: 'white'
      }}>
        <div className='containerStyle'>
          <div style={{ maxWidth: '896px', margin: '0 auto', textAlign: 'center' }}>
            <motion.h2
              style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '32px' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Pronto para Sua Aventura?
            </motion.h2>
            <motion.p
              style={{ fontSize: '18px', marginBottom: '48px', color: 'rgba(255,255,255,0.9)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Entre em contato conosco e comece a planejar sua próxima experiência inesquecível.
            </motion.p>
            <motion.div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center', alignItems: 'center' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                style={{
                  background: 'white',
                  color: '#1f2937',
                  padding: '16px 32px',
                  fontSize: '18px',
                  borderRadius: '50px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onClick={handleBooking}
              >
                <Calendar style={{ width: '20px', height: '20px' }} />
                Reserve Agora
              </Button>
              <Button
                size="lg"
                style={{
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                  padding: '16px 32px',
                  fontSize: '18px',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onClick={handleBooking}
              >
                <Users style={{ width: '20px', height: '20px' }} />
                Fale Conosco
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedDestination && (
          <DestinationPopup
            destination={selectedDestination}
            onClose={() => setSelectedDestination(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default BrandDetail;