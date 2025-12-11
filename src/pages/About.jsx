import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Award, Globe, Heart, Target, Zap, } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const About = () => {
  const values = [
    { icon: Heart, title: 'Pasión por los Viajes', description: 'Nuestra pasión por explorar el mundo nos motiva a crear experiencias únicas para nuestros clientes.' },
    { icon: Target, title: 'Excelencia', description: 'Siempre buscamos la excelencia en cada detalle, desde la planificación hasta la ejecución del viaje.' },
    { icon: Users, title: 'Atención Personalizada', description: 'Cada cliente es único, por eso ofrecemos una atención completamente personalizada.' },
    { icon: Globe, title: 'Experiencia Global', description: 'Con presencia en varios países, ofrecemos soporte local dondequiera que estés.' },
    { icon: Award, title: 'Calidad Garantizada', description: 'Nuestros socios son cuidadosamente seleccionados para garantizar la mejor calidad.' },
    { icon: Zap, title: 'Innovación', description: 'Utilizamos las tecnologías más modernas para facilitar y mejorar tu experiencia de viaje.' },
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Sobre Nosotros - Agencia de Viajes Premium</title>
        <meta
          name="description"
          content="Conozca nuestra historia, valores y equipo. Somos una agencia de viajes premium con más de 15 años de experiencia creando experiencias únicas."
        />
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
              Quiénes Somos
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              RCorp Travel es una empresa global de viajes y hospitalidad, especializada en el segmento de cruceros. Representamos a
              las principales compañías de cruceros del mundo, incluyendo cruceros de océano, río, expedición y yate, ofreciendo
              diversos itinerarios alrededor del mundo. Con un equipo de profesionales de servicio dedicados a la excelencia, RCorp
              Travel es el principal distribuidor de viajes de lujo en Latinoamérica, representando orgullosamente a marcas destacadas
              como Celebrity, MSC Cruceros, AmaWaterways, Crystal, Scenic, Swan Hellenic y The Ritz-Carlton Yacht Collection.
            </motion.p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <img
            className="w-full h-full object-cover"
            alt="Mapa del mundo abstracto como fondo de la sección sobre nosotros"
            src="https://images.unsplash.com/photo-1697747147941-04a7aefbd0b2"
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="two-column-section">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
                  Nuestros Inicios
                </h2>
                <div className="space-y-6 text-gray-600 text-lg">
                  <p>
                    Rcorp Travel es parte de la reconocida marca R11 Travel, la cual fue fundada en 2016 por nuestro CEO, el empresario Ricardo Amaral,
                    quien cuenta con más de 25 años de experiencia en el segmento de cruceros, habiendo trabajado en organizaciones líderes del sector
                    y sido nombrado uno de los “100 Más Poderosos en Turismo” por Jornal Panrotas de 2011 a 2021.
                  </p>
                  <p>
                    Lo que empezó hace 9 años con R11 Travel, pronto se distinguió por una inquebrantable dedicación a la excelencia y un servicio al
                    cliente genuinamente personalizado. Esta filosofía fue clave para nuestro crecimiento, permitiéndonos expandir nuestros horizontes
                    más allá de las fronteras nacionales y establecernos en diversos mercados internacionales como Rcorp Travel.
                  </p>
                  <p>
                    Hoy, nos enorgullece ser reconocidos como una de las agencias de viajes premium líderes, contando con representaciones en más
                    de 6 naciones y un sólido equipo de profesionales altamente especializados, todos comprometidos con la creación de experiencias
                    que son, por definición, inolvidables.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  className="w-full rounded-xl shadow-2xl"
                  alt="Equipo de viaje colaborando en una oficina moderna"
                  src="../sobre.jpg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-4 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Nuestros Valores
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Los valores que nos guían en cada decisión y experiencia que creamos.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title} 
                className="bg-white rounded-xl p-8 shadow-lg text-center transition-transform transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;