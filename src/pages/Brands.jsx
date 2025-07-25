
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { brandsData } from '@/data/brandsData';


const Brands = () => {
  const brands = Object.values(brandsData);

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Nuestras Marcas - Agencia de Viajes Premium</title>
        <meta name="description" content="Conoce nuestras marcas especializadas: Celebrity Cruises, AmaWaterwats, MSC Cruzeiros, Scenic, Swan hellenic y Crystal." />
      </Helmet>

      <section className="relative py-20 lg:py-32 gradient-bg text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Nuestras Marcas
            </motion.h1>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <img   
            className="w-full h-full object-cover"
            alt="Collage de varios destinos de viaje"
            src="https://images.unsplash.com/photo-1574929583457-b8c64fe82b60" />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img   
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    alt={brand.heroImage}
                    src={brand.Image} />
                  <div className={`absolute inset-0 bg-gradient-to-r from-[${brand.colorStart}] to-[${brand.colorEnd}] opacity-70`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{brand.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-1">{brand.subtitles}</p>
                  
                  <Link
                    to={`/nuestras-marcas/${Object.keys(brandsData)[index]}`}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group mt-auto"
                  >
                    <span>Más información</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-8 gradient-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              ¿Qué marca va contigo?
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Cada viajero es único, y tenemos la marca perfecta para hacer realidad tus sueños. 
              Explora nuestras especialidades y descubre cuál se adapta mejor a tu estilo de viaje.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
